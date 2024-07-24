



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
          if(item && item != null){

            runningUrl = runningUrl + '/' + item
            let record = {
              "name": item,
              "url":  runningUrl
            }
            records.push(record)
            
          }
        
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

    }

  
    let content = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
       ${parts}
      </ol>
    </nav>`
        
  
    return content
}




