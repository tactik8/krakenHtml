



export function formInputSelect(propertyID, inputID, choices, captions, value){


    let content = `
    
        <select 
        style="max-width: 375px" 
        class="form-select" 
        aria-label="" 
        id="${inputID}" 
        data-propertyID="${propertyID}"
        >
          ${_getOptions(choices, captions, value)}
        </select>
    `

    return content
    
}

function _getOptions(choices, captions, value){


    if(!captions || captions == null || captions.length ==0){
        captions=options
    }
    
    let content = ''
    content += _getOption('', '', value)
    for(let i=0; i< choices.length; i++){

        content += _getOption(choices[i], captions[i], value)
        
    }
        return content
    
}

function _getOption(choice, caption, value){

    let selected = ''

    if(choice == value){
        selected = 'selected'
    }
    
    let content = `<option value="${choice}" ${selected}>${caption}</option>`
   
    return content

    
}