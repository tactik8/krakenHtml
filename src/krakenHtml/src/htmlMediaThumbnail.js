
import { ClassBase } from './ClassBase.js'
import {HtmlUrlClass} from './htmlUrl.js'
import { htmlRecord } from './htmlRecord.js'


import {htmlMedia} from './htmlMedia.js'
import { htmlValue } from './htmlValue.js';

export class HtmlMediaThumbnailClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content() {
        return _getMediaThumbnail(this.record, this.urlOptions);
    }
}

export function htmlMediaThumbnail(record, options) {

    
    return _getMediaThumbnail(record, options)
}

function _getMediaThumbnail(record, options) {

    if(record?.image && record?.image != null){
        record = record.image
    }

    let content = ''


    let modalId = 'modal_' + String(crypto.randomUUID())


    content = `

      <div style="max-width:200px">
          <a type="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
            ${htmlMedia(record, options)}
          </a>
      </div>
    


        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 ${htmlMedia(record, options)}
                 <div>
                    <details><summary>Details</summary>${htmlRecord(record, options)}</details>
                </div>
              </div>

            </div>
          </div>
        </div>



 `

    return content

}
