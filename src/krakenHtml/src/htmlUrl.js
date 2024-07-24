
import { ClassBase } from './ClassBase.js'


export class HtmlUrlClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content() {
        return _getHtmlUrl(null, this.urlOptions)
    }

    
}


export function htmlUrl(path, options){

    return _getHtmlUrl(path, options)
    
}


function _getHtmlUrl(path, options){

    let domain = options?.hostname || null
    if(!domain || domain == null){ domain = 'https://www.test.com'}
    let url = new URL(domain)

    

    // Do params

    let p = url.searchParams

    for(let k in options.baseParams){
        p.set(k, options.baseParams[k])
    }

    for(let k in options.params){
        p.set(k, options.params[k])
    }

    // Do pathname
    let parts = []
    
    if(path && path != null){
        if(path.startsWith('/')) { path = path.slice(1)}
        if(path.endsWith('/')) { path = path.slice(-1)}
        parts = parts.concat(path.split('/'))
    }


    if(options.basePath && options.basePath != null){
        let path = options.basePath
        if(path.startsWith('/')) { path = path.slice(1)}
        if(path.endsWith('/')) { path = path.slice(-1)}
        parts = parts.concat(path.split('/'))
    }

    
    if(options.pathname && options.pathname != null){
        let path = options.pathname
        if(path.startsWith('/')) { path = path.slice(1)}
        if(path.endsWith('/')) { path = path.slice(-1)}
        parts = parts.concat(path.split('/'))
    }

    if(options.record_type){
        parts.push(options.record_type)
    }

    if(options.record_id){
        parts.push(options.record_id)
    }

    
    url.pathname = parts.join('/')
    

    // Return pathname
    return url.pathname + url.search
    

    
}