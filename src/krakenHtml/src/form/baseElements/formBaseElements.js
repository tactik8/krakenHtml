

import { formInputSelect} from './formInputSelect.js'
import { formInputString} from './formInputString.js'
import { formInputButton} from './formInputString.js'
import { formInputCheckbox} from './formInputString.js'
import { formInputDate} from './formInputString.js'
import { formInputDatetimeLocal} from './formInputString.js'
import { formInputEmail} from './formInputString.js'
import { formInputFile} from './formInputString.js'
import { formInputHidden} from './formInputString.js'
import { formInputImage} from './formInputString.js'
import { formInputMonth} from './formInputString.js'
import { formInputNumber} from './formInputString.js'

import { formInputPassword} from './formInputString.js'
import { formInputRadio} from './formInputString.js'
import { formInputRange} from './formInputString.js'

import { formInputReset} from './formInputString.js'
import { formInputSearch} from './formInputString.js'
import { formInputSubmit} from './formInputString.js'
import { formInputTel} from './formInputString.js'
import { formInputText} from './formInputString.js'
import { formInputTime} from './formInputString.js'
import { formInputUrl} from './formInputString.js'
import { formInputWeek} from './formInputString.js'
import { formLabel} from './formLabel.js'
import { formInputAutocomplete} from './formInputAutocomplete.js'




export const formBaseElements = {

    get: _getInput,
    label: formLabel,
    input: {
        button: formInputButton,
        checkbox: formInputCheckbox,
        date: formInputDate,
        datetimeLocal: formInputDatetimeLocal,
        email: formInputEmail,
        file: formInputFile,
        hidden: formInputHidden,
        image: formInputImage, 
        month: formInputMonth, 
        numer: formInputNumber, 
        password: formInputPassword,
        radio: formInputRadio, 
        range: formInputRange,
        reset: formInputReset,
        search: formInputSearch, 
        select: formInputSelect,
        submit: formInputSubmit, 
        tel: formInputTel, 
        text: formInputText, 
        time: formInputTime, 
        url: formInputUrl, 
        week: formInputWeek,
        string: formInputString,
        autocomplete: formInputAutocomplete
    }
    
    
    
}

function _getInput(propertyID, inputID, caption, value, htmlType, choices, choicesCaption){


    // Get select
    if(choices && choices != null && choices.length > 0){
        return formInputSelect(propertyID, inputID, choices, choicesCaption, value)
        
    }

    if(htmlType && htmlType != null){
        return formInputString(propertyID, inputID, caption, value, htmlType)
    }
    
}