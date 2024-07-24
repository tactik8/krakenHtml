
import { ClassBase } from './ClassBase.js'


export class HtmlPaginationClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content() {
        return _getPagination(
            this.baseUrl + this.path,
            this.query,
            this.offset,
            this.limit,
            this.orderBy,
            this.orderDirection,
            this.maxNo,
        );
    }
}


export function htmlUrl(baseUrl, options){

    
    
}


function _getHtmlUrl(baseUrl, options){


    

    
}