
import {htmlRecord} from './htmlRecord.js'

import { HtmlUrlClass, htmlUrl } from './htmlUrl.js'

import {htmlMediaThumbnail} from './htmlMediaThumbnail.js'







export function htmlValue(value, record_type, key, options, tableFormat=false) {


    return _getValue(value, record_type, key, options, tableFormat)

}


function _getValue(value, record_type, key, options, tableFormat){

    if(!value || value == null){ return null }

    
    if(_isDate(value)){
        return _getValueDate(value, record_type, key, options, tableFormat)
    }
    else if(_isObject(value)){

        return _getValueObject(value, record_type, key, options, tableFormat)
        
    } else if (_isArray(value)){

        return _getValueArray(value, record_type, key, options, tableFormat)
        
    } else {

        return _getValueOther(value, record_type, key, options, tableFormat)
        
    }
    


    
}


function _getValueObject(value, record_type, key, options, tableFormat){

    let content = ''
    let value_record_type = value?.['@type'] || null
    let value_record_id = value?.['@id'] || null

    
    if(value_record_type && value_record_id){

        let url = new HtmlUrlClass()
        url.urlOptions = options
        url.record_type = value_record_type
        url.record_id = value_record_id
        
        content += `<a href="${url.content}">${_getHeading1(value)}</a>`
    } else {
        content += JSON.stringify(value)
    }

    
    return content
    
}



function _getValueArray(value, record_type, key, options, tableFormat){
 
    if(value.length == 1){
        return _getValue(value)
    }

    let content = ''
    content += '<ul>'
    for(let v of value){
        content += `<li>${_getValue(v, record_type, key, options, tableFormat)}</li>`
    }
    content += '</ul>'
    return `<details> <summary>[${value.length}]</summary>${content}</details>`


}





function _getValueDate(value, record_type, key, options, tableFormat){

    let dateOptions = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        };
    return value.toLocaleString()
    
}


function _getValueOther(value, record_type, key, options, tableFormat){

    let length = null
    if(tableFormat == true){
        length = 30
    }

    if(!value || value == null){ return '' }
    
    if(key && key != null){
      if(key.toLowerCase().endsWith('url') ){
          value = `<span class="kr-${key}"><a href="${value}">${trimLength(value, length)}</a></span>`
          return value
      }  
    } 
    
    if(key && key != null){
      if(key=="@id"){
          let url = new HtmlUrlClass()
          url.urlOptions = options
          url.record_type = record_type
          url.record_id = value
          value = `<span class="kr-${key}"><a href="${url.content}">${trimLength(value, length)}</a></span>`

           return value
      }  
       
    } 

    if(key && key != null){
      if(key=="@type"){
            let url = new HtmlUrlClass()
            url.urlOptions = options
            url.record_id = null
            url.record_type = record_type

          value = `<span class="kr-${key}"><a href="${url.content}">${trimLength(value, length)}</a></span>`
          return value
      }  
    } 

    return trimLength(value, length)

}


function trimLength(value, length=30){

    if(!length || length == null){ return value }
    try{
        if(value.length > 30){
            value = value.slice(0, length) + '...'
        }
    } catch{}
    return value
}


function _getHeading1(value, options){

    let heading1 = null
    let record_type = value?.['@type'] || null
    let record_id = value?.['@id'] || null
    
    let name = value['name'] || null
    let givenName = value['givenName'] || null
    let familyName = value['familyName'] || null
    let url = value['url'] || null
    let email = value['email'] || null
    let contentUrl = value['contentUrl'] || null


    heading1 = record_type + '/' + record_id
    
    if(url && url != null){
        heading1 = url
    }

    if(email && email != null){
        heading1 = email
    }

    if(name && name != null){
        heading1 = name
    }

    if(givenName && givenName != null){
        heading1 = `${givenName} ${familyName}`
    }

    if(record_type == "PostalAddress"){
        heading1 =  `${value.streetAddress}, ${value.addressLocality}, ${value.addressRegion}, ${value.addressCountry}, ${value.postalCode}`
    }


    if(record_type == "ImageObject" && contentUrl){
        heading1 = htmlMediaThumbnail(value, options) 
    }

    if(record_type == "VideoObject" && contentUrl){
        heading1 = htmlMediaThumbnail(value, options)  
    }

    
    return heading1
    
}





function _isDate(value) {

    
    if(typeof value.getMonth === 'function'){
        
       return true

    } 
    
    return false

}



function _isObject(value) {

    if (value !== null && typeof value === 'object' && Array.isArray(value)==false) {
        return true
    }
    return false

}

function _isArray(value) {
    if (Array.isArray(value) == true && !(value instanceof String)) {
        return true
    }
    return false

}