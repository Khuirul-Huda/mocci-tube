/**
 * 
 * Path:
 * /trending - for trending videos
 * /watch - watch videos { id= <videoid> }
 * /search - search videos {q=<string query>}
 * 
 */

import main from "../scripts/main";
import onSearch from "./SearchHandler";
import onVideoItemClicked from "./VideoItemClick";

const firstPop = true // handle popstate

const routerControl = (path, queryArg) => {
    const query = new URLSearchParams(queryArg)
    switch (path) {
        case '/':
            window.history.pushState({}, 'trending', '/trending')
            main()
            break;
        case '/trending':
            main()
            break;
        case '/watch':
            if (!query.has('id')) {
                window.history.pushState({}, 'trending', '/trending')
                console.log('no video id found')
                main()
            } else {
                onVideoItemClicked(query.get('id'))
            }
            break;
        
        case '/search':
            if (!query.has('q')) {
                window.history.pushState({}, 'trending', '/trending')
                console.log('no query found')
                main()
            } else {
                onSearch(query.get('q'))
            }
            break;

        default:
            console.log(path + 'not found')
            main()
            break;
    }
}

const getCurrentWindow = () => {
    const pathName = window.location.pathname
    const queryStr = window.location.search

    return {pathName, queryStr}
}

const onPopState = () => {
    console.log('onpopstate')
    const {pathName, queryStr} = getCurrentWindow()
    if (!firstPop) routerControl(pathName, queryStr)
} 

const DOMContentLoaded = () => {
    const {pathName, queryStr} = getCurrentWindow()
    routerControl(pathName, queryStr)
}

const registerListener = () => {
    DOMContentLoaded()
    window.addEventListener('popstate', onPopState())
    
}

export default { registerListener, getCurrentWindow }
