

export function htmlModal(id, title, content, options) {

    return _getModal(id, title, content, options)
}


export function htmlModalBottom(id, title, content, options) {

    let style = 'position:fixed; bottom:0; left:0%; right:0%; transform:translate(-50%, -50%);'
         
    return _getModal(id, title, content, options, style)
}


export function htmlModalButton(id, content) {

    return _getModalButton(id, content)
}



function _getModalButton(id, content) {

    let result = `
    <button type="button" class="" data-bs-toggle="modal" data-bs-target="#${id}">
      ${content}
    </button>
    `
    return result
}


function _getModal(id, title, content, options, style) {


    let result = `

            <div 
            class="modal fade" 
            id="${id}" 
            tabindex="-1" 
            aria-labelledby="${id}" 
            aria-hidden="true"
            >
            
                <div class="modal-dialog" style="${style || ''}">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                ${title || ''}
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            ${content}
                        </div>
                       
                    </div>
                </div>
            </div>
    `
    return result

}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}