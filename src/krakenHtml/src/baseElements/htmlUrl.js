


export function htmlUrl(options){


    /**
     *
     * options:
     * - hostname: the domain (test.com)
     * - path: the base path (/api)
     * - params: the params to add to the url ({para1: value1, ...})
     * - record_type: the record_type
     * - record_id: the record_id
     * 
     */

    
    return _getHtmlUrl(options)
    
}


function _getHtmlUrl(options){

    let domain = 'https://' + options?.hostname || null
    if(!domain || domain == null){ domain = 'https://www.test.com'}
    let url = new URL(domain)

    
    // Add params

    let p = url.searchParams
    for(let k in options?.params){
        p.set(k, options.params[k])
    }


    
    // Do pathname
    let parts = []
    
    if(options && options.path && options.path != null){
        
        let path = options.path 
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