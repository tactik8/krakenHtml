

export function formLabel(propertyID, inputID, value){



    let content = `
    <label for="${inputID}" class="text-capitalize form-label">${value}</label>
    `

    return content
    
}