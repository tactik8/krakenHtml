
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



    //
    if (options.offset || options.offset != null){
        p.set('offset', options.offset)
    }
    if (options.limit || options.limit != null){
        p.set('limit', options.limit)
    }
    if (options.orderBy || options.orderBy != null){
        p.set('orderBy', options.orderBy)
    }
    if (options.orderDirection || options.orderDirection != null){
        p.set('orderDirection', options.orderDirection)
    }
    

    
    // Do pathname
    let parts = []
    
    if(path && path != null){
        if(path.startsWith('/')) { path = path.slice(1)}
        if(path.endsWith('/')) { path = path.slice(-1)}
        parts = parts.concat(path.split('/'))
    }


    if(options && options.basePath && options.basePath != null){
        
        let path = options.basePath 
        console.log('p', path)
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