



export function getHeading1(value){

    
}


export function getHeading2(value){


}


export function getHeadingText(value){


}



function _getHeading1(value){


    let record_type = value?.['@type']
    let record_id = value?.['@type']
    let name = value?.['name']
    let url = value?.['url']
    let email = value?.['email']
    let headline = value?.['headline']
    let givenName = value?.['givenName']
    let familyName = value?.['familyName']

    let fullAddressValues = [value?.streetAddress || null, value?.addressLocality || null, value?.addressRegion || null, value?.addressCountry || null, value?.postalCode || null]
    fullAddressValues = fullAddressValues.filter(x=> x!== null)
    let fullAddress = fullAddressValues.join(',')

    let fullNameValues = [value?.givenName || null, value?.familyName || null]
    fullNameValues = fullNameValues.filter(x=> x!== null)
    let fullName = fullNameValues.join(' ')


    
    

    
}

