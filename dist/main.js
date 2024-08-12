
class $89b885d9c9545d83$export$2ac64f08771c2db6 {
    constructor(record, urlOptions){
        this._record = {};
        this._records = [];
        this._record_type = null;
        this._record_id = null;
        if (Array.isArray(record)) this.things = record;
        else this.thing = record;
        // Object related
        // Array related
        this.potentialActions = null;
        // Links
        this.baseUrl = null;
        this.fullUrl = null;
        this.path = null;
        this._hostname = null;
        this._search = null;
        this._basePath = null;
        this._baseParams = {};
        this._params = {};
        this.urlOptions = urlOptions;
    }
    get search() {
        return this._search;
    }
    set search(value) {
        this._search = value;
    }
    get hostname() {
        return this._hostname;
    }
    set hostname(value) {
        this._hostname = value;
    }
    get basePath() {
        return this._basePath;
    }
    set basePath(value) {
        this._basePath = value;
    }
    get pathname() {
        return this.path;
    }
    set pathname(value) {
        this.path = value;
    }
    get baseParams() {
        return this._baseParams;
    }
    set baseParams(value) {
        this._baseParams = value;
    }
    get record() {
        return this._record;
    }
    set record(value) {
        this.thing = value;
    }
    get records() {
        return this._records;
    }
    set records(value) {
        this.things = value;
    }
    get record_type() {
        return this._record_type;
    }
    set record_type(value) {
        this._record_type = value;
    }
    get record_id() {
        return this._record_id;
    }
    set record_id(value) {
        this._record_id = value;
    }
    get thing() {
        return this._thing;
    }
    set thing(value) {
        if (!value || value == null) return;
        if (value.record_type) {
            this._thing = value;
            this._record = value.record;
        } else this._record = value;
        this._record_type = this._record["@type"] || this._record_type;
        this._record_id = this._record["@id"] || this._record_id;
    }
    get things() {
        return this._things;
    }
    set things(value) {
        value = $89b885d9c9545d83$var$ensureArray(value);
        if (value[0] && value[0]?.record_type) {
            this._things = value;
            this._records = value.map((x)=>x.record);
        } else this._records = value;
    }
    get content() {
        return null;
    }
    get element() {
        let tempElement = document.createElement("div");
        tempElement.innerHTMl = this.content;
        let element = tempElement.firstChild;
        return element;
    }
    get params() {
        if (!this._params || this._params == null) this._params = {};
        return this._params;
    }
    set params(value) {
        this._params = value;
    }
    // -----------------------------------------------------
    //  Atrirbutes for .params 
    // -----------------------------------------------------
    get limit() {
        return this.params?.limit;
    }
    set limit(value) {
        this.params.limit = value;
    }
    get offset() {
        return this.params?.offset;
    }
    set offset(value) {
        this.params.offset = value;
    }
    get orderBy() {
        return this.params?.orderBy;
    }
    set orderBy(value) {
        this.params.orderBy = value;
    }
    get orderDirection() {
        return this.params?.orderDirection;
    }
    set orderDirection(value) {
        this.params.orderDirection = value;
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get urlOptions() {
        let options = this._urlOptions;
        if (!options || options == null) options = {};
        if (this.basePath && this.basePath != null) options.basePath = this.basePath;
        if (this.record_type && this.record_type != null) options.record_type = this.record_type;
        if (this.record_id && this.record_id != null) options.record_id = this.record_id;
        return options;
    }
    set urlOptions(value) {
        if (!value || value == null) {
            this._urlOptions = {};
            return;
        }
        this._urlOptions = value;
        this.record_type = value.record_type || this.record_type;
        this.record_id = value.record_id || this.record_id;
        this.basePath = value.basePath || this.basePath;
    }
}
function $89b885d9c9545d83$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


class $09aaf31e9efdd809$export$a6ec59f446d054ef extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $09aaf31e9efdd809$var$_getHtmlUrl(this.urlOptions);
    }
}
function $09aaf31e9efdd809$export$65e8537a85f61405(options) {
    return $09aaf31e9efdd809$var$_getHtmlUrl(options);
}
function $09aaf31e9efdd809$var$_getHtmlUrl(options) {
    let domain = "https://" + options?.hostname;
    if (!domain || domain == null) domain = "https://www.test.com";
    let url = new URL(domain);
    // Do params
    let p = url.searchParams;
    for(let k in options?.baseParams)p.set(k, options.baseParams[k]);
    for(let k in options?.params)p.set(k, options.params[k]);
    // Do pathname
    let parts = [];
    if (options && options.basePath && options.basePath != null) {
        let path = options.basePath;
        if (path.startsWith("/")) path = path.slice(1);
        if (path.endsWith("/")) path = path.slice(-1);
        parts = parts.concat(path.split("/"));
    }
    if (options && options.pathname && options.pathname != null) {
        let path = options.pathname;
        if (path.startsWith("/")) path = path.slice(1);
        if (path.endsWith("/")) path = path.slice(-1);
        parts = parts.concat(path.split("/"));
    }
    if (options?.record_type && options?.record_type != null) parts.push(options.record_type);
    if (options?.record_id && options?.record_id != null) parts.push(options.record_id);
    url.pathname = parts.join("/");
    // Return pathname
    return url.pathname + url.search;
}








class $2dd5d2fdb56194d5$export$fdc09f86e562e652 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $2dd5d2fdb56194d5$var$_getMedia(this.record, this.urlOptions);
    }
}
function $2dd5d2fdb56194d5$export$3e6dfd0ad1544147(record, options) {
    return $2dd5d2fdb56194d5$var$_getMedia(record, options);
}
function $2dd5d2fdb56194d5$var$_getMedia(record, options) {
    if (record?.image && record?.image != null) record = record.image;
    let record_type = record?.["@type"];
    let content = "";
    if (record.contentUrl && record.contentUrl != null) {
        if (record_type == "VideoObject") content = `
             <span class="kr-property kr-video">
             <div class="col-sm-12 col-md-10 col-lg-8"> 
             <video controls class="object-fit-contain img-fluid">
               <source src="${record.contentUrl}" type="video/mp4">
               Your browser does not support the video tag.
             </video>
             </div>
             </span>
            
             `;
        else content = `<span class="kr-property kr-image"><div class=""><img src="${record.contentUrl}" class="img-fluid" alt="..."></div></span>`;
    } else if (record.embedUrl) content = record.embedUrl;
    return content;
}



class $376c5de221df8b59$export$25431e64f49f97f4 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $376c5de221df8b59$var$_getMediaThumbnail(this.record, this.urlOptions);
    }
}
function $376c5de221df8b59$export$f409e9957838cfdd(record, options) {
    return $376c5de221df8b59$var$_getMediaThumbnail(record, options);
}
function $376c5de221df8b59$var$_getMediaThumbnail(record, options) {
    if (record?.image && record?.image != null) record = record.image;
    let content = "";
    let modalId = "modal_" + String(crypto.randomUUID());
    content = `

      <div style="max-width:200px">
          <a type="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
            ${(0, $2dd5d2fdb56194d5$export$3e6dfd0ad1544147)(record, options)}
          </a>
      </div>
    


        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 ${(0, $2dd5d2fdb56194d5$export$3e6dfd0ad1544147)(record, options)}
                 <div>
                    <details><summary>Details</summary>${(0, $c9d793a6343af207$export$9994024ef36d93e2)(record, options)}</details>
                </div>
              </div>

            </div>
          </div>
        </div>



 `;
    return content;
}


function $32ba22f6ec84c003$export$3db5d5f902fa227b(value, record_type, key, options, tableFormat = false) {
    return $32ba22f6ec84c003$var$_getValue(value, record_type, key, options, tableFormat);
}
function $32ba22f6ec84c003$var$_getValue(value, record_type, key, options, tableFormat) {
    if (!value || value == null) return null;
    if ($32ba22f6ec84c003$var$_isDate(value)) return $32ba22f6ec84c003$var$_getValueDate(value, record_type, key, options, tableFormat);
    else if ($32ba22f6ec84c003$var$_isObject(value)) return $32ba22f6ec84c003$var$_getValueObject(value, record_type, key, options, tableFormat);
    else if ($32ba22f6ec84c003$var$_isArray(value)) return $32ba22f6ec84c003$var$_getValueArray(value, record_type, key, options, tableFormat);
    else return $32ba22f6ec84c003$var$_getValueOther(value, record_type, key, options, tableFormat);
}
function $32ba22f6ec84c003$var$_getValueObject(value, record_type, key, options, tableFormat) {
    let content = "";
    let value_record_type = value?.["@type"] || null;
    let value_record_id = value?.["@id"] || null;
    if (value_record_type && value_record_id) {
        let url = new (0, $09aaf31e9efdd809$export$a6ec59f446d054ef)();
        url.urlOptions = options;
        url.record_type = value_record_type;
        url.record_id = value_record_id;
        content += `<a href="${url.content}">${$32ba22f6ec84c003$var$_getHeading1(value)}</a>`;
    } else content += JSON.stringify(value);
    return content;
}
function $32ba22f6ec84c003$var$_getValueArray(value, record_type, key, options, tableFormat) {
    if (value.length == 1) return $32ba22f6ec84c003$var$_getValue(value);
    let content = "";
    content += "<ul>";
    for (let v of value)content += `<li>${$32ba22f6ec84c003$var$_getValue(v, record_type, key, options, tableFormat)}</li>`;
    content += "</ul>";
    return `<details> <summary>[${value.length}]</summary>${content}</details>`;
}
function $32ba22f6ec84c003$var$_getValueDate(value, record_type, key, options, tableFormat) {
    let dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    return value.toLocaleString();
}
function $32ba22f6ec84c003$var$_getValueOther(value, record_type, key, options, tableFormat) {
    let length = null;
    if (tableFormat == true) length = 30;
    if (!value || value == null) return "";
    if (key && key != null) {
        if (key.toLowerCase().endsWith("url")) {
            value = `<span class="kr-${key}"><a href="${value}">${$32ba22f6ec84c003$var$trimLength(value, length)}</a></span>`;
            return value;
        }
    }
    if (key && key != null) {
        if (key == "@id") {
            let url = new (0, $09aaf31e9efdd809$export$a6ec59f446d054ef)();
            url.urlOptions = options;
            url.record_type = record_type;
            url.record_id = value;
            value = `<span class="kr-${key}"><a href="${url.content}">${$32ba22f6ec84c003$var$trimLength(value, length)}</a></span>`;
            return value;
        }
    }
    if (key && key != null) {
        if (key == "@type") {
            let url = new (0, $09aaf31e9efdd809$export$a6ec59f446d054ef)();
            url.urlOptions = options;
            url.record_id = null;
            url.record_type = record_type;
            value = `<span class="kr-${key}"><a href="${url.content}">${$32ba22f6ec84c003$var$trimLength(value, length)}</a></span>`;
            return value;
        }
    }
    return $32ba22f6ec84c003$var$trimLength(value, length);
}
function $32ba22f6ec84c003$var$trimLength(value, length = 30) {
    if (!length || length == null) return value;
    try {
        if (value.length > 30) value = value.slice(0, length) + "...";
    } catch  {}
    return value;
}
function $32ba22f6ec84c003$var$_getHeading1(value, options) {
    let heading1 = null;
    let record_type = value?.["@type"] || null;
    let record_id = value?.["@id"] || null;
    let name = value["name"] || null;
    let givenName = value["givenName"] || null;
    let familyName = value["familyName"] || null;
    let url = value["url"] || null;
    let email = value["email"] || null;
    let contentUrl = value["contentUrl"] || null;
    heading1 = record_type + "/" + record_id;
    if (url && url != null) heading1 = url;
    if (email && email != null) heading1 = email;
    if (name && name != null) heading1 = name;
    if (givenName && givenName != null) heading1 = `${givenName} ${familyName}`;
    if (record_type == "PostalAddress") heading1 = `${value.streetAddress}, ${value.addressLocality}, ${value.addressRegion}, ${value.addressCountry}, ${value.postalCode}`;
    if (record_type == "ImageObject" && contentUrl) heading1 = (0, $376c5de221df8b59$export$f409e9957838cfdd)(value, options);
    if (record_type == "VideoObject" && contentUrl) heading1 = (0, $376c5de221df8b59$export$f409e9957838cfdd)(value, options);
    return heading1;
}
function $32ba22f6ec84c003$var$_isDate(value) {
    if (typeof value.getMonth === "function") return true;
    return false;
}
function $32ba22f6ec84c003$var$_isObject(value) {
    if (value !== null && typeof value === "object" && Array.isArray(value) == false) return true;
    return false;
}
function $32ba22f6ec84c003$var$_isArray(value) {
    if (Array.isArray(value) == true && !(value instanceof String)) return true;
    return false;
}




class $c9d793a6343af207$export$6bfbce2f9cd9b0e4 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $c9d793a6343af207$var$_getHtml(this.record, this.record_type, null, this.urlOptions);
    }
}
function $c9d793a6343af207$export$9994024ef36d93e2(record, options) {
    let content = `
        <dl class="row">
            ${$c9d793a6343af207$var$_getHtml(record, record["@type"], null, options)} 
        </dl>`;
    return content;
}
function $c9d793a6343af207$var$_getHtml(value, record_type, key, options) {
    let content = "";
    if ($c9d793a6343af207$var$_isObject(value) == true) {
        content += `<dl class="row">`;
        for (let k of Object.keys(value)){
            let v = value[k];
            content += ` <dt class="col-sm-12 col-lg-2">${k}</dt>`;
            content += ` <dd class="col-sm-12 col-lg-10">${$c9d793a6343af207$var$_getHtmlValue(v, record_type, k, options)}</dd>`;
        }
        content += `</dl>`;
    } else if ($c9d793a6343af207$var$_isArray(value) == true) {
        let n = 0;
        content += `<dl class="row">`;
        for (let v of value){
            content += ` <dt class="col-sm-1 col-lg-1">[${n}]</dt>`;
            content += ` <dd class="col-sm-11 col-lg-11">${$c9d793a6343af207$var$_getHtmlValue(v, record_type, key, options)}</dd>`;
            n += 1;
        }
        content += `</dl>`;
    } else content = content + String((0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value, record_type, key, options));
    return content;
}
function $c9d793a6343af207$var$_getHtmlValue(value, record_type, key, options) {
    let content = "";
    if ($c9d793a6343af207$var$_isObject(value) == true) {
        let s = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value, record_type, key, options);
        content += ` <details>
                    <summary>${s}</summary>
                    ${$c9d793a6343af207$var$_getHtml(value, record_type, key, options)}
                </details>`;
    } else if ($c9d793a6343af207$var$_isArray(value) == true) {
        let s = value.length;
        content += ` <details>
                      <summary>[${s}]</summary>
                      ${$c9d793a6343af207$var$_getHtml(value, record_type, key, options)}
                  </details>`;
    } else content = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value, record_type, key, options);
    return content;
}
function $c9d793a6343af207$var$_isObject(value) {
    if (value !== null && typeof value === "object" && Array.isArray(value) == false) return true;
    return false;
}
function $c9d793a6343af207$var$_isArray(value) {
    if (Array.isArray(value) == true) return true;
    return false;
}



function $dd9b1b95cb167d3d$export$b7652f6cb30c4307(title, content) {
    return `

    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>

    <body>
        
        ${content}
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossorigin="anonymous"></script>

        


    </body>

    </html>
    
    
    `;
}




class $0ea0e18bb6665923$export$e4ef31a20800ff68 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $0ea0e18bb6665923$var$_getTable(this.records, this.keys, this.headers, this.urlOptions, this.potentialActions);
    }
}
function $0ea0e18bb6665923$export$52d811370d113530(records, keys, headers, options, potentialActions) {
    return $0ea0e18bb6665923$var$_getTable(records, keys, headers, options, potentialActions);
}
function $0ea0e18bb6665923$var$_getTable(records, keys, headers, options, potentialActions) {
    options = JSON.parse(JSON.stringify(options));
    // Use itemLsitElements if ListItem
    if (Array.isArray(records) == false && records?.["@type"] == "ItemList") records = records.itemListElement;
    records = $0ea0e18bb6665923$var$ensureArray(records);
    // 
    if (records.length == 0 && (!keys || keys == null)) keys = [
        "@type",
        "@id"
    ];
    if (!keys || keys == null) keys = Object.keys(records[0]);
    if (!headers || headers == null) headers = keys;
    let content = `<table class="table table-responsive-xl">${$0ea0e18bb6665923$var$_getTableHeader(headers, options)} ${$0ea0e18bb6665923$var$_getTableRows(keys, records, options)}</table>`;
    return content;
}
function $0ea0e18bb6665923$var$_getTableHeader(keys) {
    let content = ``;
    content += `<thead><tr>`;
    for (let k of keys)content += `  <th style="max-width: 30%" class="text-truncate" scope="col">${k}</th>`;
    content += `</tr></thead>`;
    return content;
}
function $0ea0e18bb6665923$var$_getTableRows(keys, records, options) {
    let content = "";
    content += `<tbody>`;
    for (let record of records){
        content += `<tr>`;
        for (let k of keys)content += `<td  class="text-truncate">${(0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(record[k], record["@type"], k, options, true)}</td>`;
        content += `</tr>`;
    }
    content += `</tbody>`;
    return content;
}
function $0ea0e18bb6665923$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}







class $0f8c405a4572c421$export$9fb493bb1e1a940f extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records1, request){
        super(records1, request);
    }
    get content() {
        return $0f8c405a4572c421$var$_getCard(this.record, this.urlOptions);
    }
}
function $0f8c405a4572c421$export$31c173b099afd3ce(value, options) {
    return $0f8c405a4572c421$var$_getCard(value, options);
}
class $0f8c405a4572c421$export$21b6c3340a001878 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records1, request){
        super(records1, request);
    }
    get content() {
        return $0f8c405a4572c421$var$_getCards(this.records, this.urlOptions);
    }
}
function $0f8c405a4572c421$export$c668812a50c07d21(value, options) {
    return $0f8c405a4572c421$var$_getCards(value, options);
}
function $0f8c405a4572c421$var$_getCards(values, options) {
    // Use itemLsitElements if ListItem
    if (Array.isArray(records) == false && records?.["@type"] == "ItemList") records = records.itemListElement;
    values = $0f8c405a4572c421$var$ensureArray(values);
    let content = ``;
    content += `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`;
    for (let value of values){
        content += '<div class="col">';
        content += $0f8c405a4572c421$var$_getCard(value, options);
        content += "</div>";
    }
    content += "</div>";
    return content;
}
function $0f8c405a4572c421$var$_getCard(value, options) {
    let modalId = "modal_" + String(crypto.randomUUID());
    let heading1 = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value);
    let desc = value?.text || value?.description || "";
    let content = `
    <div class="kr-thing kr-card">
        <div class="card h-100" style="width: 18rem;">
            <a type="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
                ${(0, $2dd5d2fdb56194d5$export$3e6dfd0ad1544147)(value, options)}
            </a>
      <div class="card-body">
        <h5 class="card-title kr-property kr-headline">${heading1}</h5>
        <p class="card-text kr-property kr-text">${desc}</p>
        
      </div>


        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 ${(0, $2dd5d2fdb56194d5$export$3e6dfd0ad1544147)(value, options)}
                 <div>
                    <details><summary>${(0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value, value["@type"], null, options)}</summary>${(0, $c9d793a6343af207$export$9994024ef36d93e2)(value, options)}</details>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    

      
    </div>
    </div>`;
    return content;
}
function $0f8c405a4572c421$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


function $04bed36c37a84390$export$a5436958d2eb8066(value) {
    return $04bed36c37a84390$var$getNavbar(value);
}
function $04bed36c37a84390$var$getNavbar(value) {
    let links = ``;
    for (let r of value?.hasPart)links += `<a class="nav-link " href="${r?.url}">${r?.name}</a>`;
    let content = `

        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">${value?.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        ${links}
              </div>
            </div>
          </div>
        </nav>

`;
    return content;
}


function $eaa0dfe8dd336822$export$b565a899447a9241(value) {
    return $eaa0dfe8dd336822$var$_getFooter(value);
}
function $eaa0dfe8dd336822$var$_getFooter(value) {
    let links = ``;
    for (let r of value?.hasPart)links += `<li class="nav-item mb-2"><a class="nav-link " href="${r?.url}">${r?.name}</a></li>`;
    let content = ` 
    <div class=" bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
          
                <div class="col mb-3">
                    <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                    <p class="text-body-secondary">\xa9 2024</p>
                </div>

                <div class="col d-none d-md-block mb-3">
    
                </div>
    
                <div class="col d-none d-md-block mb-3">
                 
                </div>
    
                <div class="col d-none d-md-block mb-3">
                  
                </div>
    
                <div class="col mb-3">
                  
                  <ul class="nav flex-column">
                    ${links}
                  </ul>
                  
                </div>
            
            </footer>
        </div>
    </div>
`;
    return content;
}


function $a871279af8aa7d8b$export$e40a2164d99fef4d(content) {
    return `<section> <div class="container mt-4"> ${content} </div> </section>`;
}



function $64ebcd7c9c5f16e6$export$bca84a77ec8b9a9b(value, includeToC = false) {
    if (includeToC == false) return $64ebcd7c9c5f16e6$var$_getArticleOnly(value);
    else return $64ebcd7c9c5f16e6$var$_getArticleAndToC(value);
}
function $64ebcd7c9c5f16e6$var$_getArticleOnly(value) {
    let navID = value["@type"] + "_" + value["@id"];
    let content = `<article> <div data-bs-spy="scroll" data-bs-target="#${navID}">${$64ebcd7c9c5f16e6$var$_getArticle(value)}  </div></article>`;
    return content;
}
function $64ebcd7c9c5f16e6$var$_getArticleAndToC(value) {
    let navID = value["@type"] + "_" + value["@id"];
    let content = ` <article>
                        <div class="row" > 
                            <div class="col col-12 col-lg-9" data-bs-spy="scroll" data-bs-target="#${navID}"> 
                                ${$64ebcd7c9c5f16e6$var$_getArticle(value)}
                            </div>
                            <div class="col col-12 col-lg-3 d-none d-lg-block"> 
                                ${$64ebcd7c9c5f16e6$var$_getToC(value)}
                            </div>
                        </div>
                    </article>
    `;
    return content;
}
function $64ebcd7c9c5f16e6$var$_getArticle(value, level = 1) {
    let content = ``;
    let anchorId = value.headline.replace(" ", "_");
    let text = value?.articleBody || value?.text;
    let imageUrl = value?.image?.contentUrl || value?.contentUrl || null;
    // Image
    if (imageUrl && imageUrl != null) content += `<div class="container mb-4"><img class="img-fluid" src="${imageUrl}"></div>`;
    // Date
    let date = value?.datePublished || value?.dateCreated || null;
    if (date && date != null) content += `<div>${date.toLocaleDateString()}</div>`;
    // Author
    let author = value?.author || null;
    if (author && author != null) content += `<div>${(0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(author)}</div>`;
    // headline
    content += `<div>`;
    content += `<a id="${anchorId}" name="${anchorId}"></a>`;
    content += `<h${level} class="mt-2">${value.headline}</h${level}>`;
    // body
    content += `${text}`;
    // sub sections
    for (let v of value?.hasPart || [])content += $64ebcd7c9c5f16e6$var$_getArticle(v, level + 1);
    // Complete
    content += "</div>";
    return content;
}
function $64ebcd7c9c5f16e6$var$_getToC(value, level = 1) {
    let content = "";
    if (level == 1) {
        content += `<style>a.active { font-weight: bold;}</style>`;
        let navID = value["@type"] + "_" + value["@id"];
        content += `<div class="sticky-top" ><nav class="" id="${navID}">`;
    }
    let anchorId = value.headline.replace(" ", "_");
    content += '<ul class=" flex-column">';
    content += `<li class=""><a class="" href="#${anchorId}">${value.headline}</li>`;
    for (let v of value?.hasPart || [])content += $64ebcd7c9c5f16e6$var$_getToC(v);
    content += "</ul>";
    if (level == 1) content += `</nav></div>`;
    return content;
}




class $7ff3a9d3bb644157$export$726ef0cd58bc84d1 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $7ff3a9d3bb644157$var$_getPagination(this.data, this.urlOptions);
    }
}
function $7ff3a9d3bb644157$export$17c6b15dacb75ccc(data, options) {
    return $7ff3a9d3bb644157$var$_getPagination(data, options);
}
function $7ff3a9d3bb644157$var$_getPagination(data, options) {
    options = JSON.parse(JSON.stringify(options));
    // Parameters 
    let NoOfItems = 5; // Defines the number of links presented
    // Init variables
    let offset = Number(options?.params?.offset) || 0;
    let limit = Number(options?.params?.limit) || 20;
    let orderBy = Number(options?.params?.orderBy) || "createdDate";
    let orderDirection = Number(options?.params?.orderDirection) || "-1";
    let content = ``;
    let items = ``;
    let maxNo = null;
    // Deifne startNo
    let startNo = offset - Math.floor(NoOfItems / 2) * limit;
    if (maxNo && maxNo != null) {
        if (startNo + (NoOfItems - 1) * limit > maxNo) startNo = (Math.floor(maxNo / limit) + 1) * limit - NoOfItems * limit;
    }
    if (startNo < 0) startNo = 0;
    // Assign to urlOptions
    // Get first Line
    let firstUrl = new (0, $09aaf31e9efdd809$export$a6ec59f446d054ef)();
    options.params.offset = startNo;
    firstUrl.urlOptions = options;
    items += $7ff3a9d3bb644157$var$_getLine("Previous", firstUrl.content);
    // Get middle lines
    for(let x = 0; x < NoOfItems; x++){
        let recordNo = startNo + x * limit;
        let pageNumber = Math.floor((startNo + x * limit) / limit) + 1;
        if (!maxNo || maxNo == null || recordNo < maxNo) {
            let runningUrl = new (0, $09aaf31e9efdd809$export$a6ec59f446d054ef)();
            options.params.offset = recordNo;
            runningUrl.urlOptions = options;
            items += $7ff3a9d3bb644157$var$_getLine(String(pageNumber), runningUrl.content);
        }
    }
    // Get last Line
    let lastUrl = new (0, $09aaf31e9efdd809$export$a6ec59f446d054ef)();
    options.params.offset = offset + limit;
    lastUrl.urlOptions = options;
    items += $7ff3a9d3bb644157$var$_getLine("Next", lastUrl.content);
    // Get wrapper
    content += `
     <nav aria-label="Navigation">
          <ul class="pagination justify-content-center">
            ${items}
          </ul>
        </nav>`;
    return content;
}
function $7ff3a9d3bb644157$var$_getLine(caption, url) {
    // disable condition
    let isDisabled = "";
    let item = `<li class="page-item ${isDisabled}">
      <a href="${url}" class="page-link">${caption}</a>
    </li>`;
    return item;
}
function $7ff3a9d3bb644157$var$_getLine2(caption, baseUrl, query, offset, limit, orderBy, orderDirection) {
    let url = new URL(baseUrl);
    let params = url.searchParams;
    if (query && query != null) params.append("query", query);
    if (offset && offset != null) params.append("offset", offset);
    if (limit && limit != null) params.append("limit", limit);
    if (orderBy && orderBy != null) params.append("orderBy", orderBy);
    if (orderDirection && orderDirection != null) params.append("orderDirection", orderDirection);
    // disable condition
    let isDisabled = "";
    if (offset < 0) isDisabled = "disabled";
    let item = `<li class="page-item ${isDisabled}">
      <a href="${url.toString()}" class="page-link">${caption}</a>
    </li>`;
    return item;
}


function $805cd539bcbfab21$export$41da80d3811e604b(heading, baseContent) {
    return $805cd539bcbfab21$var$_getAccordion(heading, baseContent);
}
function $805cd539bcbfab21$var$_getAccordion(heading, baseContent) {
    let cID = "collapse_" + String(crypto.randomUUID());
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
    `;
    return content;
}


function $81607166ccf27aff$export$b03720a6c3e1de32(actions) {
    return $81607166ccf27aff$var$_getActionMenu(actions);
}
function $81607166ccf27aff$var$_getActionMenu(actions) {
    // Generate action menu items
    actions = $81607166ccf27aff$var$ensureArray(actions);
    let actionMenuItems = ``;
    for (let action of actions){
        let hrefValue = "";
        if (action.url && action.url != null) hrefValue = `href="${action.url}"`;
        let onClickValue = "";
        if (action.onClick && action.onClick != null) onClickValue = `onclick="${action.onClick}"`;
        actionMenuItems += `
            <li>
                <a data-record-type="${action?.["@type"]}" data-record-id="${action?.["@id"]}" id="${action["@id"]}" class="dropdown-item" ${hrefValue} ${onClickValue}>
                    ${action.name}
                </a>
            </li>
            `;
    }
    // Generate action menu icon
    let content = `
    <div class="dropdown">
        <a class="btn p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-three-dots-vertical" >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>

        </a>

        <ul class="dropdown-menu">
        ${actionMenuItems}
        </ul>
    </div>
    `;
    return content;
}
function $81607166ccf27aff$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}









class $b8d5dfc35bfd0099$export$8f2baf8a28f733af extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $b8d5dfc35bfd0099$var$_getBreadcrumb(this.record);
    }
}
function $b8d5dfc35bfd0099$export$a8a68544893af06(record) {
    return $b8d5dfc35bfd0099$var$_getBreadcrumb(record);
}
function $b8d5dfc35bfd0099$var$_getBreadcrumb(record) {
    let listItems = record?.itemListElement;
    listItems = $b8d5dfc35bfd0099$var$ensureArray(listItems);
    listItems = listItems.sort((a, b)=>a.position - b.position);
    let parts = "";
    let newBreadCrumbItems = [];
    for (let listItem of listItems){
        let item = listItem.item;
        // Define new breadcrumbs
        let newBreadcrumb = JSON.parse(JSON.stringify(item));
        newBreadcrumb.itemListElement = JSON.parse(JSON.stringify(newBreadCrumbItems));
        newBreadCrumbItems.push(listItem);
        let options = {
            basePath: item?.url,
            params: {
                breadcrumb: JSON.stringify(newBreadcrumb)
            }
        };
        let url = (0, $09aaf31e9efdd809$export$65e8537a85f61405)(options);
        parts += `<li class="breadcrumb-item"><a href="${url}">${item.name}</a></li>`;
    }
    let content = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
       ${parts}
      </ol>
    </nav>`;
    return content;
}
function $b8d5dfc35bfd0099$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



class $8965cbda443616d8$export$8ab84c004e37b3e {
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
     */ constructor(req){
        this._record = {};
        this._headerRecord = {};
        this._footerRecord = {};
        this._content = "";
        // Values for data api
        this.basePath = null;
        this.record_type = null;
        this.record_id = null;
        // Values from the request
        this.req = req;
        this._breadcrumbs = [];
    }
    get req() {
        return this._req;
    }
    set req(value) {
        this._req = value;
        let content = this._req?.query?.breadcrumb;
        if (content || content != null) try {
            this.breadcrumb = JSON.parse(content);
        } catch (error) {}
    }
    get page() {
        return this.newPage();
    }
    newPage(req) {
        let page = new $8965cbda443616d8$export$8ab84c004e37b3e();
        page._record = JSON.parse(JSON.stringify(this._record));
        page.basePath = this.basePath;
        if (req && req != null) page.req = req;
        return page;
    }
    get record() {
        if (!this._record?.hasPart) this._record.hasPart = [];
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
        for (let p of this._record?.hasPart || []){
            if (p["@type"] == "WPHeader") return p;
        }
        // Create new
        let r = {
            "@type": "WPHeader",
            name: this._record.name,
            hasPart: []
        };
        if (!this._record?.hasPart) this._record.hasPart = [];
        this._record.hasPart.push(r);
        return r;
    }
    addHeader(name, url) {
        let newWebpage = {
            "@type": "WebPage",
            name: name,
            url: url
        };
        if (!this.wpHeader?.hasPart) this.wpHeader.hasPart = [];
        this.wpHeader.hasPart.push(newWebpage);
    }
    get wpFooter() {
        for (let p of this._record?.hasPart || []){
            if (p["@type"] == "WPFooter") return p;
        }
        // Create new
        let r = {
            "@type": "WPFooter",
            name: this._record.name,
            hasPart: []
        };
        if (!this._record?.hasPart) this._record.hasPart = [];
        this._record.hasPart.push(r);
        return r;
    }
    addFooter(name, url) {
        let newWebpage = {
            "@type": "WebPage",
            name: name,
            url: url
        };
        if (!this.wpFooter?.hasPart) this.wpFooter.hasPart = [];
        this.wpFooter.hasPart.push(newWebpage);
    }
    add(content) {
        this._content += content;
    }
    addSection(content) {
        this._content += (0, $a871279af8aa7d8b$export$e40a2164d99fef4d)(content);
    }
    get legalName() {
        return this._record?.organization?.legalName;
    }
    set legalName(value) {
        this.addLegalName(value);
    }
    addLegalName(value) {
        if (!this._record?.organization) this._record.organization = {};
        this._record.organization.legalName = value;
    }
    get logo() {
        return this._record?.organization?.brand?.logo?.contentUrl;
    }
    set logo(value) {
        this.addLogo(value);
    }
    addLogo(url) {
        if (!this._record?.organization) this._record.organization = {};
        if (!this._record?.organization?.brand) this._record.organization.brand = {};
        this._record.organization.brand.logo = {
            "@type": "ImageObject",
            contentUrl: url
        };
    }
    get content() {
        let content = "";
        content += (0, $04bed36c37a84390$export$a5436958d2eb8066)(this.wpHeader);
        content += this._content;
        content += (0, $eaa0dfe8dd336822$export$b565a899447a9241)(this.wpFooter);
        return (0, $dd9b1b95cb167d3d$export$b7652f6cb30c4307)(this.name, content);
    }
    // -----------------------------------------------------
    //  Info from request
    // -----------------------------------------------------
    get urlOptions() {
        let options = {
            hostname: this._req.hostname || null,
            basePath: this.basePath || null,
            pathname: this._req.pathname || null,
            params: this._req.query || {},
            record_type: this._req.query["@type"] || this._req.query["record_type"],
            record_id: this._req.query["@id"] || this._req.query["record_id"]
        };
        try {
            options.params.breadcrumb = JSON.stringify(this.breadcrumb);
        } catch  {
            options.params.breadcrumb = JSON.stringify({});
        }
        return options;
    }
    get pathname() {
        if (!this._req || this._req == null) return null;
        let pathname = this._req.path;
        return pathname;
    }
    get requestUrl() {
        let subDomainString = "";
        if (this._req.subdomains && this._req.subdomains.length > 0) subDomainString = this._req.subdomains.join(".") + ".";
        let content = this._req.protocol + ":" + subDomainString + this._req.hostname + this._req.originalUrl;
        return content;
    }
    // -----------------------------------------------------
    //  Breadcrumb 
    // -----------------------------------------------------
    get breadcrumb() {
        if (!this._record.breadcrumb || this._record.breadcrumb == null) this._record.breadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": String(crypto.randomUUID()),
            itemListElement: []
        };
        if (!this._record.breadcrumb.itemListElement) this._record.breadcrumb.itemListElement = [];
        this._record.breadcrumb.itemListElement = $8965cbda443616d8$var$ensureArray(this._record.breadcrumb.itemListElement);
        return this._record?.breadcrumb;
    }
    set breadcrumb(value) {
        this._record.breadcrumb = value;
    }
    addBreadcrumb(name, url) {
        // Add a breadcrumb record
        //
        let listItems = this.breadcrumb?.itemListElement;
        // Ensure not already part of items
        if (listItems && listItems.length > 0) {
            let lastItem = listItems[-1];
            if (lastItem?.item?.["url"] == url) return;
        }
        // Calculate next position
        let maxPosition = 0;
        for (let listItem of listItems)if ((listItem?.position || 0) > maxPosition) maxPosition = listItem.position;
        let record = {
            "@type": "ListItem",
            position: maxPosition + 1,
            item: {
                "@type": "WebPage",
                "@id": url,
                name: name,
                url: url
            }
        };
        this.breadcrumb.itemListElement.push(record);
    }
    get breadcrumbContent() {
        return (0, $b8d5dfc35bfd0099$export$a8a68544893af06)(this.breadcrumb);
    }
}
function $8965cbda443616d8$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



class $cf838c15c8b009ba$export$25b31ea8a1c7d629 {
    constructor(data, urlOptions){
        this._data = data;
        this._urlOptions = urlOptions;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        if (value && value != null) this._data = value;
    }
    get urlOptions() {
        return this._urlOptions;
    }
    set urlOptions(value) {
        if (value && value != null) this._urlOptions = value;
    }
    setData(data, urlOptions) {
        this.data = data;
        this.urlOptions = urlOptions;
    }
    card(data, urlOptions) {
        this.setData(data, urlOptions);
        return (0, $0f8c405a4572c421$export$31c173b099afd3ce)(this.data, this.urlOptions);
    }
    cards(data, urlOptions) {
        this.setData(data, urlOptions);
        return (0, $0f8c405a4572c421$export$c668812a50c07d21)(this.data, this.urlOptions);
    }
    media(data, urlOptions) {
        this.setData(data, urlOptions);
        return (0, $2dd5d2fdb56194d5$export$3e6dfd0ad1544147)(this.data, this.urlOptions);
    }
    mediaThumbnail(data, urlOptions) {
        this.setData(data, urlOptions);
        return (0, $376c5de221df8b59$export$f409e9957838cfdd)(this.data, this.urlOptions);
    }
    record(data, urlOptions) {
        this.setData(data, urlOptions);
        return (0, $c9d793a6343af207$export$9994024ef36d93e2)(this.data, this.urlOptions);
    }
    pagination(data, urlOptions) {
        this.setData(data, urlOptions);
        return (0, $7ff3a9d3bb644157$export$17c6b15dacb75ccc)(this.data, this.urlOptions);
    }
    table(data, urlOptions, keys, headers, potentialActions) {
        this.setData(data, urlOptions);
        return (0, $0ea0e18bb6665923$export$52d811370d113530)(this.data, keys, headers, this.urlOptions, potentialActions);
    }
}
const $cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb = {
    "accordion": (0, $805cd539bcbfab21$export$41da80d3811e604b),
    "actionMenu": (0, $81607166ccf27aff$export$b03720a6c3e1de32),
    "article": (0, $64ebcd7c9c5f16e6$export$bca84a77ec8b9a9b),
    "breadcrumb": (0, $b8d5dfc35bfd0099$export$a8a68544893af06),
    "BreadcrumbClass": (0, $b8d5dfc35bfd0099$export$8f2baf8a28f733af),
    "card": (0, $0f8c405a4572c421$export$31c173b099afd3ce),
    "CardClass": (0, $0f8c405a4572c421$export$9fb493bb1e1a940f),
    "cards": (0, $0f8c405a4572c421$export$c668812a50c07d21),
    "CardsClass": (0, $0f8c405a4572c421$export$21b6c3340a001878),
    "footer": (0, $eaa0dfe8dd336822$export$b565a899447a9241),
    "media": (0, $2dd5d2fdb56194d5$export$3e6dfd0ad1544147),
    "MediaClass": (0, $2dd5d2fdb56194d5$export$fdc09f86e562e652),
    "mediaThumbnail": (0, $376c5de221df8b59$export$f409e9957838cfdd),
    "MediaThumbnailClass": (0, $376c5de221df8b59$export$25431e64f49f97f4),
    "navbar": (0, $04bed36c37a84390$export$a5436958d2eb8066),
    "page": (0, $dd9b1b95cb167d3d$export$b7652f6cb30c4307),
    "pagination": (0, $7ff3a9d3bb644157$export$17c6b15dacb75ccc),
    "PaginationClass": (0, $7ff3a9d3bb644157$export$726ef0cd58bc84d1),
    "record": (0, $c9d793a6343af207$export$9994024ef36d93e2),
    "RecordClass": (0, $c9d793a6343af207$export$6bfbce2f9cd9b0e4),
    "section": (0, $a871279af8aa7d8b$export$e40a2164d99fef4d),
    "table": (0, $0ea0e18bb6665923$export$52d811370d113530),
    "TableClass": (0, $0ea0e18bb6665923$export$e4ef31a20800ff68),
    "url": (0, $09aaf31e9efdd809$export$65e8537a85f61405),
    "UrlClass": (0, $09aaf31e9efdd809$export$a6ec59f446d054ef),
    "value": (0, $32ba22f6ec84c003$export$3db5d5f902fa227b),
    "krakenWebsite": (0, $8965cbda443616d8$export$8ab84c004e37b3e),
    "KrakenHtmlClass": $cf838c15c8b009ba$export$25b31ea8a1c7d629
};


export {$cf838c15c8b009ba$export$25b31ea8a1c7d629 as KrakenHtmlClass, $cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb as krakenHtml};
//# sourceMappingURL=main.js.map
