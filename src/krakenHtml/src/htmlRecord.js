
import { htmlValue } from './htmlValue.js'



export function htmlRecord(record) {


    let content = `<dl class="row">${_getHtml(record)} </dl>`

    return content

}




function _getHtml(value) {

    let content = ''

    if (_isObject(value)==true) {
        content += `<dl class="row">`
        for (let k of Object.keys(value)) {
            let v = value[k]
            content += ` <dt class="col-sm-2">${k}</dt>`
            content += ` <dd class="col-sm-10">${_getHtmlValue(v)}</dd>`
        }
        content += `</dl>`

    } else if (_isArray(value) == true) {

        let n = 0
        content += `<dl class="row">`
        for (let v of value) {
            content += ` <dt class="col-sm-1">[${n}]</dt>`
            content += ` <dd class="col-sm-11">${_getHtmlValue(v)}</dd>`
            n += 1
        }
        content += `</dl>`
        
    } else {
        content = content + String(htmlValue(value))
    }

    return content


}


function _getHtmlValue(value) {

    let content =''
    if (_isObject(value)==true) {
        let s = htmlValue(value)
        content += ` <details>
                    <summary>${s}</summary>
                    ${_getHtml(value)}
                </details>`
    } else if (_isArray(value)==true) {
        let s = value.length
        content += ` <details>
                      <summary>[${s}]</summary>
                      ${_getHtml(value)}
                  </details>`
    }
    else {
        content = htmlValue(value)
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