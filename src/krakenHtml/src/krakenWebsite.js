
import { htmlNavbar} from './htmlNavbar.js'
import { htmlFooter} from './htmlFooter.js'
import { htmlSection} from './htmlSection.js'

import { htmlBreadcrumb} from './htmlBreadcrumb.js'


import { htmlPage} from './htmlPage.js'

export class KrakenWebsite{
    /**
     *
     *
     * Initializing:
     * let website = new KrakenWebsite()
     * website.addHeader("Data", "/data");
     * website.addHeader("Test", "/test");
     * website.addFooter("Data", "/data");
     * website.addFooter("Test", "/test");
     * website.legalName = "Kraken";
     * website.name = "Kraken API";
     * website.basePath = '/api/data'
     *
     * Initializing pages:
     * let page = website.newPage(req)
     * 
     */
    constructor(req){

        this._record = {}
        this._headerRecord = {}
        this._footerRecord = {}
        this._content = ''

        // Values for data api
        this.basePath = null
        this.record_type = null
        this.record_id = null

        // Values from the request
        this._req = req

        this._breadcrumbs = []
     
        
    }



    get req(){
        return this._req
    }

    set req(value){
        this._req = value
    }
    
    get page(){
        return this.newPage()
    }

    newPage(req){
        let page = new KrakenWebsite()
        page._record = this._record
        page.basePath = this.basePath

        if(req && req != null){
            page.req = req
        }
        
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



    // -----------------------------------------------------
    //  Info from request 
    // -----------------------------------------------------


    get urlOptions(){

        let options = {
            'hostname': this._req.hostname || null,
            'basePath': this.basePath || null,
            'pathname': this._req.pathname || null,
            'params': this._req.query || {},
            'record_type': this._req.query['@type'] || this._req.query['record_type'],
            'record_id': this._req.query['@id'] || this._req.query['record_id']
        }

        options.params.breadcrumbs = this.breadcrumbRecord
         
        return options
    }


    get pathname(){
        if(!this._req || this._req == null){ return null }
        let pathname = this._req.path
        return pathname
    }
    get requestUrl(){

        let subDomainString = ''
        if(this._req.subdomains && this._req.subdomains.length > 0){
            subDomainString = this._req.subdomains.join('.') + "."
        }
        let content = this._req.protocol + ':' + subDomainString + this._req.hostname + this._req.originalUrl
        return content
    }


    get reqBreadcrumbRecord(){
        let breadcrumbsRecords = []
        if(this._req?.query?.breadcrumbs){
            try{
                    breadcrumbsRecords = JSON.parse(this._req.query.breadcrumbs)
            } catch {}
        }
        return ensureArray(breadcrumbsRecords)
        
    }
    
    get breadcrumbRecord(){

        let breadcrumbsRecord = this._breadcrumbs
        breadcrumbsRecord = breadcrumbsRecord.concat(this.reqBreadcrumbRecord)
        return breadcrumbsRecord
    }

    set breadcrumbRecord(value){
        this._breadcrumbs = value
    }
    
    addBreadcrumbRecord(name, url){
        this._breadcrumbs.push({"name": name, "url": url})
        
    }

    get breadcrumb(){

        return htmlBreadcrumb( this.breadcrumbRecord )
        
    }
    
}






function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}