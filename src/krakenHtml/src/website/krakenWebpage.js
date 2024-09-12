
import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'

import { htmlBlocks as b } from '../blocks/htmlBlocks.js'

import { htmlPages as page } from "../pages/htmlPages.js";

export class KrakenWebpage {
    /**
     *
     *
     * Initializing:
     * 
     * Initializing pages:
     * let page = website.newPage(req)
     *
     */
    constructor(website, url, name) {

        this.website = website
        this._record = {
            "@type": "WebPage",
            "@id": url,
            "hasPart": []
        };
        this._content = "";

        // Values for data api
        this.url = url;
        this.name = name
        this.record_type = 'WebPage';
        this.record_id = null;
        this.params = null
    }


    get record() {
        if (!this._record?.hasPart) {
            this._record.hasPart = [];
        }

        return this._record;
    }

    set record(value) {
        this._record = value;
    }

    set name(value) {
        this._record.name = value;
    }

   
    add(content) {
        this._content += content;
    }


    addPart(record, model, classes, options){

        let sectionRecord = {
            "@type": "section",
            "@id": String(crypto.randomUUID()),
            "model": model,
            "object": record,
            "classes": classes,
            "options": options
        }
        this._record.hasPart.push(sectionRecord)
        
    }

    
    addSection(content) {
        this._content += base.section(content);
    }

   

    get content() {


        let content = "";
        content += this.website.htmlHeaders


        let position =0
        for(let r of this._record.hasPart){

            let htmlContent =  b[r.model](r.object, r?.options, position)
            let partContent = `<section class="${r.classes || ''}"> ${htmlContent}</section>`
            content += partContent
            position += 1
        }

        content += this._content || ""
        
        content += this.website.htmlFooters
        
       
        content += this._content;
       
        return page.base(this.name, content);
    }

    // -----------------------------------------------------
    //  Info from request
    // -----------------------------------------------------

    
  
    
}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
