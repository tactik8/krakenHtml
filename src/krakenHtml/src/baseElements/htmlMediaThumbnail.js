

import {htmlMedia} from './htmlMedia.js'



export function htmlMediaThumbnail(record, options) {

    
    return _getMediaThumbnail(record, options)
}

function _getMediaThumbnail(record, options) {

    if(!record || record == null){ record = {}}

    
    if(record?.image && record?.image != null){
        record = record.image
    }

    let content = ''


    content = `

      <div style="max-width:200px">
          <a type="button" data-bs-toggle="modal" >
            ${htmlMedia(record, options)}
          </a>
      </div>

 `

    return content

}
