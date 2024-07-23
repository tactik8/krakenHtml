



import { ClassBase } from './ClassBase.js'


export class HtmlBreadcrumbClass extends ClassBase {
    constructor(records, request) {
        super(records, request)
    }

    get content() {

      if (this.records && this.records != null && this.records.length > 0){
        return _getBreadcrumb(this.records)
      } else {

        let records = []

        let items = this.urlPath.split('/')

        let runningUrl = ''
        for(let item of items ){

          runningUrl = [runningUrl, item].join('/')
          let record = {
            "name": "item",
            "url": runningUrl
          }
          records.push(record)
        }
        return _getBreadcrumb(records)

        
      }
        
    }
}



export function htmlBreadcrumb(records){

    return _getBreadcrumb(records)

}


function _getBreadcrumb(records){




    let parts = ''
    for(let record of records){

        parts += `<li class="breadcrumb-item"><a href="${record.url}">${record.name}</a></li>`


    let content = `<nav aria-label="breadcrumb">
  <ol class="breadcrumb">`

        
    }
    

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




