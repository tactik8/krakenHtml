



export function formInputString(propertyID, inputID, caption, value, htmlType){

    

    let content = `
    
            <input type="${htmlType || ''}" class="form-control" id="${inputID}" data-propertyID="${propertyID}" aria-describedby="">

    `

    return content
    
}
