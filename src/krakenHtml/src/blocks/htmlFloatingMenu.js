import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'
import { htmlRecord } from './htmlRecord.js'




export function htmlFloatingMenu(value, options){

    return _getFloatingMenu(value, options)
    
}

function _getFloatingMenu(value, options){


    let links = ``

    for(let r of value?.hasPart){

        links += `<a class="nav-link " href="${r?.url}">${r?.name}</a>`
        
    }

    
    
    let content = `

    <div class="fixed-bottom">

        <p>${base.heading1(htmlRecord, options)}</p>

        ${base.buttons(htmlRecord, options)}
    
    </div>


    `

    return content
    
}