


export function htmlMediaAvatar(record, options) {

    
    return _getMediaAvatar(record, options)
}




function _getMediaAvatar(record, options){


    if(!record || record == null){ record = {}}
    

    if(record?.image && record?.image != null){

        record = record.image

    }


    let record_type = record?.['@type']

    let content = ''

    if(record.contentUrl && record.contentUrl != null){
        if(record_type == 'VideoObject'){
             content = `
             <span class="kr-property kr-video">
             <div class="col-sm-12 col-md-10 col-lg-8"> 
             <video controls class="object-fit-contain img-fluid">
               <source src="${record.contentUrl}" type="video/mp4">
               Your browser does not support the video tag.
             </video>
             </div>
             </span>

             `
        } else {
             content = `
             <span
             class="me-1"
             data-record-type="${record['@type']}"
             data-record-id="${record['@id']}" 
             data-propertyID="image"
             >
                <img src="${record.contentUrl}" class="rounded-circle" alt="..." style="width:38px;">
                    
            </span>`
        }
    } else if(record.embedUrl){
        content = record.embedUrl
    }

    return content

    
}
