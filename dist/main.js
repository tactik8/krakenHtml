
function $32ba22f6ec84c003$export$3db5d5f902fa227b(value, record_type, path, key, tableFormat = false) {
    return $32ba22f6ec84c003$var$_getValue(value, record_type, path, key, tableFormat);
}
function $32ba22f6ec84c003$var$_getValue(value, record_type, path, key, tableFormat) {
    if (!value || value == null) return null;
    if ($32ba22f6ec84c003$var$_isDate(value)) return $32ba22f6ec84c003$var$_getValueDate(value, record_type, path, key, tableFormat);
    else if ($32ba22f6ec84c003$var$_isObject(value)) return $32ba22f6ec84c003$var$_getValueObject(value, record_type, path, key, tableFormat);
    else if ($32ba22f6ec84c003$var$_isArray(value)) return $32ba22f6ec84c003$var$_getValueArray(value, record_type, path, key, tableFormat);
    else return $32ba22f6ec84c003$var$_getValueOther(value, record_type, path, key, tableFormat);
}
function $32ba22f6ec84c003$var$_getValueObject(value, record_type, path, key, tableFormat) {
    let content = "";
    let value_record_type = value?.["@type"] || null;
    let value_record_id = value?.["@id"] || null;
    if (value_record_type && value_record_id) content += `<a href="${path}/${value_record_type}/${value_record_id}">${$32ba22f6ec84c003$var$_getHeading1(value)}</a>`;
    else content += JSON.stringify(value);
    return content;
}
function $32ba22f6ec84c003$var$_getValueArray(value, record_type, path, key, tableFormat) {
    if (value.length == 1) return $32ba22f6ec84c003$var$_getValue(value);
    let content = "";
    content += "<ul>";
    for (let v of value)content += `<li>${$32ba22f6ec84c003$var$_getValue(v)}</li>`;
    content += "</ul>";
    return `<details> <summary>[${value.length}]</summary>${content}</details>`;
}
function $32ba22f6ec84c003$var$_getValueDate(value, record_type, path, key, tableFormat) {
    let options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    return value.toLocaleString();
}
function $32ba22f6ec84c003$var$_getValueOther(value, record_type, path, key, tableFormat) {
    let length = null;
    if (tableFormat == true) length = 30;
    if (!value || value == null) return null;
    if (key && key != null) {
        if (key.toLowerCase().endsWith("url")) {
            value = `<a href="${value}">${$32ba22f6ec84c003$var$trimLength(value, length)}</a>`;
            return value;
        }
    }
    if (key && key != null) {
        if (key == "@id") {
            value = `<a href="${path}/${record_type}/${value}">${$32ba22f6ec84c003$var$trimLength(value, length)}</a>`;
            return value;
        }
    }
    if (key && key != null) {
        if (key == "@type") {
            value = `<a href="${path}/${value}">${$32ba22f6ec84c003$var$trimLength(value, length)}</a>`;
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
function $32ba22f6ec84c003$var$_getHeading1(value) {
    let heading1 = null;
    let record_type = value?.["@type"] || null;
    let record_id = value?.["@id"] || null;
    let name = value?.["name"] || null;
    let givenName = value?.["givenName"] || null;
    let familyName = value?.["familyName"] || null;
    let url = value?.["url"] || null;
    let email = value?.["email"] || null;
    let contentUrl = value?.["contentUrl"] || null;
    heading1 = record_type + "/" + record_id;
    if (url && url != null) heading1 = url;
    if (email && email != null) heading1 = email;
    if (name && name != null) heading1 = name;
    if (givenName && givenName != null) heading1 = `${givenName} ${familyName}`;
    if (record_type == "PostalAddress") heading1 = `${value.streetAddress}, ${value.addressLocality}, ${value.addressRegion}, ${value.addressCountry}, ${value.postalCode}`;
    if (record_type == "ImageObject" && contentUrl) heading1 = `<img src="${contentUrl}" class="img-fluid" alt="...">`;
    if (record_type == "VideoObject" && contentUrl) heading1 = `<video src="${contentUrl}" class="img-fluid" alt="...">`;
    return heading1;
}
function $32ba22f6ec84c003$var$_getValueImage(value) {
    let contentUrl = value?.["contentUrl"] || null;
    let content = `<img src="${contentUrl}" class="img-fluid" alt="...">`;
}
function $32ba22f6ec84c003$var$_getValueVideo(value) {
    let contentUrl = value?.["contentUrl"] || null;
    let content = `<video src="${contentUrl}" class="img-fluid" alt="...">`;
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


class $89b885d9c9545d83$export$2ac64f08771c2db6 {
    constructor(record, request){
        if (Array.isArray(record)) this.things = record;
        else this.thing = record;
        // Object related
        this.record_type = null;
        this.record_id = null;
        // Array related
        this.query = null;
        this.limit = 20;
        this.offset = 0;
        this.orderBy = "createdDate";
        this.orderDirection = -1;
        this.potentialActions = null;
        // Links
        this.baseUrl = null;
        this.fullUrl = null;
        this.path = null;
        if (request) this.loadFromRequest(request);
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
    get thing() {
        return this._thing;
    }
    set thing(value) {
        if (value?.record_type) {
            this._thing = value;
            this._record = value.record;
        } else this._record = value;
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
    set request(req) {
        this.loadFromRequest(req);
    }
    loadFromRequest(req) {
        this.record_type = req.query["@type"] || req.query["record_type"] || req.params["@type"] || req.params["record_type"];
        this.record_id = req.query["@id"] || req.query["record_id"] || req.params["@id"] || req.params["record_id"];
        this.query = req.query["query"] || req.query["q"];
        this.offset = req.query["offset"] || req.query["o"];
        this.limit = req.query["limit"] || req.query["l"];
        this.orderBy = req.query["orderBy"] || req.query["order"];
        this.orderDirection = req.query["orderDirection"] || req.query["direction"];
        let PORT = "";
        this.protocol = req.protocol;
        this.host = req.hostname;
        this.urlPath = req.originalUrl;
        this.port = PORT;
        this.baseUrl = `${this.protocol}://${this.host}`;
        this.fullUrl = `${this.protocol}://${ByteLengthQueuingStrategy.host}/${this.urlPath}`;
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
}
function $89b885d9c9545d83$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


class $c9d793a6343af207$export$6bfbce2f9cd9b0e4 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $c9d793a6343af207$var$_getHtml(this.record, this.urlPath);
    }
}
function $c9d793a6343af207$export$9994024ef36d93e2(record, path) {
    let content = `<dl class="row">${$c9d793a6343af207$var$_getHtml(record, record["@type"], path)} </dl>`;
    return content;
}
function $c9d793a6343af207$var$_getHtml(value, record_type, path) {
    let content = "";
    if ($c9d793a6343af207$var$_isObject(value) == true) {
        content += `<dl class="row">`;
        for (let k of Object.keys(value)){
            let v = value[k];
            content += ` <dt class="col-sm-2">${k}</dt>`;
            content += ` <dd class="col-sm-10">${$c9d793a6343af207$var$_getHtmlValue(v, record_type, path, k)}</dd>`;
        }
        content += `</dl>`;
    } else if ($c9d793a6343af207$var$_isArray(value) == true) {
        let n = 0;
        content += `<dl class="row">`;
        for (let v of value){
            content += ` <dt class="col-sm-1">[${n}]</dt>`;
            content += ` <dd class="col-sm-11">${$c9d793a6343af207$var$_getHtmlValue(v, record_type, path)}</dd>`;
            n += 1;
        }
        content += `</dl>`;
    } else content = content + String((0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value, record_type, path));
    return content;
}
function $c9d793a6343af207$var$_getHtmlValue(value) {
    let content = "";
    if ($c9d793a6343af207$var$_isObject(value) == true) {
        let s = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value);
        content += ` <details>
                    <summary>${s}</summary>
                    ${$c9d793a6343af207$var$_getHtml(value)}
                </details>`;
    } else if ($c9d793a6343af207$var$_isArray(value) == true) {
        let s = value.length;
        content += ` <details>
                      <summary>[${s}]</summary>
                      ${$c9d793a6343af207$var$_getHtml(value)}
                  </details>`;
    } else content = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value);
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

        <script type="module" src="script.js"></script>


    </body>

    </html>
    
    
    `;
}




class $0ea0e18bb6665923$export$e4ef31a20800ff68 extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        return $0ea0e18bb6665923$var$_getTable(this.records, this.keys, this.headers, this.urlPath, this.potentialActions);
    }
}
function $0ea0e18bb6665923$export$52d811370d113530(records, keys, headers, path, potentialActions) {
    return $0ea0e18bb6665923$var$_getTable(records, keys, headers, path, potentialActions);
}
function $0ea0e18bb6665923$var$_getTable(records, keys, headers, path, potentialActions) {
    records = $0ea0e18bb6665923$var$ensureArray(records);
    // 
    if (records.length == 0 && (!keys || keys == null)) keys = [
        "@type",
        "@id"
    ];
    if (!keys || keys == null) keys = Object.keys(records[0]);
    if (!headers || headers == null) headers = keys;
    let content = `<table class="table table-responsive-xl">${$0ea0e18bb6665923$var$_getTableHeader(headers, path)} ${$0ea0e18bb6665923$var$_getTableRows(keys, records, path)}</table>`;
    return content;
}
function $0ea0e18bb6665923$var$_getTableHeader(keys, path) {
    let content = ``;
    content += `<thead><tr>`;
    for (let k of keys)content += `  <th style="max-width: 30%" class="text-truncate" scope="col">${k}</th>`;
    content += `</tr></thead>`;
    return content;
}
function $0ea0e18bb6665923$var$_getTableRows(keys, records, path) {
    let content = "";
    content += `<tbody>`;
    for (let record of records){
        content += `<tr>`;
        for (let k of keys)content += `<td  class="text-truncate">${(0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(record[k], record["@type"], path, k, true)}</td>`;
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





function $0f8c405a4572c421$export$31c173b099afd3ce(value) {
    return $0f8c405a4572c421$var$_getCard(value);
}
function $0f8c405a4572c421$export$c668812a50c07d21(value) {
    return $0f8c405a4572c421$var$_getCards(value);
}
function $0f8c405a4572c421$var$_getCards(values) {
    values = $0f8c405a4572c421$var$ensureArray(values);
    let content = ``;
    content += `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`;
    for (let value of values){
        content += '<div class="col">';
        content += $0f8c405a4572c421$var$_getCard(value);
        content += "</div>";
    }
    content += "</div>";
    return content;
}
function $0f8c405a4572c421$var$_getCard(value) {
    let imageUrl = value.contentUrl || value.image?.contentUrl || "";
    let modalId = "modal_" + String(crypto.randomUUID());
    let heading1 = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value);
    let desc = value?.text || value?.description || "";
    let content = `
        <div class="card h-100" style="width: 18rem;">
      <a type="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
        <img src="${imageUrl}" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">${heading1}</h5>
        <p class="card-text">${desc}</p>
        
      </div>


        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <img src="${imageUrl}" class="card-img-top" alt="...">
                 <div>
                    <details><summary>${(0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value)}</summary>${(0, $c9d793a6343af207$export$9994024ef36d93e2)(value)}</details>
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
        return $7ff3a9d3bb644157$var$_getPagination(this.baseUrl + this.path, this.query, this.offset, this.limit, this.orderBy, this.orderDirection, this.maxNo);
    }
}
function $7ff3a9d3bb644157$export$17c6b15dacb75ccc(baseUrl, query, offset, limit, orderBy, orderDirection, maxNo) {
    return $7ff3a9d3bb644157$var$_getPagination(baseUrl, query, offset, limit, orderBy, orderDirection, maxNo);
}
function $7ff3a9d3bb644157$var$_getPagination(baseUrl, query, offset, limit, orderBy, orderDirection, maxNo) {
    offset = Number(offset) || 0;
    limit = Number(limit) || 20;
    let NoOfItems = 5;
    let content = ``;
    let startNo = offset - Math.floor(NoOfItems / 2) * limit;
    if (maxNo && maxNo != null) {
        if (startNo + (NoOfItems - 1) * limit > maxNo) startNo = (Math.floor(maxNo / limit) + 1) * limit - NoOfItems * limit;
    }
    if (startNo < 0) startNo = 0;
    let items = ``;
    items += $7ff3a9d3bb644157$var$_getLine("Previous", baseUrl, query, offset - limit, limit, orderBy, orderDirection);
    for(let x = 0; x < NoOfItems; x++){
        let recordNo = startNo + x * limit;
        let pageNumber = Math.floor((startNo + x * limit) / limit) + 1;
        if (!maxNo || maxNo == null || recordNo < maxNo) items += $7ff3a9d3bb644157$var$_getLine(pageNumber, baseUrl, query, recordNo, limit, orderBy, orderDirection);
    }
    items += $7ff3a9d3bb644157$var$_getLine("Next", baseUrl, query, offset + limit, limit, orderBy, orderDirection);
    content += `
     <nav aria-label="Navigation">
          <ul class="pagination justify-content-center">
            ${items}
          </ul>
        </nav>`;
    return content;
}
function $7ff3a9d3bb644157$var$_getLine(caption, baseUrl, query, offset, limit, orderBy, orderDirection) {
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






class $8965cbda443616d8$export$8ab84c004e37b3e {
    constructor(){
        this._record = {};
        this._headerRecord = {};
        this._footerRecord = {};
        this._content = "";
    }
    get page() {
        return this.newPage();
    }
    newPage() {
        let page = new $8965cbda443616d8$export$8ab84c004e37b3e();
        page._record = this._record;
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
            "name": this._record.name,
            "hasPart": []
        };
        if (!this._record?.hasPart) this._record.hasPart = [];
        this._record.hasPart.push(r);
        return r;
    }
    addHeader(name, url) {
        let newWebpage = {
            "@type": "WebPage",
            "name": name,
            "url": url
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
            "name": this._record.name,
            "hasPart": []
        };
        if (!this._record?.hasPart) this._record.hasPart = [];
        this._record.hasPart.push(r);
        return r;
    }
    addFooter(name, url) {
        let newWebpage = {
            "@type": "WebPage",
            "name": name,
            "url": url
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
}



class $b8d5dfc35bfd0099$export$8f2baf8a28f733af extends (0, $89b885d9c9545d83$export$2ac64f08771c2db6) {
    constructor(records, request){
        super(records, request);
    }
    get content() {
        if (this.records && this.records != null && this.records.length > 0) return $b8d5dfc35bfd0099$var$_getBreadcrumb(this.records);
        else {
            let records = [];
            let items = this.urlPath.split("/");
            let runningUrl = "";
            for (let item of items)if (item && item != null) {
                runningUrl = runningUrl + "/" + item;
                let record = {
                    "name": item,
                    "url": runningUrl
                };
                records.push(record);
            }
            return $b8d5dfc35bfd0099$var$_getBreadcrumb(records);
        }
    }
}
function $b8d5dfc35bfd0099$export$a8a68544893af06(records) {
    return $b8d5dfc35bfd0099$var$_getBreadcrumb(records);
}
function $b8d5dfc35bfd0099$var$_getBreadcrumb(records) {
    let parts = "";
    for (let record of records)parts += `<li class="breadcrumb-item"><a href="${record.url}">${record.name}</a></li>`;
    let content = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
       ${parts}
      </ol>
    </nav>`;
    return content;
}


const $cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb = {
    "accordion": (0, $805cd539bcbfab21$export$41da80d3811e604b),
    "actionMenu": (0, $81607166ccf27aff$export$b03720a6c3e1de32),
    "article": (0, $64ebcd7c9c5f16e6$export$bca84a77ec8b9a9b),
    "breadcrumb": (0, $b8d5dfc35bfd0099$export$a8a68544893af06),
    "BreadcrumbClass": (0, $b8d5dfc35bfd0099$export$8f2baf8a28f733af),
    "card": (0, $0f8c405a4572c421$export$31c173b099afd3ce),
    "cards": (0, $0f8c405a4572c421$export$c668812a50c07d21),
    "footer": (0, $eaa0dfe8dd336822$export$b565a899447a9241),
    "navbar": (0, $04bed36c37a84390$export$a5436958d2eb8066),
    "page": (0, $dd9b1b95cb167d3d$export$b7652f6cb30c4307),
    "pagination": (0, $7ff3a9d3bb644157$export$17c6b15dacb75ccc),
    "PaginationClass": (0, $7ff3a9d3bb644157$export$726ef0cd58bc84d1),
    "record": (0, $c9d793a6343af207$export$9994024ef36d93e2),
    "RecordClass": (0, $c9d793a6343af207$export$6bfbce2f9cd9b0e4),
    "section": (0, $a871279af8aa7d8b$export$e40a2164d99fef4d),
    "table": (0, $0ea0e18bb6665923$export$52d811370d113530),
    "TableClass": (0, $0ea0e18bb6665923$export$e4ef31a20800ff68),
    "value": (0, $32ba22f6ec84c003$export$3db5d5f902fa227b),
    "krakenWebsite": (0, $8965cbda443616d8$export$8ab84c004e37b3e)
};


export {$cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb as krakenHtml};
//# sourceMappingURL=main.js.map
