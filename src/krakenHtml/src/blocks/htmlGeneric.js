import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'


import { htmlRecord } from './htmlRecord.js'


export function htmlGeneric(record, options) {



    let content = _getGeneric(record, options)

    return content

}


function _getGeneric(record, options){


    if(!record || record == null){ record = {}}

    
    let content = `
        
        <div class="container">
            <div class="container mt-4 mb-4">
                ${base.media(record, options)}
            </div>

            
            

            <div class="container">
                <h1> ${base.heading1(record, options)} </h1>

                ${htmlRecord(record, options)}
                
            </div>
        </div>
    
    
    `

    return content
    
}