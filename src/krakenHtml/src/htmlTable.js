

import { htmlValue } from './htmlValue.js'


import { ClassBase } from './ClassBase.js'


export class HtmlTableClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content(){
        return _getTable(this.records, this.keys, this.headers, this.urlOptions, this.potentialActions)
    }

}






export function htmlTable(records, keys, headers, options, potentialActions) {


    return _getTable(records, keys, headers, options, potentialActions)

}


function _getTable(records, keys, headers, options, potentialActions){


    options = JSON.parse(JSON.stringify(options))

    
    records = ensureArray(records)

    // 
    if(records.length == 0 && (!keys || keys == null)) { 
        keys = ['@type', '@id']
    }

    if(!keys || keys == null){
        keys = Object.keys(records[0])
    }

    if(!headers || headers == null){
        headers = keys
    }

    
    
    let content = `<table class="table table-responsive-xl">${_getTableHeader(headers, options)} ${_getTableRows(keys, records, options)}</table>`

    return content
}



function _getTableHeader(keys){

    let content = ``

    content += `<thead><tr>`

    for(let k of keys){
        content += `  <th style="max-width: 30%" class="text-truncate" scope="col">${k}</th>`
    }

    
    content += `</tr></thead>`

    return content
}


function _getTableRows(keys, records, options){

    let content = ''
    content += `<tbody>`
    

    for(let record of records){

        content += `<tr>`

        for(let k of keys){

            content += `<td  class="text-truncate">${htmlValue(record[k], record['@type'], k, options, true)}</td>`
            
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