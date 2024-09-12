

export function formInputButton(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'button')
}

export function formInputCheckbox(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'checkbox')
}

export function formInputColor(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'color')
}

export function formInputDate(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'date')
}

export function formInputDatetimeLocal(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'datetime-local')
}

export function formInputEmail(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'email')
}

export function formInputFile(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'file')
}

export function formInputHidden(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'hidden')
}

export function formInputImage(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'image')
}

export function formInputMonth(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'month')
}

export function formInputNumber(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'number')
}

export function formInputPassword(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'password')
}

export function formInputRadio(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'radio')
}

export function formInputRange(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'range')
}

export function formInputReset(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'reset')
}

export function formInputSearch(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'search')
}

export function formInputSubmit(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'submit')
}

export function formInputTel(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'tel')
}

export function formInputText(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'text')
}

export function formInputTime(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'time')
}

export function formInputUrl(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'url')
}

export function formInputWeek(propertyID, inputID, caption, value){
    return formInputString(propertyID, inputID, caption, value, 'week')
}



export function formInputString(propertyID, inputID, caption, value, htmlType, autocompleteProperty){

    if(!autocompleteProperty || autocompleteProperty==null){
        autocompleteProperty = _getAutocomplete(propertyID)
    }

   
    

    let content = `
    
            <input 
            autocomplete="${autocompleteProperty || ''}"
            style="max-width: 375px" 
            type="${htmlType || ''}" 
            class="form-control" 
            value="${value || ''}" 
            id="${inputID}" 
            data-propertyID="${propertyID}" 
            aria-describedby=""
            >

    `

    return content
    
}


/**
 * <input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
 */



function _getAutocomplete(propertyID){



    if(propertyID == 'addressLocality'){
        return 'address-level2'
    }

    if(propertyID == 'addressRegion'){
        return 'address-level1'
    }

    

    
     let autocompleteProperty = propertyID.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

    return autocompleteProperty

    
}