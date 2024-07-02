

import { htmlValue } from './htmlValue.js'
import { htmlRecord } from './htmlRecord.js'


export function htmlCard(value){

    return _getCard(value)
    
}
export function htmlCards(value){

    return _getCards(value)

}







function _getCards(values){

    values = ensureArray(values)

    let content = ``

    content += `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`

    for(let value of values){

        content += '<div class="col">'

            content += _getCard(value)
        
        content += '</div>'

    }


    content += '</div>'

    return content

}


function _getCard(value){

    let imageUrl = value.contentUrl || value.image?.contentUrl || ''

    let modalId = 'modal_' + String(crypto.randomUUID())
    
    let heading1 = htmlValue(value)
    
    let desc = value?.text || value?.description || ''
    
    let content = `
        <div class="card h-100" style="width: 18rem;">
      <a type="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
        <img src="${imageUrl}" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">${heading1}</h5>
        <p class="card-text">${desc}</p>
        
      </div>


        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <img src="${imageUrl}" class="card-img-top" alt="...">
                 <div>
                    <details><summary>${htmlValue(value)}</summary>${htmlRecord(value)}</details>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    

      
    </div>`

    return content
    
}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}