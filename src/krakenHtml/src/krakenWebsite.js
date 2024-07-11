
import { htmlNavbar} from './htmlNavbar.js'
import { htmlFooter} from './htmlFooter.js'
import { htmlSection} from './htmlSection.js'

import { htmlPage} from './htmlPage.js'

export class KrakenWebsite{

    constructor(){

        this._record = {}
        this._headerRecord = {}
        this._footerRecord = {}
        this._content = ''
    }


    get page(){

        return this.newPage()
    }

    newPage(){
        let page = new KrakenWebsite()
        page._record = this._record
        return page
    }


    
    get record(){

        if(!this._record?.hasPart){
            this._record.hasPart = []
        }

        return this._record
    }
    
    set record(value){
        this._record = value
    }

    set name(value){
        this._record.name = value
        this.wpHeader.name = value
        this.wpFooter.name = value
    }


    get wpHeader(){

        for(let p of this._record?.hasPart || []){
            if(p['@type'] == "WPHeader"){
                return p
            }
        }

        // Create new 
        let r = {"@type": "WPHeader", "name": this._record.name, "hasPart": []}
        if(!this._record?.hasPart){ this._record.hasPart = []}
        this._record.hasPart.push(r)
        return r
    }
    
    

    addHeader(name, url){

        let newWebpage = {"@type": "WebPage", "name": name, "url": url}
        
        if(!this.wpHeader?.hasPart){
            this.wpHeader.hasPart = []
        }
        this.wpHeader.hasPart.push(newWebpage)
        
    }

    get wpFooter(){

        for(let p of this._record?.hasPart || []){
            if(p['@type'] == "WPFooter"){
                return p
            }
        }
        // Create new 
        let r = {"@type": "WPFooter", "name": this._record.name, "hasPart": []}
        if(!this._record?.hasPart){ this._record.hasPart = []}

        this._record.hasPart.push(r)
        return r
    }
    

    addFooter(name, url){

        let newWebpage = {"@type": "WebPage", "name": name, "url": url}

        if(!this.wpFooter?.hasPart){
            this.wpFooter.hasPart = []
        }
        this.wpFooter.hasPart.push(newWebpage)

    }
    
    add(content){
        this._content += content
    }

    addSection(content){
        this._content += htmlSection(content)
    }

    get legalName(){
        return this._record?.organization?.legalName
    }
    
    set legalName(value){
        this.addLegalName(value)
    }
    
    addLegalName(value){

        if(!this._record?.organization){
            this._record.organization = {}
        }
        
        this._record.organization.legalName = value
    }
    
    get logo(){
        return this._record?.organization?.brand?.logo?.contentUrl
    }

    set logo(value){
        this.addLogo(value)
    }
    
    addLogo(url){

        if(!this._record?.organization){
            this._record.organization = {}
        }
        if(!this._record?.organization?.brand){
            this._record.organization.brand = {}
        }
        this._record.organization.brand.logo = {
            "@type": "ImageObject", 
            contentUrl: url
        }
    }

    get content(){

        let content = ''
        content += htmlNavbar(this.wpHeader)
        content += this._content
        content += htmlFooter(this.wpFooter)
        return htmlPage(this.name, content)
    }

    
}