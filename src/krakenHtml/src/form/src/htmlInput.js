




export function getInput(schema, htmlType, record){


    if(schema?.choices && schema?.choices != null){

        
    }
    

    
}


function _getInputChoices(schema, htmlType, record){

    let choices = ensureArray(schema?.choices)

    let content = `
        
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
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


