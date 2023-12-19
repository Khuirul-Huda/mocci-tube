import onVideoItemClicked from "../handlers/VideoItemClick"

class VideoItem extends HTMLElement {
    constructor() {
        super()
    }

    /**
     * @param {string} url url thumbnail
     */
    set thumbnail(url) {
        this._thumbnail = url
    }

    /**
     * @param {string} title judul video
     */
    set title(title) {
        this._title = title
    }

    /**
     * @param {string} name nama uploader
     */
    set uploaderName(name) {
        this._uploaderName = name
    }

    /**
     * @param {string} url
     */
    set uploaderAvatar(url) {
        this._uploaderAvatar = url
    }

    /**
     * @param {string} idVideo
     */
    set idVideo(idVideo) {
        this._idVideo = idVideo
        this.id = idVideo
        
    }

    // updateId() {
    //     this.id = this._id
    // }

    render() {
        this.innerHTML = `
        
        <div class="sm:m-1 sm:p-2 sm:shadow mt-2 sm:rounded-lg  sm:w-80 max-w-screen-sm w-full cursor-pointer sm:transition-all " >
                    <img class="sm:rounded-lg w-full"
                        src="${this._thumbnail}"
                        alt="" loading="lazy" >
                    <div class="flex mt-1 items-center">
                        <img class="h-14 w-14 rounded-full"
                            src="${this._uploaderAvatar}"
                            alt="">
                        <div class="ml-1">
                            <p class="">${this._title}</p>
                            <p class="text-sm text-gray-500">${this._uploaderName}</p>

                        </div>
                    </div>
                </div>
        
        `

        this.addEventListener('click', (e) => {
            onVideoItemClicked(this.id)
        })
    }

    connectedCallback() {
        // console.log('Vid')
    }
}
customElements.define('video-item', VideoItem)
