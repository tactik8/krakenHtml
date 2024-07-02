
function $32ba22f6ec84c003$export$3db5d5f902fa227b(value) {
    return $32ba22f6ec84c003$var$_getValue(value);
}
function $32ba22f6ec84c003$var$_getValue(value) {
    if ($32ba22f6ec84c003$var$_isObject(value)) return $32ba22f6ec84c003$var$_getValueObject(value);
    else if ($32ba22f6ec84c003$var$_isArray(value)) return $32ba22f6ec84c003$var$_getValueArray(value);
    else return $32ba22f6ec84c003$var$_getValueOther(value);
}
function $32ba22f6ec84c003$var$_getValueObject(value) {
    let content = "";
    let record_type = value?.["@type"] || null;
    let record_id = value?.["@id"] || null;
    if (record_type && record_id) content += `<a href="/${record_type}/${record_id}">${$32ba22f6ec84c003$var$_getHeading1(value)}</a>`;
    else content += JSON.stringify(value);
    return content;
}
function $32ba22f6ec84c003$var$_getValueArray(value) {
    if (value.length == 1) return $32ba22f6ec84c003$var$_getValue(value);
    let content = "";
    content += "<ul>";
    for (let v of value)content += `<li>${$32ba22f6ec84c003$var$_getValue(v)}</li>`;
    content += "</ul>";
    return `<details> <summary>[${value.length}]</summary>${content}</details>`;
}
function $32ba22f6ec84c003$var$_getValueOther(value) {
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
    if (url && url != null) heading1 = url;
    if (email && email != null) heading1 = email;
    if (name && name != null) heading1 = name;
    if (givenName && givenName != null) heading1 = `${givenName} ${familyName}`;
    if (record_type == "PostalAddress") heading1 = `${value.streetAddress}, ${value.addressLocality}, ${value.addressRegion}, ${value.addressCountry}, ${value.postalCode}`;
    if (contentUrl) heading1 = `<img src="${contentUrl}" class="img-fluid" alt="...">`;
    return heading1;
}
function $32ba22f6ec84c003$var$_getValueImage(value) {
    let contentUrl = value?.["contentUrl"] || null;
    let content = `<img src="${contentUrl}" class="img-fluid" alt="...">`;
}
function $32ba22f6ec84c003$var$_isObject(value) {
    if (value !== null && typeof value === "object" && Array.isArray(value) == false) return true;
    return false;
}
function $32ba22f6ec84c003$var$_isArray(value) {
    if (Array.isArray(value) == true) return true;
    return false;
}


function $c9d793a6343af207$export$9994024ef36d93e2(record) {
    let content = `<dl class="row">${$c9d793a6343af207$var$_getHtml(record)} </dl>`;
    return content;
}
function $c9d793a6343af207$var$_getHtml(value) {
    let content = "";
    console.log($c9d793a6343af207$var$_isObject(value), $c9d793a6343af207$var$_isArray(value));
    if ($c9d793a6343af207$var$_isObject(value) == true) {
        content += `<dl class="row">`;
        for (let k of Object.keys(value)){
            let v = value[k];
            content += ` <dt class="col-sm-2">${k}</dt>`;
            content += ` <dd class="col-sm-10">${$c9d793a6343af207$var$_getHtmlValue(v)}</dd>`;
        }
        content += `</dl>`;
    } else if ($c9d793a6343af207$var$_isArray(value) == true) {
        let n = 0;
        content += `<dl class="row">`;
        for (let v of value){
            content += ` <dt class="col-sm-1">[${n}]</dt>`;
            content += ` <dd class="col-sm-11">${$c9d793a6343af207$var$_getHtmlValue(v)}</dd>`;
            n += 1;
        }
        content += `</dl>`;
    } else content = content + String(value);
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
    } else content = value;
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



function $0ea0e18bb6665923$export$52d811370d113530(records, keys, headers) {
    return $0ea0e18bb6665923$var$_getTable(records, keys, headers);
}
function $0ea0e18bb6665923$var$_getTable(records, keys, headers) {
    records = $0ea0e18bb6665923$var$ensureArray(records);
    if (!keys || keys == null) keys = Object.keys(records[0]);
    if (!headers || headers == null) headers = keys;
    let content = `<table class="table">${$0ea0e18bb6665923$var$_getTableHeader(headers)} ${$0ea0e18bb6665923$var$_getTableRows(keys, records)}</table>`;
    return content;
}
function $0ea0e18bb6665923$var$_getTableHeader(keys) {
    let content = ``;
    content += `<thead><tr>`;
    for (let k of keys)content += `  <th scope="col">${k}</th>`;
    content += `</tr></thead>`;
    return content;
}
function $0ea0e18bb6665923$var$_getTableRows(keys, records) {
    let content = "";
    content += `<tbody>`;
    for (let record of records){
        content += `<tr>`;
        for (let k of keys)content += `<td class="text-truncate">${(0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(record[k])}</td>`;
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
function $0f8c405a4572c421$var$_getCard(value) {
    let imageUrl = value.contentUrl || value.image?.contentUrl || "";
    let modalId = "modal_" + String(crypto.randomUUID());
    let heading1 = (0, $32ba22f6ec84c003$export$3db5d5f902fa227b)(value);
    let desc = value?.text || value?.description || "";
    let content = `
        <div class="card" style="width: 18rem;">
      <a type="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
        <img src="${imageUrl}" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">${heading1}</h5>
        <p class="card-text">${desc}</p>
        
      </div>


        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
          <div class="modal-dialog">
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


const $cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb = {
    "page": (0, $dd9b1b95cb167d3d$export$b7652f6cb30c4307),
    "record": (0, $c9d793a6343af207$export$9994024ef36d93e2),
    "table": (0, $0ea0e18bb6665923$export$52d811370d113530),
    "value": (0, $32ba22f6ec84c003$export$3db5d5f902fa227b),
    "card": (0, $0f8c405a4572c421$export$31c173b099afd3ce)
};


export {$cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb as krakenHtml};
//# sourceMappingURL=main.js.map
