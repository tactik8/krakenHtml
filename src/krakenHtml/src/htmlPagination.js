

import { ClassBase } from './ClassBase.js'
import {HtmlUrlClass} from './htmlUrl.js'

export class HtmlPaginationClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }
    
    get content() {
        return _getPagination(this.data, this.urlOptions);
    }
}

export function htmlPagination(data, options) {

   
    
    return _getPagination(data, options);
}

function _getPagination(data, options) {

    options = JSON.parse(JSON.stringify(options))
    
    // Parameters 
    let NoOfItems = 5;  // Defines the number of links presented

    // Init variables
    
    let offset = Number(options?.params?.offset) || 0;
    let limit = Number(options?.params?.limit) || 20;
    let orderBy = Number(options?.params?.orderBy) || 'createdDate';
    let orderDirection = Number(options?.params?.orderDirection) || '-1';
    let content = ``;
    let items = ``;
    let maxNo = null


    // Deifne startNo
    let startNo = offset - (Math.floor(NoOfItems / 2) * limit);

    if (maxNo && maxNo != null) {
        if (startNo + (NoOfItems - 1) * limit > maxNo) {
            startNo = (Math.floor(maxNo / limit) + 1) * limit - NoOfItems * limit;
        }
    }

    if (startNo < 0) {
        startNo = 0;
    }


    // Assign to urlOptions

    
    // Get first Line
    let firstUrl = new HtmlUrlClass()
    options.params.offset = startNo
    firstUrl.urlOptions = options
    items += _getLine("Previous", firstUrl.content);
    
    // Get middle lines
    for (let x = 0; x < NoOfItems; x++) {
        let recordNo = startNo + x * limit;
        let pageNumber = Math.floor((startNo + x * limit) / limit) + 1;
        
        if (!maxNo || maxNo == null || recordNo < maxNo) {

            let runningUrl = new HtmlUrlClass()
            options.params.offset = recordNo
            runningUrl.urlOptions = options
            items += _getLine(String(pageNumber), runningUrl.content)
            
        }
    }

    // Get last Line

    let lastUrl = new HtmlUrlClass()
    options.params.offset = offset + limit
    lastUrl.urlOptions = options
    items += _getLine("Next", lastUrl.content);

    

    // Get wrapper
    content += `
     <nav aria-label="Navigation">
          <ul class="pagination justify-content-center">
            ${items}
          </ul>
        </nav>`;

    return content;
}




function _getLine(caption, url) {

    // disable condition
    let isDisabled = "";
    

    let item = `<li class="page-item ${isDisabled}">
      <a href="${url}" class="page-link">${caption}</a>
    </li>`;

    return item;
}


function _getLine2(
    caption,
    baseUrl,
    query,
    offset,
    limit,
    orderBy,
    orderDirection,
) {


    
    let url = new URL(baseUrl);
    let params = url.searchParams;

    if (query && query != null) {
        params.append("query", query);
    }
    if (offset && offset != null) {
        params.append("offset", offset);
    }
    if (limit && limit != null) {
        params.append("limit", limit);
    }
    if (orderBy && orderBy != null) {
        params.append("orderBy", orderBy);
    }
    if (orderDirection && orderDirection != null) {
        params.append("orderDirection", orderDirection);
    }

    // disable condition
    let isDisabled = "";
    if (offset < 0) {
        isDisabled = "disabled";
    }

    let item = `<li class="page-item ${isDisabled}">
      <a href="${url.toString()}" class="page-link">${caption}</a>
    </li>`;

    return item;
}
