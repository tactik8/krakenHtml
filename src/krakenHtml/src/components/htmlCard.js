import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'



import { htmlRecord } from '../blocks/htmlRecord.js'





export function htmlCard(value, options){

    return _getCard(value, options)
    
}




export function htmlCards(value, options){

    return _getCards(value, options)

}







function _getCards(values, options){


    if(!values || values == null){ values = {}}

    
    // Use itemLsitElements if ListItem
    if(Array.isArray(records) == false && records?.['@type'] == 'ItemList'){
        records = records.itemListElement
        records = ensureArray(records)
        records = records.map(x => x?.item)
    }

    
    values = ensureArray(values)

    let content = ``

    content += `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`

    for(let value of values){

        content += '<div class="col">'

            content += _getCard(value, options)
        
        content += '</div>'

    }


    content += '</div>'

    return content

}


function _getCard(record, options){


    if(!record || record == null){ record = {}}

    let content = `
    <div 
    class="kr-thing kr-card"
    data-record-type="${record['@type']}"
    data-record-id="${record['@id']}"
    >
        <div class="card h-100" style="width: 18rem;">

            ${base.media(record, options)}
            
            <div class="card-body">

                <h5 class="card-title text-truncate">
                    ${base.heading1(record, options)}
                </h5>
                
                <p class="card-text text-truncate">
                    ${ base.headingDescription(record, options) }   
                </p>
            
             </div>
             
        </div>
        
    </div>
    `

    return content
    
}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}