


export function htmlHeading1(record, options){

    return _getHeading1(record, options)
    
}

export function htmlHeading2(record, options){

    return _getHeading2(record, options)

}

export function htmlHeadingDescription(record, options){

    return _getHeadingDescription(record, options)

}

function _getHeading1(record, options){


    if(!record || record == null){ record = {}}

    
    let heading
    
    
    if(record?._heading1 || record?._heading1 != null){
        heading = record?._heading1
    }

    if(!heading){
        if(record?.headline !== undefined && record?.headline !=null){
            heading = record.headline
        }
    }

    
    

    let content = `

        <span
        data-record-type="${record['@type']}"
        data-record-id="${record['@id']}" 
        data-propertyID="_heading1"
        >
            ${heading || ''}
        </span>
    `

    return content
    
}


function _getHeading2(record, options){

    if(!record || record == null){ record = {}}

    let heading
    
    if(record?._heading2 || record?._heading2 != null){
        heading = record?._heading2
    }

    
    let content = `

        <span
        data-record-type="${record['@type']}"
        data-record-id="${record['@id']}" 
        data-propertyID="_heading2"
        >
            ${heading || ''}
        </span>
    `
    
    return content

}


function _getHeadingDescription(record, options){

    if(!record || record == null){ record = {}}


    
    let heading 
    
    if(record?._headingDescription || record?._headingDescription != null){
        heading = record?._headingDescription
    }


    if(!heading){ heading = record?.description || record?.text || ''}


    let content = `

        <span
        data-record-type="${record['@type']}"
        data-record-id="${record['@id']}" 
        data-propertyID="_description"
        >
            ${heading || ''}
        </span>
    `

    return content

}

function _getHeadingDate(record, options){

    
    if(!record || record == null){ record = {}}

    if(record?._headingDate || record?._headingDate != null){
        heading = record?._headingDate
    }

    let value 
    
    switch(record['@type']){
        case 'Action':
            value = record['startTime']
            break
        
        default:
            if(record?.name || record?.name != null){
                heading = record.name
            } else if (record?.url || record?.url != null){
                heading = record.url
            } else {
                heading = record['@id']
            }
            break
    }


    
    if(!heading){ heading = ''}


    let content = `

        <span
        data-record-type="${record['@type']}"
        data-record-id="${record['@id']}" 
        data-propertyID="_heading2"
        >
            ${heading || ''}
        </span>
    `

    return content


    
    
}