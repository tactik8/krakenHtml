
import {htmlRecord} from './htmlRecord.js'

export function htmlValue(value) {


    return _getValue(value)

}


function _getValue(value){

    if(!value || value == null){ return null }

    if(_isObject(value)){

        return _getValueObject(value)
        
    } else if (_isArray(value)){


        return _getValueArray(value)
        
    } else {

        return _getValueOther(value)
        
    }
    


    
}


function _getValueObject(value){

    let content = ''
    let record_type = value?.['@type'] || null
    let record_id = value?.['@id'] || null


    if(record_type && record_id){
        content += `<a href="/${record_type}/${record_id}">${_getHeading1(value)}</a>`
    } else {
        content += JSON.stringify(value)
    }

    
    return content
    
}



function _getValueArray(value){
 
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

function _getValueOther(value){


    if(!value || value == null){ return null }
    
    if(typeof value.getMonth === 'function'){
        console.log('is date')
        let options = {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            };
        return value.toLocaleString()
        
    } 
    
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


function _isObject(value) {

    if (value !== null && typeof value === 'object' && Array.isArray(value)==false) {
        return true
    }
    return false

}

function _isArray(value) {
    if (Array.isArray(value) == true) {
        return true
    }
    return false

}