


export function htmlText(value, propertyID,  options){

    return _getText(value, propertyID, options)

}



function _getText(record, propertyID, options){

    if(!record || record == null){ record = {}}


    let value = record?.[propertyID] 

    if(!value || value == null){
        value = ''
    }
    
    let content = `

            <span
            data-record-type="${record['@type']}"
            data-record-id="${record['@id']}" 
            data-propertyID="${propertyID}"
            >
                ${ value }
                
            </span>
    
    `
    return content
    
    
}