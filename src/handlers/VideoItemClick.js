import getStream from "../apis/Stream"
import playHLS from "../player/PlayHLS"
import setDetail from "../player/setDetail"
import removeElement from "../util/removeElement"
import resetContainer from "../util/resetContainer"
import updateVideoList from "./updateVideoList"

const onVideoItemClicked = (videoId) => {


    getStream(videoId).then((streamData) => {
        const { hls,
            thumbnail,
            title,
            description,
            uploaderAvatar,
            uploader,
            views,
            uploaderSubscriberCount,
            relatedStreams
        } = streamData.data

        const { url } = relatedStreams[0]

        const playNextRelation = () => {
            onVideoItemClicked(String(url).substring(9))
        }

        resetContainer('video-player')
        removeElement('video-detail')
        // HLS?
        playHLS(hls, thumbnail, playNextRelation)
        setDetail(
            title,
            description,
            uploaderAvatar,
            uploader,
            views,
            uploaderSubscriberCount
        )

        updateVideoList(relatedStreams)

        window.scrollTo({ top: 0, behavior: "smooth" })
    })


}

export default onVideoItemClicked