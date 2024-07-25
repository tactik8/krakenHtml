
import { htmlNavbar} from './htmlNavbar.js'
import { htmlFooter} from './htmlFooter.js'
import { htmlSection} from './htmlSection.js'

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
    constructor(){

        this._record = {}
        this._headerRecord = {}
        this._footerRecord = {}
        this._content = ''

        // Values for data api
        this.basePath = null
        this.record_type = null
        this.record_id = null

        // Values from the request
        this._req = null
        this.hostname = null
        this.pathname = null
        this.params = {}
        
    }


    get page(){

        return this.newPage()
    }

    newPage(req){
        let page = new KrakenWebsite()
        page._record = this._record
        page.basePath = this.basePath

        if(req && req != null){
            page.loadFromRequest(req)
        }
        
        return page
    }


    loadFromRequest(req){


        if(!req || req == null) { return }

        this._req = req

        this.record_type = req.query['@type'] || req.query['record_type'] || req.params['@type'] || req.params['record_type'] || this.record_type
        this.record_id = req.query['@id'] || req.query['record_id'] || req.params['@id'] || req.params['record_id'] || this.record_id


        this.params =  req.query['query'] ||  req.query['q']

        if(!this.params || this.params == null) { this.params = {}}

        
        
        this.params.offset =  req.query['offset'] ||  req.query['o']
        this.params.limit =  req.query['limit'] ||  req.query['l']
        this.params.orderBy =  req.query['orderBy'] || req.query['order'] 
        this.params.orderDirection =  req.query['orderDirection'] ||  req.query['direction']

        let PORT = "";
        let protocol = req.protocol;
        this.hostname = req.hostname;
        this.pathname = req.originalUrl
        //let port = process.env.PORT || PORT;
        //let baseUrl = `${protocol}://${this.hostname}`;
        //let fullUrl = `${protocol}://${this.hostname}/${urlPath}`;

    }

    get urlOptions(){

        let options = {
            'hostname': this?.hostname || null,
            'basePath': this?.basePath || null,
            'pathname': this?.pathname || null,
            'params': this?.params || null,
            'baseParams': this?.baseParams || null,
            'record_type': this?.record_type || null,
            'record_id': this?.record_id || null
        }
        return options
    }

    set urlOptions(value){

        if(!value || value == null) { return }

        value = JSON.parse(JSON.stringify(value))

        for(let k in value){
            let v = value[k]
            if(v && v != null){
                this[k] = value[k]
            }
        }

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

    get pathname(){
        if(!this._req || this._req == null){ return null }
        let pathname = this._req.path
        return pathname
    }
    get requestUrl(){
        let content = this._req.protocol + ':' + this._req.hostname + this._req.originalUrl
        return content
    }
    
}