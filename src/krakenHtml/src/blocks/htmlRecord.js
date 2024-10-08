import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'





export function htmlRecord(record, options) {


    
    let content = `
        <dl class="row">
            ${_getHtmlRecord(record, record['@type'], null, options)} 
        </dl>`

    return content

}




function _getHtmlRecord(value, record_type, key, options) {



    let content = ''

    if (_isObject(value)==true) {
        content += `<dl class="row">`
        for (let k of Object.keys(value)) {
            let v = value[k]
            content += ` <dt class="col-sm-12 col-lg-2">${k}</dt>`
            content += ` <dd class="col-sm-12 col-lg-10">${_getHtmlValue(v, record_type, k, options)}</dd>`
        }
        content += `</dl>`

    } else if (_isArray(value) == true) {

        let n = 0
        content += `<dl class="row">`
        for (let v of value) {
            content += ` <dt class="col-sm-1 col-lg-1">[${n}]</dt>`
            content += ` <dd class="col-sm-11 col-lg-11">${_getHtmlValue(v, record_type, key, options)}</dd>`
            n += 1
        }
        content += `</dl>`
        
    } else {
        content = content + String(htmlValue(value, record_type, key, options ))
    }

    return content


}


function _getHtmlValue(value, record_type, key, options) {

    let content =''
    if (_isObject(value)==true) {
        let s = base.value(value, record_type, key, options)
        content += ` <details>
                    <summary>${s}</summary>
                    ${_getHtmlRecord(value, record_type, key, options)}
                </details>`
    } else if (_isArray(value)==true) {
        let s = value.length
        content += ` <details>
                      <summary>[${s}]</summary>
                      ${_getHtml(value, record_type, key, options)}
                  </details>`
    }
    else {
        content = base.value(value, record_type, key, options)
    }

    return content


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