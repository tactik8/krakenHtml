
import {htmlRecord} from './htmlRecord.js'

export function htmlValue(value, record_type, path, key, tableFormat=false) {


    return _getValue(value, record_type, path, key, tableFormat)

}


function _getValue(value, record_type, path, key, tableFormat){

    if(!value || value == null){ return null }


    if(_isDate(value)){
        return _getValueDate(value, record_type, path, key, tableFormat)
    }
    else if(_isObject(value)){

        return _getValueObject(value, record_type, path, key, tableFormat)
        
    } else if (_isArray(value)){


        return _getValueArray(value, record_type, path, key, tableFormat)
        
    } else {

        return _getValueOther(value, record_type, path, key, tableFormat)
        
    }
    


    
}


function _getValueObject(value, record_type, path, key, tableFormat){

    let content = ''
    let value_record_type = value?.['@type'] || null
    let value_record_id = value?.['@id'] || null


    if(value_record_type && value_record_id){
        content += `<a href="${path}/${value_record_type}/${value_record_id}">${_getHeading1(value)}</a>`
    } else {
        content += JSON.stringify(value)
    }

    
    return content
    
}



function _getValueArray(value, record_type, path, key, tableFormat){
 
    if(value.length == 1){
        return _getValue(value)
    }

    let content = ''
    content += '<ul>'
    for(let v of value){
        content += `<li>${_getValue(v)}</li>`
    }
    content += '</ul>'
    return `<details> <summary>[${value.length}]</summary>${content}</details>`


}





function _getValueDate(value, record_type, path, key, tableFormat){

    let options = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        };
    return value.toLocaleString()
    
}


function _getValueOther(value, record_type, path, key, tableFormat){

    let length = null
    if(tableFormat == true){
        length = 30
    }

    if(!value || value == null){ return null }
    
    if(key && key != null){
      if(key.toLowerCase().endsWith('url') ){
          value = `<a href="${value}">${trimLength(value, length)}</a>`
          return value
      }  
    } 
    
    if(key && key != null){
      if(key=="@id"){
          value = `<a href="${path}/${record_type}/${value}">${trimLength(value, length)}</a>`
           return value
      }  
       
    } 

    if(key && key != null){
      if(key=="@type"){
          value = `<a href="${path}/${value}">${trimLength(value, length)}</a>`
          return value
      }  
    } 

    return trimLength(value, length)

}


function trimLength(value, length = 30, ){

    if(!length || length == null){ return value }
    try{
        if(value.length > 30){
            value = value.slice(0, length) + '...'
        }
    } catch{}
    return value
}


function _getHeading1(value){

    let heading1 = null
    let record_type = value?.['@type'] || null
    let record_id = value?.['@id'] || null
    
    let name = value?.['name'] || null
    let givenName = value?.['givenName'] || null
    let familyName = value?.['familyName'] || null
    let url = value?.['url'] || null
    let email = value?.['email'] || null
    let contentUrl = value?.['contentUrl'] || null


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
        heading1 = `<img src="${contentUrl}" class="img-fluid" alt="...">` 
    }

    if(record_type == "VideoObject" && contentUrl){
        heading1 = `<video src="${contentUrl}" class="img-fluid" alt="...">` 
    }

    
    return heading1
    
}


function _getValueImage(value){


    let contentUrl = value?.['contentUrl'] || null

    let content = `<img src="${contentUrl}" class="img-fluid" alt="...">` 
    
}

function _getValueVideo(value){


    let contentUrl = value?.['contentUrl'] || null

    let content = `<video src="${contentUrl}" class="img-fluid" alt="...">` 

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