import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'





export function htmlChip(value, options){

    return _getChip(value, options)

}



function _getChip(record, options){

    if(!record || record == null){ record = {}}


    let content = `

            <span class="m-1">
                
                ${base.mediaAvatar(record, options)} 
                ${base.heading1(record, options)}
                
            </span>
    
    `
    return content
    
    
}