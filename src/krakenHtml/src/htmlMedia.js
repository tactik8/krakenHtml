
import { ClassBase } from './ClassBase.js'
import {HtmlUrlClass} from './htmlUrl.js'
import { htmlRecord } from './htmlRecord.js'


export class HtmlMediaClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content() {
        return _getMedia(this.record, this.urlOptions);
    }
}

export function htmlMedia(record, options) {

    
    return _getMedia(record, options)
}

function _getMedia(record, options) {


    
    if(record?.image && record?.image != null){

        record = record.image
        
    }

    
    let record_type = record?.['@type']

    let content = ''

    if(record.contentUrl && record.contentUrl != null){
        if(record_type == 'VideoObject'){
             content = `
             <div class="col-sm-12 col-md-10 col-lg-8"> 
             <video controls class="object-fit-contain img-fluid">
               <source src="${record.contentUrl}" type="video/mp4">
               Your browser does not support the video tag.
             </video>
             </div>
            
             `
        } else {
             content = `<div class=""><img src="${record.contentUrl}" class="img-fluid" alt="..."></div>`
        }
    } else if(record.embedUrl){
        content = record.embedUrl
    }

    return content

}