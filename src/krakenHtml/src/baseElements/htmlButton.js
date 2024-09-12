


export function htmlButtons(records, options) {
    
    return _getButtons(records, options)
}


export function htmlButton(record, options) {

    return _getButton(record, options, ['btn-primary'])
}




function _getButtons(records, options){


    if(!records || records == null){ return ''}
    records = ensureArray(records)
    
    if(records.length ==0 ) { return '' }

    let content = ''

    content += _getButton(records[0], options, ['btn-primary'])

    for(let i=1; i< records.length; i++){
        content += _getButton(records[i], options, ['btn-secondary'])
    }


    return content
    
}



function _getButton(record, options, classes) {

    if(!record || record == null){ record = {}}

    if(!classes || classes == null){ classes = []}

    classes = ensureArray(classes)

    let content = `
    <span
    data-record-type="${record['@type']}"
    data-record-id="${record['@id']}" 
    >
        <button 
        type="button" 
        href="${record?.url || '#'}" 
        class="btn ${classes.join(' ')}"
        >
        ${record?.name || ''}
        </button>

    </span>
    `
    return content

}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}