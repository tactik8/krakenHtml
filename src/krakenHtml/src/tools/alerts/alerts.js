
import {htmlBaseElements as base} from '../../baseElements/htmlBaseElements.js'



export class Alerts{
    constructor(){

        this.alerts = []
        this.containerID = String(crypto.randomUUID())
        this.container = null
        this.init()

        
    }


    init(){
        this.container = getContainer(this.containerID)
        document.body.appendChild(this.container)
    }
    
    add(record, options){

        let alertID = String(crypto.randomUUID())
        let alert = getAlert(alertID, record, options)
        this.container.appendChild(alert)
        this.alerts.push(alert)
        
        var bootstrapToast = new bootstrap.Toast(alert);

        bootstrapToast.show()

    }

    new(title, content, options){

        let record = {
            "@type": "InformAction",
            "@id": String(crypto.randomUUID()),
            "name": title,
            "description": content
        }
        this.add(record, options)
        
    }
}



function getContainer(id){

    let content2 = `
    
    <div aria-live="polite" aria-atomic="true" >
     
        <div class="toast-container top-0 end-0 p-3" id="${id}">

    
        </div>
    </div>
    `

    let content = `
    <div class="toast-container top-0 end-0  p-3"  id="${id}">
    </div>
    `
    
    let temp = document.createElement('div')
    temp.innerHTML = content
    let container = temp.firstElementChild
    
    
    return container
    
}


function getAlert(alertID, record, options){

    

    let image = base.mediaAvatar(record, options)
    let title = base.heading1(record, options)
    let content = base.headingDescription(record, options)
    let date = base.dateRelative(record, options)
    
    let toastContent = base.toast(alertID, image, title, content, date)
    let temp = document.createElement('div')
    temp.innerHTML = toastContent
    let toast = temp.firstElementChild


    return toast

    
}

function triggerAlert(alertID){


    let alert = document.getElementById(alertID)
    alert.show()
    
}