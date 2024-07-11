



export function htmlPagination(baseUrl, query, offset, limit, orderBy, orderDirection, maxNo){

    return _getPagination(baseUrl, query, offset, limit, orderBy, orderDirection, maxNo)
}


function _getPagination(baseUrl, query, offset, limit, orderBy, orderDirection, maxNo){


    let NoOfItems = 5
    
    let content = ``

    let startNo = offset - (Math.floor(NoOfItems / 2) * limit )

    if (maxNo && maxNo != null){

        if(startNo + ((NoOfItems -1 ) * limit)  > maxNo){

            startNo = (Math.floor(maxNo / limit) +1) * limit - (NoOfItems * limit) 
            
        }        
    }
    
    if (startNo < 0) { startNo = 0}

    let items = ``
    items += _getLine('Previous', baseUrl, query, offset-limit, limit, orderBy, orderDirection)

    for(let x =0; x<NoOfItems; x++){

        let recordNo = startNo + (x * limit)
        let pageNumber = Math.floor((startNo + (x *limit)) / limit) + 1

        if(!maxNo || maxNo == null || recordNo < maxNo){
            items += _getLine(pageNumber, baseUrl, query, recordNo, limit, orderBy, orderDirection)
        }
    }

    items += _getLine('Next', baseUrl, query, offset+limit, limit, orderBy, orderDirection)

   

    content += `
     <nav aria-label="Navigation">
          <ul class="pagination justify-content-center">
            ${items}
          </ul>
        </nav>`

    return content
    
}

function _getLine(caption, baseUrl, query, offset, limit, orderBy, orderDirection){

    let url = new URL(baseUrl);
    let params = url.searchParams;
    
    if(query && query != null ){
        params.append("query", query);
    }
    if(offset && offset != null ){
        params.append("offset", offset);
    }
    if(limit && limit != null ){
        params.append("limit", limit);
    }
    if(orderBy && orderBy != null ){
        params.append("orderBy", orderBy);
    }
    if(orderDirection && orderDirection != null ){
        params.append("orderDirection", orderDirection);
    }


    // disable condition
    let isDisabled = ""
    if(offset < 0){
        isDisabled = 'disabled'
    }
    
    let item = `<li class="page-item ${isDisabled}">
      <a href="${url.toString()}" class="page-link">${caption}</a>
    </li>`

    return item
}