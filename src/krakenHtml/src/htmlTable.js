

import { htmlValue } from './htmlValue.js'


export function htmlTable(records, keys, headers) {


    return _getTable(records, keys, headers)

}


function _getTable(records, keys, headers){

    records = ensureArray(records)

    if(!keys || keys == null){
        keys = Object.keys(records[0])
    }

    if(!headers || headers == null){
        headers = keys
    }
    
    let content = `<table class="table">${_getTableHeader(headers)} ${_getTableRows(keys, records)}</table>`

    return content
}



function _getTableHeader(keys){

    let content = ``

    content += `<thead><tr>`

    for(let k of keys){
        content += `  <th scope="col">${k}</th>`
    }

    
    content += `</tr></thead>`

    return content
}


function _getTableRows(keys, records){

    let content = ''
    content += `<tbody>`
    

    for(let record of records){

        content += `<tr>`

        for(let k of keys){

            content += `<td class="text-truncate">${htmlValue(record[k])}</td>`
            
        }

        content += `</tr>`
           
    }

    content += `</tbody>`

    return content

}





function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}