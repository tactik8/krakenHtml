import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'



export function htmlToast(id, image, title, content, dateContent) {

    return _getToast(id, image, title, content, dateContent)
}


function _getToast(id, image, title, content, dateContent){


    let result = `
    
    <div 
    class="toast" 
    role="alert" 
    aria-live="assertive" 
    aria-atomic="true"
    id="${id}"
    >
        <div class="toast-header">
            ${image || ''}
            <strong class="me-auto">
                ${title || ''}
            </strong>
            <small class="text-body-secondary">
                ${dateContent}
            </small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${content}
        </div>
    </div>
    
    
    
    `

    return result
    
}
