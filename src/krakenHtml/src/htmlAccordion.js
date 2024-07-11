


export function htmlAccordion(heading, baseContent){

    return _getAccordion(heading, baseContent)
    
}


function _getAccordion(heading, baseContent){



    let cID = 'collapse_' + String(crypto.randomUUID())
    
    let content = `
    <div class="accordion accordion-flush" id="accordionExample">

    <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${cID}" aria-expanded="false" aria-controls="${cID}">
            ${heading}
          </button>
        </h2>
        <div id="${cID}" class="accordion-collapse collapse show" data-bs-parent="#${cID}">
          <div class="accordion-body">
            ${baseContent}
          </div>
        </div>
  </div>
    </div>
    `

    return content
    

    
}