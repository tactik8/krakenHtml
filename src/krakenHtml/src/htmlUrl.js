
import { ClassBase } from './ClassBase.js'


export class HtmlUrlClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content() {
        return _getHtmlUrl(this.urlOptions)
    }

    
}


export function htmlUrl(options){

    return _getHtmlUrl(options)
    
}


function _getHtmlUrl(options){

    let domain = 'https://' + options?.hostname || null
    if(!domain || domain == null){ domain = 'https://www.test.com'}
    let url = new URL(domain)

    

    // Do params

    let p = url.searchParams

    for(let k in options?.baseParams){
        p.set(k, options.baseParams[k])
    }

    for(let k in options?.params){
        p.set(k, options.params[k])
    }



   

    
    // Do pathname
    let parts = []
    
   

    if(options && options.basePath && options.basePath != null){
        
        let path = options.basePath 
        if(path.startsWith('/')) { path = path.slice(1)}
        if(path.endsWith('/')) { path = path.slice(-1)}
        parts = parts.concat(path.split('/'))
    }

    
    if(options && options.pathname && options.pathname != null){
        let path = options.pathname
        if(path.startsWith('/')) { path = path.slice(1)}
        if(path.endsWith('/')) { path = path.slice(-1)}
        parts = parts.concat(path.split('/'))
    }

    if(options?.record_type && options?.record_type != null){
        parts.push(options.record_type)
    }

    if(options?.record_id && options?.record_id != null){
        parts.push(options.record_id)
    }

    
    url.pathname = parts.join('/')
    

    // Return pathname
    return url.pathname + url.search
    

    
}