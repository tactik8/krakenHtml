
import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'

import { htmlBlocks as b } from '../blocks/htmlBlocks.js'

import { htmlPages as page } from "../pages/htmlPages.js";

import { KrakenWebpage } from './krakenWebpage.js'



export class KrakenWebsite {
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
     * website.path = '/api/data'
     *
     * Initializing pages:
     * let page = website.newPage(req)
     *
     */
    constructor(req) {
        this._record = {};
        this._headerRecord = {};
        this._footerRecord = {};
        this._content = "";

        // Values for data api
        this.path = null;
        this.record_type = null;
        this.record_id = null;
        this.params = null
        this.path = null

        // Values from the request
        this.req = req;

        this._breadcrumbs = [];

        this.pages = []
    }

    get req() {
        return this._req;
    }

    set req(value) {
        this._req = value;

        let content = this._req?.query?.breadcrumb
        if (content || content != null) {
            try {
                this.breadcrumb = JSON.parse(content);
            } catch (error) {}
        }
    }

    get page() {
        return this.newPage();
    }

    newPage(url, name, req) {
        let page = new KrakenWebpage(this, url, name);
        //page._record = JSON.parse(JSON.stringify(this._record));
        //page.path = this.path;
        
        if (req && req != null) {
            //page.req = req;
        }
        this.pages.push(page)
        
        return page;
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
        this.wpHeader.name = value;
        this.wpFooter.name = value;
    }

    get wpHeader() {
        for (let p of this._record?.hasPart || []) {
            if (p["@type"] == "WPHeader") {
                return p;
            }
        }

        // Create new
        let r = { "@type": "WPHeader", name: this._record.name, hasPart: [] };
        if (!this._record?.hasPart) {
            this._record.hasPart = [];
        }
        this._record.hasPart.push(r);
        return r;
    }

    addHeader(name, url) {
        let newWebpage = { "@type": "WebPage", name: name, url: url };

        if (!this.wpHeader?.hasPart) {
            this.wpHeader.hasPart = [];
        }
        this.wpHeader.hasPart.push(newWebpage);
    }

    get wpFooter() {
        for (let p of this._record?.hasPart || []) {
            if (p["@type"] == "WPFooter") {
                return p;
            }
        }
        // Create new
        let r = { "@type": "WPFooter", name: this._record.name, hasPart: [] };
        if (!this._record?.hasPart) {
            this._record.hasPart = [];
        }

        this._record.hasPart.push(r);
        return r;
    }

    addFooter(name, url) {
        let newWebpage = { "@type": "WebPage", name: name, url: url };

        if (!this.wpFooter?.hasPart) {
            this.wpFooter.hasPart = [];
        }
        this.wpFooter.hasPart.push(newWebpage);
    }

    add(content) {
        this._content += content;
    }

    addSection(content) {
        this._content += base.section(content);
    }

    get legalName() {
        return this._record?.organization?.legalName;
    }

    set legalName(value) {
        this.addLegalName(value);
    }

    addLegalName(value) {
        if (!this._record?.organization) {
            this._record.organization = {};
        }

        this._record.organization.legalName = value;
    }

    get logo() {
        return this._record?.organization?.brand?.logo?.contentUrl;
    }

    set logo(value) {
        this.addLogo(value);
    }

    addLogo(url) {
        if (!this._record?.organization) {
            this._record.organization = {};
        }
        if (!this._record?.organization?.brand) {
            this._record.organization.brand = {};
        }
        this._record.organization.brand.logo = {
            "@type": "ImageObject",
            contentUrl: url,
        };
    }


    get htmlHeaders(){
        return  b.navbar(this.wpHeader);
    }

    get htmlFooters(){
        return b.footer(this.wpFooter);
    }

    
    get content() {
        let content = "";
        content += b.navbar(this.wpHeader);
        content += this._content;
        content += b.footer(this.wpFooter);
        return page.base(this.name, content);
    }

    // -----------------------------------------------------
    //  Info from request
    // -----------------------------------------------------

    get urlOptions() {
        let options = {
            hostname: this._req.hostname || null,
            path: this.path || null,
            params: this.params || {},
            record_type:this.record_type,
            record_id: this.record_id
        };

        return options;
    }

    get pathname() {
        if (!this._req || this._req == null) {
            return null;
        }
        let pathname = this._req.path;
        return pathname;
    }
  
    
}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
