

import { htmlValue } from './htmlValue.js'




export class HtmlTableClass {

    constructor(records) {
        this._records = records
        this.query = null
        this.limit = 20
        this.offset = 0
        this.orderBy = 'createdDate'
        this.orderDirection = -1
        this.potentialActions = null
        
    }

    get records(){
        return this._records
    }
    set records(value){
        this._records = value
    }

    set request(req){
        this.query =  req.query['query'] ||  req.query['q']
        this.offset =  req.query['offset'] ||  req.query['o']
        this.limit =  req.query['limit'] ||  req.query['l']
        this.orderBy =  req.query['orderBy'] || req.query['order'] 
        this.orderDirection =  req.query['orderDirection'] ||  req.query['direction']

    }

    get content(){
        return _getTable(this.records, this.keys, this.headers, this.potentialActions)
    }

        
} 



export function htmlTable(records, keys, headers, potentialActions) {


    return _getTable(records, keys, headers, potentialActions)

}


function _getTable(records, keys, headers, potentialActions){

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