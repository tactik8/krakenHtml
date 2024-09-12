import {KrakenSchemas as $5OpyM$KrakenSchemas, KrSchemaItem as $5OpyM$KrSchemaItem} from "krakenschema";

function $d2d28ae038a5bf3f$export$68f91d884cbbe695(record, options) {
    return $d2d28ae038a5bf3f$var$_getHeading1(record, options);
}
function $d2d28ae038a5bf3f$export$7bdb92523d4b98cf(record, options) {
    return $d2d28ae038a5bf3f$var$_getHeading2(record, options);
}
function $d2d28ae038a5bf3f$export$d99643c1e75b3502(record, options) {
    return $d2d28ae038a5bf3f$var$_getHeadingDescription(record, options);
}
function $d2d28ae038a5bf3f$var$_getHeading1(record, options) {
    if (!record || record == null) record = {};
    let heading1;
    if (record?._heading1 || record?._heading1 != null) heading1 = record?._heading1;
    if (!heading1) {
        if (record?.headline !== undefined && record?.headline != null) heading1 = record.headline;
    }
    let content = `

        <span
        data-record-type="${record["@type"]}"
        data-record-id="${record["@id"]}" 
        data-propertyID="_heading1"
        >
            ${heading1 || ""}
        </span>
    `;
    return content;
}
function $d2d28ae038a5bf3f$var$_getHeading2(record, options) {
    if (!record || record == null) record = {};
    let heading1;
    if (record?._heading2 || record?._heading2 != null) heading1 = record?._heading2;
    let content = `

        <span
        data-record-type="${record["@type"]}"
        data-record-id="${record["@id"]}" 
        data-propertyID="_heading2"
        >
            ${heading1 || ""}
        </span>
    `;
    return content;
}
function $d2d28ae038a5bf3f$var$_getHeadingDescription(record, options) {
    if (!record || record == null) record = {};
    let heading1;
    if (record?._headingDescription || record?._headingDescription != null) heading1 = record?._headingDescription;
    if (!heading1) heading1 = record?.description || record?.text || "";
    let content = `

        <span
        data-record-type="${record["@type"]}"
        data-record-id="${record["@id"]}" 
        data-propertyID="_description"
        >
            ${heading1 || ""}
        </span>
    `;
    return content;
}
function $d2d28ae038a5bf3f$var$_getHeadingDate(record, options) {
    if (!record || record == null) record = {};
    if (record?._headingDate || record?._headingDate != null) heading = record?._headingDate;
    let value;
    switch(record["@type"]){
        case "Action":
            value = record["startTime"];
            break;
        default:
            if (record?.name || record?.name != null) heading = record.name;
            else if (record?.url || record?.url != null) heading = record.url;
            else heading = record["@id"];
            break;
    }
    if (!heading) heading = "";
    let content = `

        <span
        data-record-type="${record["@type"]}"
        data-record-id="${record["@id"]}" 
        data-propertyID="_heading2"
        >
            ${heading || ""}
        </span>
    `;
    return content;
}


function $7261db052dac239b$export$398af27f284914fe(value, propertyID, options) {
    return $7261db052dac239b$var$_getText(value, propertyID, options);
}
function $7261db052dac239b$var$_getText(record, propertyID, options) {
    if (!record || record == null) record = {};
    let value = record?.[propertyID];
    if (!value || value == null) value = "";
    let content = `

            <span
            data-record-type="${record["@type"]}"
            data-record-id="${record["@id"]}" 
            data-propertyID="${propertyID}"
            >
                ${value}
                
            </span>
    
    `;
    return content;
}


function $4f5e12511a7615e4$export$bb840855215e398f(value, propertyID, options) {
    return $4f5e12511a7615e4$var$_getDate(value, propertyID, options);
}
function $4f5e12511a7615e4$export$485a0ce8cc4f909b(value, propertyID, options) {
    return $4f5e12511a7615e4$var$_getDateRelative(value, propertyID, options);
}
function $4f5e12511a7615e4$var$_getDate(record, propertyID, options) {
    let inputDate = record?.[propertyID];
    let formattedValue;
    let locale = "en-CA";
    if (inputDate instanceof Date == false) {
        console.log(inputDate);
        try {
            inputDate = new Date(inputDate);
            formattedValue = inputDate.toLocaleDateString(locale, options);
        } catch (error) {
            formattedValue = "";
        }
    } else try {
        formattedValue = inputDate.toLocaleDateString(locale, options);
    } catch  {
        formattedValue = "";
    }
    let content = `
            <span
                data-record-type="${record["@type"]}"
                data-record-id="${record["@id"]}" 
                data-propertyID="${propertyID}"
                >
                ${formattedValue}
            </span>
    `;
    return content;
}
function $4f5e12511a7615e4$var$_getDateRelative(record, propertyID, options) {
    let value = $4f5e12511a7615e4$var$getRelativeDate(record?.[propertyID]);
    if (!value || value == null) value = "";
    let content = `
            <span
                data-record-type="${record["@type"]}"
                data-record-id="${record["@id"]}" 
                data-propertyID="${propertyID}"
                >
                ${value}
            </span>
    `;
    return content;
}
function $4f5e12511a7615e4$var$getRelativeDate(inputDate) {
    if (inputDate === undefined || inputDate === null) return null;
    if (inputDate instanceof Date == false) try {
        inputDate = new Date(inputDate);
    } catch (error) {}
    const now = new Date();
    const differenceInSeconds = Math.floor((now - inputDate) / 1000);
    const intervals = [
        {
            label: "year",
            seconds: 31536000
        },
        {
            label: "month",
            seconds: 2592000
        },
        {
            label: "week",
            seconds: 604800
        },
        {
            label: "day",
            seconds: 86400
        },
        {
            label: "hour",
            seconds: 3600
        },
        {
            label: "minute",
            seconds: 60
        },
        {
            label: "second",
            seconds: 1
        }
    ];
    for (const interval of intervals){
        const count = Math.floor(differenceInSeconds / interval.seconds);
        if (count >= 1) return count === 1 ? `${count} ${interval.label} ago` : `${count} ${interval.label}s ago`;
    }
    return "just now";
}


function $491de64a547fea9f$export$3e6dfd0ad1544147(record, options) {
    return $491de64a547fea9f$var$_getMedia(record, options);
}
function $491de64a547fea9f$var$_getMedia(record, options) {
    if (!record || record == null) record = {};
    if (record?.image && record?.image != null) record = record.image;
    if (!record.contentUrl || record.contentUrl == null) return "";
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


function $c63c61bc4aba1579$export$b23447bf702cb477(record, options) {
    return $c63c61bc4aba1579$var$_getMediaAvatar(record, options);
}
function $c63c61bc4aba1579$var$_getMediaAvatar(record, options) {
    if (!record || record == null) record = {};
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
        else content = `
             <span
             class="me-1"
             data-record-type="${record["@type"]}"
             data-record-id="${record["@id"]}" 
             data-propertyID="image"
             >
                <img src="${record.contentUrl}" class="rounded-circle" alt="..." style="width:38px;">
                    
            </span>`;
    } else if (record.embedUrl) content = record.embedUrl;
    return content;
}



function $804f93c98f766378$export$f409e9957838cfdd(record, options) {
    return $804f93c98f766378$var$_getMediaThumbnail(record, options);
}
function $804f93c98f766378$var$_getMediaThumbnail(record, options) {
    if (!record || record == null) record = {};
    if (record?.image && record?.image != null) record = record.image;
    let content = "";
    content = `

      <div style="max-width:200px">
          <a type="button" data-bs-toggle="modal" >
            ${(0, $491de64a547fea9f$export$3e6dfd0ad1544147)(record, options)}
          </a>
      </div>

 `;
    return content;
}


function $82c030dbd9ee3da2$export$65e8537a85f61405(options) {
    /**
     *
     * options:
     * - hostname: the domain (test.com)
     * - path: the base path (/api)
     * - params: the params to add to the url ({para1: value1, ...})
     * - record_type: the record_type
     * - record_id: the record_id
     * 
     */ return $82c030dbd9ee3da2$var$_getHtmlUrl(options);
}
function $82c030dbd9ee3da2$var$_getHtmlUrl(options) {
    let domain = "https://" + options?.hostname;
    if (!domain || domain == null) domain = "https://www.test.com";
    let url = new URL(domain);
    // Add params
    let p = url.searchParams;
    for(let k in options?.params)p.set(k, options.params[k]);
    // Do pathname
    let parts = [];
    if (options && options.path && options.path != null) {
        let path = options.path;
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




function $76fedd621c1178a7$export$3db5d5f902fa227b(value, record_type, key, options, tableFormat = false) {
    return $76fedd621c1178a7$var$_getValue(value, record_type, key, options, tableFormat);
}
function $76fedd621c1178a7$var$_getValue(value, record_type, key, options, tableFormat) {
    if (!value || value == null) return null;
    if ($76fedd621c1178a7$var$_isDate(value)) return $76fedd621c1178a7$var$_getValueDate(value, record_type, key, options, tableFormat);
    else if ($76fedd621c1178a7$var$_isObject(value)) return $76fedd621c1178a7$var$_getValueObject(value, record_type, key, options, tableFormat);
    else if ($76fedd621c1178a7$var$_isArray(value)) return $76fedd621c1178a7$var$_getValueArray(value, record_type, key, options, tableFormat);
    else return $76fedd621c1178a7$var$_getValueOther(value, record_type, key, options, tableFormat);
}
function $76fedd621c1178a7$var$_getValueObject(value, record_type, key, options, tableFormat) {
    let content = "";
    let value_record_type = value?.["@type"] || null;
    let value_record_id = value?.["@id"] || null;
    if (value_record_type && value_record_id) {
        let url = new HtmlUrlClass();
        url.urlOptions = options;
        url.record_type = value_record_type;
        url.record_id = value_record_id;
        content += `<a href="${url.content}">${$76fedd621c1178a7$var$_getHeading1(value)}</a>`;
    } else content += JSON.stringify(value);
    return content;
}
function $76fedd621c1178a7$var$_getValueArray(value, record_type, key, options, tableFormat) {
    if (value.length == 1) return $76fedd621c1178a7$var$_getValue(value);
    let content = "";
    content += "<ul>";
    for (let v of value)content += `<li>${$76fedd621c1178a7$var$_getValue(v, record_type, key, options, tableFormat)}</li>`;
    content += "</ul>";
    return `<details> <summary>[${value.length}]</summary>${content}</details>`;
}
function $76fedd621c1178a7$var$_getValueDate(value, record_type, key, options, tableFormat) {
    let dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    return value.toLocaleString();
}
function $76fedd621c1178a7$var$_getValueOther(value, record_type, key, options, tableFormat) {
    let length = null;
    if (tableFormat == true) length = 30;
    if (!value || value == null) return "";
    if (key && key != null) {
        if (key.toLowerCase().endsWith("url")) {
            value = `<span class="kr-${key}"><a href="${value}">${$76fedd621c1178a7$var$trimLength(value, length)}</a></span>`;
            return value;
        }
    }
    if (key && key != null) {
        if (key == "@id") {
            let url = new HtmlUrlClass();
            url.urlOptions = options;
            url.record_type = record_type;
            url.record_id = value;
            value = `<span class="kr-${key}"><a href="${url.content}">${$76fedd621c1178a7$var$trimLength(value, length)}</a></span>`;
            return value;
        }
    }
    if (key && key != null) {
        if (key == "@type") {
            let url = new HtmlUrlClass();
            url.urlOptions = options;
            url.record_id = null;
            url.record_type = record_type;
            value = `<span class="kr-${key}"><a href="${url.content}">${$76fedd621c1178a7$var$trimLength(value, length)}</a></span>`;
            return value;
        }
    }
    return $76fedd621c1178a7$var$trimLength(value, length);
}
function $76fedd621c1178a7$var$trimLength(value, length = 30) {
    if (!length || length == null) return value;
    try {
        if (value.length > 30) value = value.slice(0, length) + "...";
    } catch  {}
    return value;
}
function $76fedd621c1178a7$var$_getHeading1(value, options) {
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
    if (record_type == "ImageObject" && contentUrl) heading1 = (0, $804f93c98f766378$export$f409e9957838cfdd)(value, options);
    if (record_type == "VideoObject" && contentUrl) heading1 = (0, $804f93c98f766378$export$f409e9957838cfdd)(value, options);
    return heading1;
}
function $76fedd621c1178a7$var$_isDate(value) {
    if (typeof value.getMonth === "function") return true;
    return false;
}
function $76fedd621c1178a7$var$_isObject(value) {
    if (value !== null && typeof value === "object" && Array.isArray(value) == false) return true;
    return false;
}
function $76fedd621c1178a7$var$_isArray(value) {
    if (Array.isArray(value) == true && !(value instanceof String)) return true;
    return false;
}


function $bcd8edef2a9b688c$export$e40a2164d99fef4d(content) {
    return `<section> <div class="container mt-4"> ${content} </div> </section>`;
}


function $b30e134b8113bc85$export$3b0e05b983554c1b(records, options) {
    return $b30e134b8113bc85$var$_getButtons(records, options);
}
function $b30e134b8113bc85$export$86bffae0cad049df(record, options) {
    return $b30e134b8113bc85$var$_getButton(record, options, [
        "btn-primary"
    ]);
}
function $b30e134b8113bc85$var$_getButtons(records, options) {
    if (!records || records == null) return "";
    records = $b30e134b8113bc85$var$ensureArray(records);
    if (records.length == 0) return "";
    let content = "";
    content += $b30e134b8113bc85$var$_getButton(records[0], options, [
        "btn-primary"
    ]);
    for(let i = 1; i < records.length; i++)content += $b30e134b8113bc85$var$_getButton(records[i], options, [
        "btn-secondary"
    ]);
    return content;
}
function $b30e134b8113bc85$var$_getButton(record, options, classes) {
    if (!record || record == null) record = {};
    if (!classes || classes == null) classes = [];
    classes = $b30e134b8113bc85$var$ensureArray(classes);
    let content = `
    <span
    data-record-type="${record["@type"]}"
    data-record-id="${record["@id"]}" 
    >
        <button 
        type="button" 
        href="${record?.url || "#"}" 
        class="btn ${classes.join(" ")}"
        >
        ${record?.name || ""}
        </button>

    </span>
    `;
    return content;
}
function $b30e134b8113bc85$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


function $ea62a04a840a139f$export$50f2219829fb7b38(id, title, content, options) {
    return $ea62a04a840a139f$var$_getModal(id, title, content, options);
}
function $ea62a04a840a139f$export$dd37ff5b56aacaf4(id, title, content, options) {
    let style = "position:fixed; bottom:0; left:0%; right:0%; transform:translate(-50%, -50%);";
    return $ea62a04a840a139f$var$_getModal(id, title, content, options, style);
}
function $ea62a04a840a139f$export$69b1c4fd49776898(id, content) {
    return $ea62a04a840a139f$var$_getModalButton(id, content);
}
function $ea62a04a840a139f$var$_getModalButton(id, content) {
    let result = `
    <button type="button" class="" data-bs-toggle="modal" data-bs-target="#${id}">
      ${content}
    </button>
    `;
    return result;
}
function $ea62a04a840a139f$var$_getModal(id, title, content, options, style) {
    let result = `

            <div 
            class="modal fade" 
            id="${id}" 
            tabindex="-1" 
            aria-labelledby="${id}" 
            aria-hidden="true"
            >
            
                <div class="modal-dialog" style="${style || ""}">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                ${title || ""}
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            ${content}
                        </div>
                       
                    </div>
                </div>
            </div>
    `;
    return result;
}
function $ea62a04a840a139f$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



function $fdd684bf6cc09f0b$export$c3e279768aa5b9c4(id, image, title, content, dateContent) {
    return $fdd684bf6cc09f0b$var$_getToast(id, image, title, content, dateContent);
}
function $fdd684bf6cc09f0b$var$_getToast(id, image, title, content, dateContent) {
    let result = `
    
    <div 
    class="toast" 
    role="alert" 
    aria-live="assertive" 
    aria-atomic="true"
    id="${id}"
    >
        <div class="toast-header">
            ${image || ""}
            <strong class="me-auto">
                ${title || ""}
            </strong>
            <small class="text-body-secondary">
                ${dateContent}
            </small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${content}
        </div>
    </div>
    
    
    
    `;
    return result;
}


const $7273c79db1984708$export$692781a1ff91f328 = {
    text: (0, $7261db052dac239b$export$398af27f284914fe),
    heading1: (0, $d2d28ae038a5bf3f$export$68f91d884cbbe695),
    heading2: (0, $d2d28ae038a5bf3f$export$7bdb92523d4b98cf),
    headingDescription: (0, $d2d28ae038a5bf3f$export$d99643c1e75b3502),
    date: (0, $4f5e12511a7615e4$export$bb840855215e398f),
    dateRelative: (0, $4f5e12511a7615e4$export$485a0ce8cc4f909b),
    media: (0, $491de64a547fea9f$export$3e6dfd0ad1544147),
    mediaAvatar: (0, $c63c61bc4aba1579$export$b23447bf702cb477),
    mediaThumbnail: (0, $804f93c98f766378$export$f409e9957838cfdd),
    url: (0, $82c030dbd9ee3da2$export$65e8537a85f61405),
    value: (0, $76fedd621c1178a7$export$3db5d5f902fa227b),
    section: (0, $bcd8edef2a9b688c$export$e40a2164d99fef4d),
    button: (0, $b30e134b8113bc85$export$86bffae0cad049df),
    buttons: (0, $b30e134b8113bc85$export$3b0e05b983554c1b),
    modal: (0, $ea62a04a840a139f$export$50f2219829fb7b38),
    modalButton: (0, $ea62a04a840a139f$export$69b1c4fd49776898),
    modalBottom: (0, $ea62a04a840a139f$export$dd37ff5b56aacaf4),
    toast: (0, $fdd684bf6cc09f0b$export$c3e279768aa5b9c4)
};




function $802f62d74c549e44$export$9994024ef36d93e2(record, options) {
    let content = `
        <dl class="row">
            ${$802f62d74c549e44$var$_getHtmlRecord(record, record["@type"], null, options)} 
        </dl>`;
    return content;
}
function $802f62d74c549e44$var$_getHtmlRecord(value, record_type, key, options) {
    let content = "";
    if ($802f62d74c549e44$var$_isObject(value) == true) {
        content += `<dl class="row">`;
        for (let k of Object.keys(value)){
            let v = value[k];
            content += ` <dt class="col-sm-12 col-lg-2">${k}</dt>`;
            content += ` <dd class="col-sm-12 col-lg-10">${$802f62d74c549e44$var$_getHtmlValue(v, record_type, k, options)}</dd>`;
        }
        content += `</dl>`;
    } else if ($802f62d74c549e44$var$_isArray(value) == true) {
        let n = 0;
        content += `<dl class="row">`;
        for (let v of value){
            content += ` <dt class="col-sm-1 col-lg-1">[${n}]</dt>`;
            content += ` <dd class="col-sm-11 col-lg-11">${$802f62d74c549e44$var$_getHtmlValue(v, record_type, key, options)}</dd>`;
            n += 1;
        }
        content += `</dl>`;
    } else content = content + String(htmlValue(value, record_type, key, options));
    return content;
}
function $802f62d74c549e44$var$_getHtmlValue(value, record_type, key, options) {
    let content = "";
    if ($802f62d74c549e44$var$_isObject(value) == true) {
        let s = (0, $7273c79db1984708$export$692781a1ff91f328).value(value, record_type, key, options);
        content += ` <details>
                    <summary>${s}</summary>
                    ${_getHtml(value, record_type, key, options)}
                </details>`;
    } else if ($802f62d74c549e44$var$_isArray(value) == true) {
        let s = value.length;
        content += ` <details>
                      <summary>[${s}]</summary>
                      ${_getHtml(value, record_type, key, options)}
                  </details>`;
    } else content = (0, $7273c79db1984708$export$692781a1ff91f328).value(value, record_type, key, options);
    return content;
}
function $802f62d74c549e44$var$_isObject(value) {
    if (value !== null && typeof value === "object" && Array.isArray(value) == false) return true;
    return false;
}
function $802f62d74c549e44$var$_isArray(value) {
    if (Array.isArray(value) == true) return true;
    return false;
}


function $568220b427f54d7c$export$31c173b099afd3ce(value, options) {
    return $568220b427f54d7c$var$_getCard(value, options);
}
function $568220b427f54d7c$export$c668812a50c07d21(value, options) {
    return $568220b427f54d7c$var$_getCards(value, options);
}
function $568220b427f54d7c$var$_getCards(values, options) {
    if (!values || values == null) values = {};
    // Use itemLsitElements if ListItem
    if (Array.isArray(records) == false && records?.["@type"] == "ItemList") {
        records = records.itemListElement;
        records = $568220b427f54d7c$var$ensureArray(records);
        records = records.map((x)=>x?.item);
    }
    values = $568220b427f54d7c$var$ensureArray(values);
    let content = ``;
    content += `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`;
    for (let value of values){
        content += '<div class="col">';
        content += $568220b427f54d7c$var$_getCard(value, options);
        content += "</div>";
    }
    content += "</div>";
    return content;
}
function $568220b427f54d7c$var$_getCard(record, options) {
    if (!record || record == null) record = {};
    let content = `
    <div 
    class="kr-thing kr-card"
    data-record-type="${record["@type"]}"
    data-record-id="${record["@id"]}"
    >
        <div class="card h-100" style="width: 18rem;">

            ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
            
            <div class="card-body">

                <h5 class="card-title text-truncate">
                    ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
                </h5>
                
                <p class="card-text text-truncate">
                    ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}   
                </p>
            
             </div>
             
        </div>
        
    </div>
    `;
    return content;
}
function $568220b427f54d7c$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}




function $909d83b3e216dddd$export$9df7fbeb82dd2510(value, options) {
    return $909d83b3e216dddd$var$_getCard(value, options);
}
function $909d83b3e216dddd$export$abac565ca5f53456(value, options) {
    return $909d83b3e216dddd$var$_getCards(value, options);
}
function $909d83b3e216dddd$var$_getCards(values, options) {
    if (!values || values == null) values = {};
    // Use itemLsitElements if ListItem
    if (Array.isArray(records) == false && records?.["@type"] == "ItemList") {
        records = records.itemListElement;
        records = $909d83b3e216dddd$var$ensureArray(records);
        records = records.map((x)=>x?.item);
    }
    values = $909d83b3e216dddd$var$ensureArray(values);
    let content = ``;
    content += `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`;
    for (let value of values){
        content += '<div class="col">';
        content += $909d83b3e216dddd$var$_getCard(value, options);
        content += "</div>";
    }
    content += "</div>";
    return content;
}
function $909d83b3e216dddd$var$_getCard(record, options) {
    if (!record || record == null) record = {};
    let content = `



    <div 
    class="card mb-3" style="max-width: 300px;"
    class="kr-thing kr-card"
    data-record-type="${record["@type"]}"
    data-record-id="${record["@id"]}"
    >
        <div class="row g-0">
            <div class="col-md-3">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h6 class="card-title text-truncate">
                        ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
                    </h6>
                    <p class="card-text text-truncate">
                        ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}
                    </p>
                    <p class="card-text text-truncate">
                        <small class="text-body-secondary">
                             ${(0, $7273c79db1984708$export$692781a1ff91f328).dateRelative(record, "startTime", options)}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>

    
   
    `;
    return content;
}
function $909d83b3e216dddd$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



function $c8a81e743af1516f$export$a5b29eef689c4e02(value, options) {
    return $c8a81e743af1516f$var$_getChip(value, options);
}
function $c8a81e743af1516f$var$_getChip(record, options) {
    if (!record || record == null) record = {};
    let content = `

            <span class="m-1">
                
                ${(0, $7273c79db1984708$export$692781a1ff91f328).mediaAvatar(record, options)} 
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
                
            </span>
    
    `;
    return content;
}



function $6cc7440f1b9333cc$export$3f48bf4351347be7(value, options) {
    return $6cc7440f1b9333cc$var$_getChip(value, options);
}
function $6cc7440f1b9333cc$var$_getChip(record, options) {
    if (!record || record == null) record = {};
    let content = `

    
<div class="d-flex align-items-end justify-content-between">
    <div class="d-flex align-items-center">
        ${(0, $7273c79db1984708$export$692781a1ff91f328).mediaAvatar(record, options)} 
        <div class="small">
            <div class="fw-bold">${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}</div>
            <div class="text-muted">${(0, $7273c79db1984708$export$692781a1ff91f328).heading2(record, options)}</div>
        </div>
    </div>
</div>
                
    
    `;
    return content;
}



function $d8943c50f755cd5b$export$52d811370d113530(records, keys, headers, options, potentialActions) {
    return $d8943c50f755cd5b$var$_getTable(records, keys, headers, options, potentialActions);
}
function $d8943c50f755cd5b$var$_getTable(records, keys, headers, options, potentialActions) {
    options = JSON.parse(JSON.stringify(options));
    // Use itemLsitElements if ListItem
    if (Array.isArray(records) == false && records?.["@type"] == "ItemList") {
        records = records?.itemListElement || null;
        if (records && records != null) {
            records = $d8943c50f755cd5b$var$ensureArray(records);
            records = records.map((x)=>x?.item);
        } else records = [];
    }
    if (!records || records == null) records = [];
    records = $d8943c50f755cd5b$var$ensureArray(records);
    // 
    if (records.length == 0 && (!keys || keys == null)) keys = [
        "@type",
        "@id"
    ];
    if (!keys || keys == null) keys = Object.keys(records[0]);
    if (!headers || headers == null) headers = keys;
    let content = `<table class="table table-responsive-xl">${$d8943c50f755cd5b$var$_getTableHeader(headers, options)} ${$d8943c50f755cd5b$var$_getTableRows(keys, records, options)}</table>`;
    return content;
}
function $d8943c50f755cd5b$var$_getTableHeader(keys) {
    let content = ``;
    content += `<thead><tr>`;
    for (let k of keys)content += `  <th style="max-width: 30%" class="text-truncate" scope="col">${k}</th>`;
    content += `</tr></thead>`;
    return content;
}
function $d8943c50f755cd5b$var$_getTableRows(keys, records, options) {
    let content = "";
    content += `<tbody>`;
    for (let record of records){
        content += `<tr>`;
        for (let k of keys)content += `<td  class="text-truncate">${htmlValue(record[k], record["@type"], k, options, true)}</td>`;
        content += `</tr>`;
    }
    content += `</tbody>`;
    return content;
}
function $d8943c50f755cd5b$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



function $7e4e9ef1fd9a9342$export$82aa9aebf02952b3(value, options) {
    return $7e4e9ef1fd9a9342$var$_getStarRating(value, options);
}
function $7e4e9ef1fd9a9342$var$_getStarRating(record, options) {
    if (!record || record == null) record = {};
    let v = record?.ratingValue;
    if (!v || v == null) v = 0;
    let starContent = "";
    for(let i = 0; i < 5; i++){
        if (v > i && v < i + 1) starContent += $7e4e9ef1fd9a9342$var$getStarHalf();
        else if (v > i) starContent += $7e4e9ef1fd9a9342$var$getStarFull();
        else starContent += $7e4e9ef1fd9a9342$var$getStarEmpty();
    }
    let content = `

        <span
            data-record-type="${record["@type"]}"
            data-record-id="${record["@id"]}" 
            data-propertyID="${"ratingValue"}"
            >
                ${starContent}

            </span>
            
    `;
    return content;
}
function $7e4e9ef1fd9a9342$var$getStarFull() {
    let content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`;
    return content;
}
function $7e4e9ef1fd9a9342$var$getStarHalf() {
    let content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>`;
    return content;
}
function $7e4e9ef1fd9a9342$var$getStarEmpty() {
    let content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
        </svg>`;
    return content;
}


const $142d59e8e9fc125c$export$4246f31abc58218d = {
    card: (0, $568220b427f54d7c$export$31c173b099afd3ce),
    cards: (0, $568220b427f54d7c$export$c668812a50c07d21),
    cardHorizontal: (0, $909d83b3e216dddd$export$9df7fbeb82dd2510),
    cardsHorizontal: (0, $909d83b3e216dddd$export$abac565ca5f53456),
    chip: (0, $c8a81e743af1516f$export$a5b29eef689c4e02),
    htmlChipLarge: (0, $6cc7440f1b9333cc$export$3f48bf4351347be7),
    table: (0, $d8943c50f755cd5b$export$52d811370d113530),
    starRating: (0, $7e4e9ef1fd9a9342$export$82aa9aebf02952b3)
};




function $9e41b5646c5309fc$export$bca84a77ec8b9a9b(value, options, includeToC = false) {
    if (includeToC == false) return $9e41b5646c5309fc$var$_getArticleOnly(value, options);
    else return $9e41b5646c5309fc$var$_getArticleAndToC(value, options);
}
function $9e41b5646c5309fc$var$_getArticleOnly(value, options) {
    let navID = value["@type"] + "_" + value["@id"];
    let content = `<article> <div data-bs-spy="scroll" data-bs-target="#${navID}">${$9e41b5646c5309fc$var$_getArticle(value, options)}  </div></article>`;
    return content;
}
function $9e41b5646c5309fc$var$_getArticleAndToC(value, options) {
    let navID = value["@type"] + "_" + value["@id"];
    let content = ` <article>
                        <div class="row" > 
                            <div class="col col-12 col-lg-9" data-bs-spy="scroll" data-bs-target="#${navID}"> 
                                ${$9e41b5646c5309fc$var$_getArticle(value, options)}
                            </div>
                            <div class="col col-12 col-lg-3 d-none d-lg-block"> 
                                ${$9e41b5646c5309fc$var$_getToC(value, options)}
                            </div>
                        </div>
                    </article>
    `;
    return content;
}
function $9e41b5646c5309fc$var$_getArticle(record, options, level = 1) {
    let anchorId = record.headline.replace(" ", "_");
    // get subSections
    let subSectionContent = "";
    for (let v of record?.hasPart || [])subSectionContent += $9e41b5646c5309fc$var$_getArticle(v, options, level + 1);
    // Get section
    let content = `
            <div>
                <div class="container mb-4">
                    ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
                </div>

                <div class="container mb-4">

                    <div>
                        ${(0, $7273c79db1984708$export$692781a1ff91f328).date(record, "datePublished", options)}
                    </div>
                    
                    <div>
                        ${(0, $142d59e8e9fc125c$export$4246f31abc58218d).chip(record?.author)}
                    </div>
    
                    <div>
                        <a id="${anchorId}" name="${anchorId}"></a>
    
                        <h${level} class="mt-2">
                            ${(0, $7273c79db1984708$export$692781a1ff91f328).text(record, "headline", options)}
                        </h${level}>
    
                        <p>
                            ${(0, $7273c79db1984708$export$692781a1ff91f328).text(record, "text", options)}
                        </p>
    
                    </div>

                    ${subSectionContent}
                    
                </div>
                
            </div>
        
        `;
    return content;
}
function $9e41b5646c5309fc$var$_getToC(value, options, level = 1) {
    let content = "";
    if (level == 1) {
        content += `<style>a.active { font-weight: bold;}</style>`;
        let navID = value["@type"] + "_" + value["@id"];
        content += `<div class="sticky-top" ><nav class="" id="${navID}">`;
    }
    let anchorId = value.headline.replace(" ", "_");
    content += '<ul class=" flex-column">';
    content += `<li class=""><a class="" href="#${anchorId}">${value.headline}</li>`;
    for (let v of value?.hasPart || [])content += $9e41b5646c5309fc$var$_getToC(v);
    content += "</ul>";
    if (level == 1) content += `</nav></div>`;
    return content;
}



function $3fcdc6fc1d6e12d4$export$b565a899447a9241(value) {
    return $3fcdc6fc1d6e12d4$var$_getFooter(value);
}
function $3fcdc6fc1d6e12d4$var$_getFooter(value) {
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




function $7ce7a832cc636984$export$47e127dcd8bdfc9f(record, options) {
    let content = $7ce7a832cc636984$var$_getGeneric(record, options);
    return content;
}
function $7ce7a832cc636984$var$_getGeneric(record, options) {
    if (!record || record == null) record = {};
    let content = `
        
        <div class="container">
            <div class="container mt-4 mb-4">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
            </div>

            
            

            <div class="container">
                <h1> ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)} </h1>

                ${(0, $802f62d74c549e44$export$9994024ef36d93e2)(record, options)}
                
            </div>
        </div>
    
    
    `;
    return content;
}



function $e3e2e170cb210f77$export$a5436958d2eb8066(value) {
    return $e3e2e170cb210f77$var$getNavbar(value);
}
function $e3e2e170cb210f77$var$getNavbar(value) {
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





function $e1dd4863a1e8aea5$export$9f9cee2d36a1c8f(record, options) {
    let content = $e1dd4863a1e8aea5$var$_getHeroLeft(record, options);
    return content;
}
function $e1dd4863a1e8aea5$export$f88b9612c01c8164(record, options) {
    let content = $e1dd4863a1e8aea5$var$_getHeroRight(record, options);
    return content;
}
function $e1dd4863a1e8aea5$export$3f861d0e5db59d8f(record, options) {
    let content = $e1dd4863a1e8aea5$var$_getHeroCenter(record, options);
    return content;
}
function $e1dd4863a1e8aea5$var$_getHeroLeft(record, options) {
    if (!record || record == null) record = {};
    let content = `
    
    
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <span style="width:700px; height:500px">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
            </span>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold  lh-1 mb-3">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
            </h1>
            <p class="lead">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              
            </div>
          </div>
        </div>
      </div>
    `;
    return content;
}
function $e1dd4863a1e8aea5$var$_getHeroRight(record, options) {
    if (!record || record == null) record = {};
    let content = `


    <div class="container col-xxl-8 px-4 py-5">
        <div class="row  align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <span style="width:700px; height:500px">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
            </span>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold  lh-1 mb-3">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
            </h1>
            <p class="lead">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">

            </div>
          </div>
        </div>
      </div>
    `;
    return content;
}
function $e1dd4863a1e8aea5$var$_getHeroCenter(record, options) {
    if (!record || record == null) record = {};
    let content = `


    <div class="container col-xxl-8 px-4 py-5 text-center">
        <div class="row  align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-12">
                <span style="max-width:700px; max-height:500px">
                    ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
                </span>
            </div>
            <div class="col-lg-12 text-center">
                <h1 class="display-5 fw-bold  lh-1 mb-3">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
                </h1>
                <p class="lead">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}
                </p>
            
            </div>
        </div>
    </div>
    `;
    return content;
}




function $94ef033d7ddefb1c$export$9a9aecabb7c3a4bf(record, options) {
    let content = $94ef033d7ddefb1c$var$_getFeaturesLeft(record, options);
    return content;
}
function $94ef033d7ddefb1c$export$4d53a079528bcacc(record, options) {
    let content = $94ef033d7ddefb1c$var$_getFeaturesRight(record, options);
    return content;
}
function $94ef033d7ddefb1c$export$6c13ba62a93b5c05(record, options) {
    let content = $94ef033d7ddefb1c$var$_getFeaturesCenter(record, options);
    return content;
}
function $94ef033d7ddefb1c$var$_getFeaturesLeft(record, options) {
    if (!record || record == null) record = {};
    let featuresContent = $94ef033d7ddefb1c$var$_getItems(record, options);
    let content = `

<div class="container col-xxl-8 px-4 py-5 ">

            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div class="col d-flex flex-column  align-items-start gap-2">
                    
                    ${$94ef033d7ddefb1c$var$_getMedia(record, options)}
                    ${$94ef033d7ddefb1c$var$_getHeading1(record, options)}
                    ${$94ef033d7ddefb1c$var$_getText(record, options)}
                    ${(0, $7273c79db1984708$export$692781a1ff91f328).buttons(record?.potentialAction, options)}
                   
                </div>
        
                <div class="col">
                    <div class="row row-cols-1 row-cols-sm-2 g-4">
                
                    ${$94ef033d7ddefb1c$var$_getItems(record, options) || ""}
                    </div>
                </div>
            </div>
        </div>
 
    `;
    return content;
}
function $94ef033d7ddefb1c$var$_getFeaturesRight(record, options) {
    if (!record || record == null) record = {};
    let featuresContent = $94ef033d7ddefb1c$var$_getItems(record, options);
    let content = `





<div class="container col-xxl-8 px-4 py-5">


            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 flex-lg-row-reverse">
                <div class="col d-flex flex-column align-items-start gap-2">

                    ${$94ef033d7ddefb1c$var$_getMedia(record, options)}
                    ${$94ef033d7ddefb1c$var$_getHeading1(record, options)}
                    ${$94ef033d7ddefb1c$var$_getText(record, options)}
                    ${(0, $7273c79db1984708$export$692781a1ff91f328).buttons(record?.potentialAction, options)}
                    
                </div>

                <div class="col">
                    <div class="row row-cols-1 row-cols-sm-2 g-4">

                    ${$94ef033d7ddefb1c$var$_getItems(record, options) || ""}
                    </div>
                </div>
            </div>
        </div>

    `;
    return content;
}
function $94ef033d7ddefb1c$var$_getFeaturesCenter(record, options) {
    if (!record || record == null) record = {};
    let featuresContent = $94ef033d7ddefb1c$var$_getItems(record, options);
    let content = `

    <div class="container col-xxl-8 px-4 py-5 text-center">
        <div class="row  align-items-center g-5 py-5">
            
            <div class="col-lg-12 text-center">
                
                ${$94ef033d7ddefb1c$var$_getMedia(record, options)}
                ${$94ef033d7ddefb1c$var$_getHeading1(record, options)}
                ${$94ef033d7ddefb1c$var$_getText(record, options)}
                ${(0, $7273c79db1984708$export$692781a1ff91f328).buttons(record?.potentialAction, options)}
                
            </div>

            <div class="row  align-items-center g-5 py-5">
                ${$94ef033d7ddefb1c$var$_getItems(record, options) || ""}
            </div>
                
            </div>
        </div>
    </div>
    `;
    return content;
}
function $94ef033d7ddefb1c$var$_getMedia(record, options) {
    if (record?.image && record?.image != null) record = record.image;
    if (!record.contentUrl || record.contentUrl == null) return "";
    let content = `
        <span style="max-width:700px; max-height:500px" class="align-items-center">
            ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
        </span>
    `;
    return content;
}
function $94ef033d7ddefb1c$var$_getHeading1(record, options) {
    let content = "";
    let heading = (0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options);
    if (heading && heading != null) content = `
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            ${heading}
            </h1>
        `;
    return content;
}
function $94ef033d7ddefb1c$var$_getText(record, options) {
    let content = "";
    let heading = (0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options);
    if (heading && heading != null) content = `
        <p class="lead">
                ${heading}
                </p>
                <span>
        `;
    return content;
}
function $94ef033d7ddefb1c$var$_getItems(record, options) {
    let featuresContent = "";
    for (let p of record?.hasPart || []){
        let c = `

        <div class="col d-flex flex-column gap-2">

            <div class="feature-icon-small d-inline-flex fs-4 rounded-3">
              ${(0, $7273c79db1984708$export$692781a1ff91f328).mediaThumbnail(p, options)}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(p, options)}
            </h4>
            <p class="text-body-secondary">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(p, options)}
            </p>
            <span>
                ${(0, $7273c79db1984708$export$692781a1ff91f328).buttons(record?.potentialAction, options)}
            </span>
        </div>

        `;
        featuresContent += c;
    }
    return featuresContent;
}





function $859841b6bb363ee1$export$baa92fc63f06da5c(record, options) {
    let content = $859841b6bb363ee1$var$_getReview(record, options);
    return content;
}
function $859841b6bb363ee1$export$8a977530e9b96661(records, options) {
    let content = ``;
    content += `
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`;
    for (let r of records){
        content += '<div class="col">';
        content += $859841b6bb363ee1$var$_getReview(r, options);
        content += "</div>";
    }
    content += "</div>";
    return content;
}
function $859841b6bb363ee1$var$_getReview(record, options) {
    if (!record || record == null) record = {};
    let content = `

    <span
    data-record-type="${record["@type"]}"
    data-record-id="${record["@id"]}" 
    >

    <div class="card" style="width: 18rem;">
        <div class="container">
      ${(0, $142d59e8e9fc125c$export$4246f31abc58218d).starRating(record?.reviewRating)}
      </div>
      
      <div class="card-body">
        <h5 class="card-title">${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}</h5>
        <p class="card-text">"${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}"</p>
        <p class="card-text text-end">
            <small>
            ${(0, $7273c79db1984708$export$692781a1ff91f328).dateRelative(record, "datePublished", options)}
            </small>
        </p>
      </div>
    </div>
    </span>
    `;
    return content;
}




function $0abdfaa668ba9309$export$2b19398348144056(value, options) {
    return $0abdfaa668ba9309$var$_getFloatingMenu(value, options);
}
function $0abdfaa668ba9309$var$_getFloatingMenu(value, options) {
    let links = ``;
    for (let r of value?.hasPart)links += `<a class="nav-link " href="${r?.url}">${r?.name}</a>`;
    let content = `

    <div class="fixed-bottom">

        <p>${(0, $7273c79db1984708$export$692781a1ff91f328).heading1((0, $802f62d74c549e44$export$9994024ef36d93e2), options)}</p>

        ${(0, $7273c79db1984708$export$692781a1ff91f328).buttons((0, $802f62d74c549e44$export$9994024ef36d93e2), options)}
    
    </div>


    `;
    return content;
}













function $77ad4b434adf9b35$export$951af811c4d11280(value, options, sectionNo) {
    let hasHeadline = value.headline && value.headline != null;
    let hasText = value.text && value.text != null;
    let hasHero = hasHeadline == true || hasText == true;
    let hasPart = value.hasPart !== undefined && value.hasPart != null && value.hasPart != [] && value.hasPart.length != 0;
    let hasImage = value?.image != undefined && value?.image != null && value?.image?.contentUrl !== undefined && value?.image?.contentUrl != null;
    let orientation = "left";
    if (sectionNo % 2 == 1) orientation = "right";
    // Define classes
    let classes = "";
    if (sectionNo == 0) classes = "bg-dark text-white";
    else if (orientation == "left") classes = "bg-light";
    else if (orientation == "right") classes = "";
    console.log(sectionNo, hasHero, hasPart, hasImage);
    let content = "";
    if (hasHero == true && hasPart == true) {
        if (orientation == "left") content = (0, $94ef033d7ddefb1c$export$9a9aecabb7c3a4bf)(value, options);
        else content = (0, $94ef033d7ddefb1c$export$4d53a079528bcacc)(value, options);
    } else if (hasHero == true && hasPart == false && hasImage == true) {
        if (orientation == "left") content = (0, $e1dd4863a1e8aea5$export$9f9cee2d36a1c8f)(value, options);
        else content = (0, $e1dd4863a1e8aea5$export$f88b9612c01c8164)(value, options);
    } else if (hasHero == true && hasPart == false && hasImage == false) content = (0, $e1dd4863a1e8aea5$export$3f861d0e5db59d8f)(value, options);
    else if (hasHero == false && hasPart == true) content = (0, $94ef033d7ddefb1c$export$6c13ba62a93b5c05)(value, options);
    content = `<div class="${classes}">${content}</div>`;
    return content;
}
function $77ad4b434adf9b35$var$_getHero(record, options) {
    let content = `

        <div class="col-12 col-sm-12 col-lg-12">
        
            <span style="max-width:700px; max-height:500px">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).media(record, options)}
            </span>
            <h2 class="fw-bold mt-4">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options)}
            </h2>
            <p class="text-body-secondary">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options)}
            </p>
        </div>
        
   
    `;
    return content;
}
function $77ad4b434adf9b35$var$_getParts(record, options) {
    let content = "";
    for (let p of $77ad4b434adf9b35$var$ensureArray(record.hasPart)){
        let c = `
        <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex   fs-4 rounded-3">
              ${(0, $7273c79db1984708$export$692781a1ff91f328).mediaThumbnail(p, options)}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).heading1(p, options)}
            </h4>
            <p class="text-body-secondary">
                ${(0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(p, options)}
            </p>
        </div>
        `;
        content += c;
    }
    return content;
}
function $77ad4b434adf9b35$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


const $93fdc2b13619b337$export$e7683685b728d57e = {
    article: (0, $9e41b5646c5309fc$export$bca84a77ec8b9a9b),
    navbar: (0, $e3e2e170cb210f77$export$a5436958d2eb8066),
    footer: (0, $3fcdc6fc1d6e12d4$export$b565a899447a9241),
    generic: (0, $7ce7a832cc636984$export$47e127dcd8bdfc9f),
    record: (0, $802f62d74c549e44$export$9994024ef36d93e2),
    heroLeft: (0, $e1dd4863a1e8aea5$export$9f9cee2d36a1c8f),
    heroRight: (0, $e1dd4863a1e8aea5$export$f88b9612c01c8164),
    heroCenter: (0, $e1dd4863a1e8aea5$export$3f861d0e5db59d8f),
    featuresleft: (0, $94ef033d7ddefb1c$export$9a9aecabb7c3a4bf),
    featuresRight: (0, $94ef033d7ddefb1c$export$4d53a079528bcacc),
    featuresCenter: (0, $94ef033d7ddefb1c$export$6c13ba62a93b5c05),
    review: (0, $859841b6bb363ee1$export$baa92fc63f06da5c),
    floatingMenu: (0, $0abdfaa668ba9309$export$2b19398348144056),
    auto: (0, $77ad4b434adf9b35$export$951af811c4d11280)
};



function $0342f04181aeb444$export$928472979ddddbbd(title, content) {
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


const $3a1b44dbd394eb1c$export$231d25987ab0d3e8 = {
    base: (0, $0342f04181aeb444$export$928472979ddddbbd)
};








class $ceeb30d3ba34addf$export$3a38d1a7065458c3 {
    /**
     *
     *
     * Initializing:
     * 
     * Initializing pages:
     * let page = website.newPage(req)
     *
     */ constructor(website, url, name){
        this.website = website;
        this._record = {
            "@type": "WebPage",
            "@id": url,
            "hasPart": []
        };
        this._content = "";
        // Values for data api
        this.url = url;
        this.name = name;
        this.record_type = "WebPage";
        this.record_id = null;
        this.params = null;
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
    }
    add(content) {
        this._content += content;
    }
    addPart(record, model, classes, options) {
        let sectionRecord = {
            "@type": "section",
            "@id": String(crypto.randomUUID()),
            "model": model,
            "object": record,
            "classes": classes,
            "options": options
        };
        this._record.hasPart.push(sectionRecord);
    }
    addSection(content) {
        this._content += (0, $7273c79db1984708$export$692781a1ff91f328).section(content);
    }
    get content() {
        let content = "";
        content += this.website.htmlHeaders;
        let position = 0;
        for (let r of this._record.hasPart){
            let htmlContent = (0, $93fdc2b13619b337$export$e7683685b728d57e)[r.model](r.object, r?.options, position);
            let partContent = `<section class="${r.classes || ""}"> ${htmlContent}</section>`;
            content += partContent;
            position += 1;
        }
        content += this._content || "";
        content += this.website.htmlFooters;
        content += this._content;
        return (0, $3a1b44dbd394eb1c$export$231d25987ab0d3e8).base(this.name, content);
    }
}
function $ceeb30d3ba34addf$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


class $a1a008964b27f3a6$export$8ab84c004e37b3e {
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
     */ constructor(req){
        this._record = {};
        this._headerRecord = {};
        this._footerRecord = {};
        this._content = "";
        // Values for data api
        this.path = null;
        this.record_type = null;
        this.record_id = null;
        this.params = null;
        this.path = null;
        // Values from the request
        this.req = req;
        this._breadcrumbs = [];
        this.pages = [];
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
    newPage(url, name, req) {
        let page = new (0, $ceeb30d3ba34addf$export$3a38d1a7065458c3)(this, url, name);
        //page._record = JSON.parse(JSON.stringify(this._record));
        //page.path = this.path;
        req && req;
        this.pages.push(page);
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
        this._content += (0, $7273c79db1984708$export$692781a1ff91f328).section(content);
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
    get htmlHeaders() {
        return (0, $93fdc2b13619b337$export$e7683685b728d57e).navbar(this.wpHeader);
    }
    get htmlFooters() {
        return (0, $93fdc2b13619b337$export$e7683685b728d57e).footer(this.wpFooter);
    }
    get content() {
        let content = "";
        content += (0, $93fdc2b13619b337$export$e7683685b728d57e).navbar(this.wpHeader);
        content += this._content;
        content += (0, $93fdc2b13619b337$export$e7683685b728d57e).footer(this.wpFooter);
        return (0, $3a1b44dbd394eb1c$export$231d25987ab0d3e8).base(this.name, content);
    }
    // -----------------------------------------------------
    //  Info from request
    // -----------------------------------------------------
    get urlOptions() {
        let options = {
            hostname: this._req.hostname || null,
            path: this.path || null,
            params: this.params || {},
            record_type: this.record_type,
            record_id: this.record_id
        };
        return options;
    }
    get pathname() {
        if (!this._req || this._req == null) return null;
        let pathname = this._req.path;
        return pathname;
    }
}
function $a1a008964b27f3a6$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



class $d529bf74d954fc40$export$7a76bf180c86084f {
    constructor(){
        this.alerts = [];
        this.containerID = String(crypto.randomUUID());
        this.container = null;
        this.init();
    }
    init() {
        this.container = $d529bf74d954fc40$var$getContainer(this.containerID);
        document.body.appendChild(this.container);
    }
    add(record, options) {
        let alertID = String(crypto.randomUUID());
        let alert = $d529bf74d954fc40$var$getAlert(alertID, record, options);
        this.container.appendChild(alert);
        this.alerts.push(alert);
        var bootstrapToast = new bootstrap.Toast(alert);
        bootstrapToast.show();
    }
    new(title, content, options) {
        let record = {
            "@type": "InformAction",
            "@id": String(crypto.randomUUID()),
            "name": title,
            "description": content
        };
        this.add(record, options);
    }
}
function $d529bf74d954fc40$var$getContainer(id) {
    let content2 = `
    
    <div aria-live="polite" aria-atomic="true" >
     
        <div class="toast-container top-0 end-0 p-3" id="${id}">

    
        </div>
    </div>
    `;
    let content = `
    <div class="toast-container top-0 end-0  p-3"  id="${id}">
    </div>
    `;
    let temp = document.createElement("div");
    temp.innerHTML = content;
    let container = temp.firstElementChild;
    return container;
}
function $d529bf74d954fc40$var$getAlert(alertID, record, options) {
    let image = (0, $7273c79db1984708$export$692781a1ff91f328).mediaAvatar(record, options);
    let title = (0, $7273c79db1984708$export$692781a1ff91f328).heading1(record, options);
    let content = (0, $7273c79db1984708$export$692781a1ff91f328).headingDescription(record, options);
    let date = (0, $7273c79db1984708$export$692781a1ff91f328).dateRelative(record, options);
    let toastContent = (0, $7273c79db1984708$export$692781a1ff91f328).toast(alertID, image, title, content, date);
    let temp = document.createElement("div");
    temp.innerHTML = toastContent;
    let toast = temp.firstElementChild;
    return toast;
}
function $d529bf74d954fc40$var$triggerAlert(alertID) {
    let alert = document.getElementById(alertID);
    alert.show();
}


const $20c2e88e9de26296$export$c6b0852280a67061 = {
    Alerts: (0, $d529bf74d954fc40$export$7a76bf180c86084f)
};


function $c1976ced180a4958$export$81493cb3373de9e5(propertyID, inputID, choices, captions, value) {
    let content = `
    
        <select 
        style="max-width: 375px" 
        class="form-select" 
        aria-label="" 
        id="${inputID}" 
        data-propertyID="${propertyID}"
        >
          ${$c1976ced180a4958$var$_getOptions(choices, captions, value)}
        </select>
    `;
    return content;
}
function $c1976ced180a4958$var$_getOptions(choices, captions, value) {
    if (!captions || captions == null || captions.length == 0) captions = options;
    let content = "";
    content += $c1976ced180a4958$var$_getOption("", "", value);
    for(let i = 0; i < choices.length; i++)content += $c1976ced180a4958$var$_getOption(choices[i], captions[i], value);
    return content;
}
function $c1976ced180a4958$var$_getOption(choice, caption, value) {
    let selected = "";
    if (choice == value) selected = "selected";
    let content = `<option value="${choice}" ${selected}>${caption}</option>`;
    return content;
}


function $4742f1e99f93bc79$export$9c412312c13a5065(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "button");
}
function $4742f1e99f93bc79$export$a47c6a39dcd31657(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "checkbox");
}
function $4742f1e99f93bc79$export$53ede9da1649a49e(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "color");
}
function $4742f1e99f93bc79$export$bfc92d8962c59fa1(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "date");
}
function $4742f1e99f93bc79$export$8b8943d8dbc67ade(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "datetime-local");
}
function $4742f1e99f93bc79$export$e131b1edd9aeb1f9(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "email");
}
function $4742f1e99f93bc79$export$c37d511ddc1409da(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "file");
}
function $4742f1e99f93bc79$export$85bd79b0aee29ddb(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "hidden");
}
function $4742f1e99f93bc79$export$7d05b72b0714825a(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "image");
}
function $4742f1e99f93bc79$export$3ae00a0b090f0a15(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "month");
}
function $4742f1e99f93bc79$export$37405e4db6b73d8b(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "number");
}
function $4742f1e99f93bc79$export$9ec9129b36912aa5(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "password");
}
function $4742f1e99f93bc79$export$88c5b48ac302d91b(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "radio");
}
function $4742f1e99f93bc79$export$686334a25fc4a7eb(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "range");
}
function $4742f1e99f93bc79$export$4e2b65801ffd6b1(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "reset");
}
function $4742f1e99f93bc79$export$fae17f4cc198eb67(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "search");
}
function $4742f1e99f93bc79$export$1d5776226a19a4cc(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "submit");
}
function $4742f1e99f93bc79$export$fbd68f5c60ddc6e5(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "tel");
}
function $4742f1e99f93bc79$export$e929cf788f6fb75e(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "text");
}
function $4742f1e99f93bc79$export$b5ab71d8e690eb01(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "time");
}
function $4742f1e99f93bc79$export$1233f245b0bc3640(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "url");
}
function $4742f1e99f93bc79$export$5357c2bd30d669cd(propertyID, inputID, caption, value) {
    return $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, "week");
}
function $4742f1e99f93bc79$export$8bdc305b3195d73c(propertyID, inputID, caption, value, htmlType, autocompleteProperty) {
    if (!autocompleteProperty || autocompleteProperty == null) autocompleteProperty = $4742f1e99f93bc79$var$_getAutocomplete(propertyID);
    let content = `
    
            <input 
            autocomplete="${autocompleteProperty || ""}"
            style="max-width: 375px" 
            type="${htmlType || ""}" 
            class="form-control" 
            value="${value || ""}" 
            id="${inputID}" 
            data-propertyID="${propertyID}" 
            aria-describedby=""
            >

    `;
    return content;
}
/**
 * <input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
 */ function $4742f1e99f93bc79$var$_getAutocomplete(propertyID) {
    if (propertyID == "addressLocality") return "address-level2";
    if (propertyID == "addressRegion") return "address-level1";
    let autocompleteProperty = propertyID.replace(/[A-Z]/g, (m)=>"-" + m.toLowerCase());
    return autocompleteProperty;
}


function $2770e8fb97439525$export$bcb34b28dae666b3(propertyID, inputID, value) {
    let content = `
    <label for="${inputID}" class="text-capitalize form-label">${value}</label>
    `;
    return content;
}



function $98c5c491b51c1897$export$213d4d920cb9d9c4(url, propertyID, inputID, caption, value) {
    let content = `

            <input 
            class="form-control" 
            id="${inputID}" 
            data-propertyID="${propertyID}" 
            aria-describedby=""
            list="datalistOptions${inputID}"
            placeholder="Type to search..."
            onkeydown="
            console.log('keydown', this.value);
            let datalist=document.getElementById('datalistOptions${inputID}');
            let element = this;
            let url = '${url}';
            callApi(url, element, datalist);
            
            async function callApi(url, element, datalist){
                
                const requestOptions = {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({'propertyID': '@id', 'textContent': element.value, 'format': 'simple'})
                };

                let response;
                try{
                    let fullUrl = url +'?format=simple&propertyID=_heading1&textQuery=' + element.value;
                    console.log(fullUrl);
                    response = await fetch(fullUrl);
                } catch (error) { 
                    console.log(error);
                    console.log('r', response);
                }
                if (!response.ok) {
                      throw new Error('Network response was not ok');
                      console.log('r', response);
                };
                let data = await response.json();
                datalist.innerHTML = '';
                for(let item of data){
                    
                    var option = document.createElement('option');
                    //option.value = JSON.stringify({'@type': item['@type'], '@id': item['@id']});
                    option.value = JSON.stringify(item);
                    //option.innerHTML = item._heading1;
                    option.label =  item._heading1;
                    datalist.appendChild(option);
                    //element.appendChild(option);
                };
            };

            "
            oninput="
            try{
                let record = JSON.parse(this.value);
                console.log(record);

                let card = document.createElement('span');
                card.innerHTML = getCard(record);
                this.before(card)
                this.value = ''
                
               
                try{
                    record_cardElement.innerHTML = getCard(record);
                } catch (error) {
                    console.log(error)
                }
                
            } catch {
            
            };

            function getCard(record){

                let content = ''

                // Handle image
                let avatar = '';
               
                let sImage = document.createElement('span');
                sImage.classList.add('me-1');
                if(record?.image?.contentUrl){

                    console.log('Has image');
                    let image = document.createElement('img')
                    image.src = record?.image?.contentUrl;
                    image.classList.add('rounded-circle')
                    image.style.width = 'width:38px'
                    sImage.appendChild(image) 
                }

                content += sImage.innerHTML

                
                // Heading
                console.log('c')
                console.log('Get heading')
                let sHeading = document.createElement('span');
                sHeading.textContent = record._heading1;
                content += sHeading.innerHTML

                // Delete 
                let sDelete = document.createElement('span');
                let b = document.createElement('button');
                b.setAttribute('type', 'button');
                b.setAttribute('data-bs-dismiss', 'alert');
                b.setAttribute('aria-label', 'close');
                b.classList.add('btn-close')
                sDelete.appendChild(b)
            
                content += sDelete.innerHTML


                // Add fields
                let sFields = document.createElement('span');
                let input1 = document.createElement('input');
                input1.setAttribute('type', 'hidden') 
                input1.id = '@type'
                input1.setAttribute('value', record['@type'])
                sFields.appendChild(input1)
                
                let input2 = document.createElement('input');
                input2.type='hidden'
                input2.id = '@id'
                input2.setAttribute('value', record['@id'])
                sFields.appendChild(input2)

                console.log(sFields.innerHTML)
                content += sFields.innerHTML



                
                // Combine
                console.log('d')
                let sCard = document.createElement('div');
                sCard.classList.add('alert')
                sCard.classList.add('alert-light')
                sCard.classList.add('alert-dismissible')
                sCard.setAttribute('role', 'alert')
                sCard.innerHTML = content
              

                let temp = document.createElement('div');
                temp.appendChild(sCard);
                console.log('e')
                return temp.innerHTML
                
     
    
            };
            "
            
            >
            <datalist id="datalistOptions${inputID}">
            </datalist>
           
            

            

            

    `;
    return content;
}


const $7bc4819471928c38$export$19bac24ae08a7791 = {
    get: $7bc4819471928c38$var$_getInput,
    label: (0, $2770e8fb97439525$export$bcb34b28dae666b3),
    input: {
        button: (0, $4742f1e99f93bc79$export$9c412312c13a5065),
        checkbox: (0, $4742f1e99f93bc79$export$a47c6a39dcd31657),
        date: (0, $4742f1e99f93bc79$export$bfc92d8962c59fa1),
        datetimeLocal: (0, $4742f1e99f93bc79$export$8b8943d8dbc67ade),
        email: (0, $4742f1e99f93bc79$export$e131b1edd9aeb1f9),
        file: (0, $4742f1e99f93bc79$export$c37d511ddc1409da),
        hidden: (0, $4742f1e99f93bc79$export$85bd79b0aee29ddb),
        image: (0, $4742f1e99f93bc79$export$7d05b72b0714825a),
        month: (0, $4742f1e99f93bc79$export$3ae00a0b090f0a15),
        numer: (0, $4742f1e99f93bc79$export$37405e4db6b73d8b),
        password: (0, $4742f1e99f93bc79$export$9ec9129b36912aa5),
        radio: (0, $4742f1e99f93bc79$export$88c5b48ac302d91b),
        range: (0, $4742f1e99f93bc79$export$686334a25fc4a7eb),
        reset: (0, $4742f1e99f93bc79$export$4e2b65801ffd6b1),
        search: (0, $4742f1e99f93bc79$export$fae17f4cc198eb67),
        select: (0, $c1976ced180a4958$export$81493cb3373de9e5),
        submit: (0, $4742f1e99f93bc79$export$1d5776226a19a4cc),
        tel: (0, $4742f1e99f93bc79$export$fbd68f5c60ddc6e5),
        text: (0, $4742f1e99f93bc79$export$e929cf788f6fb75e),
        time: (0, $4742f1e99f93bc79$export$b5ab71d8e690eb01),
        url: (0, $4742f1e99f93bc79$export$1233f245b0bc3640),
        week: (0, $4742f1e99f93bc79$export$5357c2bd30d669cd),
        string: (0, $4742f1e99f93bc79$export$8bdc305b3195d73c),
        autocomplete: (0, $98c5c491b51c1897$export$213d4d920cb9d9c4)
    }
};
function $7bc4819471928c38$var$_getInput(propertyID, inputID, caption, value, htmlType, choices, choicesCaption) {
    // Get select
    if (choices && choices != null && choices.length > 0) return (0, $c1976ced180a4958$export$81493cb3373de9e5)(propertyID, inputID, choices, choicesCaption, value);
    if (htmlType && htmlType != null) return (0, $4742f1e99f93bc79$export$8bdc305b3195d73c)(propertyID, inputID, caption, value, htmlType);
}




function $d7f1f6910ea62385$export$88f33eebf767e02d(record) {
    let k = (0, $5OpyM$KrakenSchemas).get("PostalAddress");
    let k1 = new (0, $5OpyM$KrSchemaItem)();
    k1.getLocalizedPropertyID;
    let content = `
    
    <div>

       

        <div class="row">
            <div class="col">
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).label("streetAddress", "streetAddress", "streetAddress")}
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).input.text("streetAddress", "streetAddress", null, record?.streetAddress || "")}
            </div>
        </div>

        <div class="row">
            <div class="col">
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).label("addressLocality", "addressLocality", "addressLocality")}
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).input.text("addressLocality", "addressLocality", null, record?.addressLocality || "")}
            </div>
            <div class="col">
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).label("addressRegion", "addressRegion", "addressRegion")}
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).input.text("addressRegion", "addressRegion", null, record?.addressRegion || "")}
            </div>
        </div>

        <div class="row">
            <div class="col">
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).label("postalCode", "postalCode", "postalCode")}
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).input.text("postalCode", "postalCode", null, record?.postalCode || "")}
            </div>
        </div>

        <div class="row">
            <div class="col">
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).label("addressCountry", "addressCountry", "addressCountry")}
                ${(0, $7bc4819471928c38$export$19bac24ae08a7791).input.text("addressCountry", "addressCountry", null, record?.addressCountry || "")}
            </div>
        </div>

    </div>
    

        
    
    
    `;
    return content;
}



function $0bade890bc12723f$export$8bcebfb81dcf8fce(jsonSchema, value, propertyID, propertyPrefix = [], position = null) {
    let content = "";
    if (jsonSchema?.type == "object") {
        for(let p in jsonSchema.properties){
            let newPropertyPrefix = JSON.parse(JSON.stringify(propertyPrefix));
            newPropertyPrefix.push(p);
            let headerContent = jsonSchema.properties?.[p]?.title || newPropertyPrefix.join(".");
            let bodyContent = $0bade890bc12723f$export$8bcebfb81dcf8fce(jsonSchema.properties[p], value?.[p] || null, p, newPropertyPrefix);
            content += $0bade890bc12723f$var$_getPropertyTemplate(p, headerContent, bodyContent);
        }
        content = $0bade890bc12723f$var$_getThingTemplate(value?.["@type"] || "", value?.["@id"] || "", propertyPrefix, content);
    } else if (jsonSchema?.type == "array") {
        // Skip if maxItems == 1
        if (jsonSchema?.maxItems == 1) return $0bade890bc12723f$export$8bcebfb81dcf8fce(jsonSchema.items, value, propertyID, propertyPrefix);
        //
        let position = 0;
        value = $0bade890bc12723f$var$ensureArray(value);
        // Comply with minItems
        if (jsonSchema.minItems || jsonSchema.minItems != null) while(value.length < Number(jsonSchema.minItems))value.push(null);
        // Iterate through values
        for (let v of value){
            let newPropertyPrefix = propertyPrefix.slice(0, propertyPrefix.length - 2);
            newPropertyPrefix.push(propertyPrefix[propertyPrefix.length - 1] + "[" + String(position) + "]");
            let valueContent = $0bade890bc12723f$export$8bcebfb81dcf8fce(jsonSchema.items, v, propertyID, newPropertyPrefix, position);
            content += valueContent;
            position += 1;
        }
    } else {
        if (Array.isArray(value) == true) value = value[0];
        let choices = jsonSchema?.choices;
        let choicesCaption = jsonSchema?.choices;
        if (jsonSchema?.enum) {
            choices = jsonSchema?.enum.map((x)=>x.const);
            choicesCaption = jsonSchema?.enum.map((x)=>x.title);
        }
        let valueContent = (0, $7bc4819471928c38$export$19bac24ae08a7791).get(propertyPrefix.join("."), propertyPrefix.join("."), propertyPrefix.join("."), value, jsonSchema.tags?.[0] || "text", choices, choicesCaption);
        content += $0bade890bc12723f$var$_getValueTemplate(valueContent, position);
    }
    return content;
}
function $0bade890bc12723f$var$_getThingTemplate(record_type, record_id, propertyPrefix, bodyContent) {
    let content = `
    
        <div class='krThing' data-record-type="${record_type}" data-record-id="${record_id}">
            ${(0, $7bc4819471928c38$export$19bac24ae08a7791).get(propertyPrefix.join(".") + ".@type", propertyPrefix.join(".") + ".@type", propertyPrefix.join(".") + ".@type", record_type, "hidden")}
            ${(0, $7bc4819471928c38$export$19bac24ae08a7791).get(propertyPrefix.join(".") + ".@id", propertyPrefix.join(".") + ".@id", propertyPrefix.join(".") + ".@id", record_id, "hidden")}
            ${bodyContent}
        </div>
        `;
    return content;
}
function $0bade890bc12723f$var$_getPropertyTemplate(propertyID, headerContent, bodyContent) {
    let content = `
        <div class="row justify-content-between krProperty" data-propertyID="${propertyID || ""}">

            <div class="col-6 order-1 order-md-1 col-md-2 p-2 krPropertyHeader">
            
                ${headerContent || ""}
            </div>

            <div class="col-12 order-3 order-md-2 col-md-9 p-2 krPropertyBody">
                ${bodyContent || ""}
            </div>

            <div class="col-6 order-2 order-md-3 col-md-1 p-2 text-end krPropertyAction">
                +
            </div>
            <div class="krPropertyFooter">
               
            </div>

        </div>
    
    `;
    return content;
}
function $0bade890bc12723f$var$_getValueTemplate(valueContent, position) {
    let content = `

    <div class="d-flex krValue">
        <div class="flex-shrink krValueHeader">
            ${position || ""}
        </div>
        <div class="krValueBody">
            ${valueContent}
        </div>
        <div class="flex-shrink ms-auto krValueAction">
            -
        </div>
        <div class="flex-shrink ms-auto krValueFooter">
            -
        </div>
    </div>

    `;
    return content;
}
function $0bade890bc12723f$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}




function $fa38939da7982707$export$7562876dfaed30a(url, record_type, record, locale, light = true) {
    let k = (0, $5OpyM$KrakenSchemas).get(record_type);
    let jsonSchema;
    if (light == true) jsonSchema = k.get_jsonSchemaLight(locale);
    else jsonSchema = k.get_jsonSchema(locale);
    console.log(JSON.stringify(jsonSchema, null, 4));
    let content = (0, $0bade890bc12723f$export$8bcebfb81dcf8fce)(jsonSchema, record);
    // Wrap content in form
    let formContent = `
    <div class="container-lg">
    <form autocomplete="on" action="${url}">${content} </form>
    </div>
    `;
    return formContent;
}


const $95a6e4b7d3d96ecf$export$12f9d299cedee2a4 = {
    address: (0, $d7f1f6910ea62385$export$88f33eebf767e02d),
    json: (0, $0bade890bc12723f$export$8bcebfb81dcf8fce),
    generic: (0, $fa38939da7982707$export$7562876dfaed30a)
};


const $4f7b8ee3319b9cb1$export$2298f52a9b1682f8 = {
    base: (0, $7bc4819471928c38$export$19bac24ae08a7791),
    blocks: (0, $95a6e4b7d3d96ecf$export$12f9d299cedee2a4),
    json: (0, $95a6e4b7d3d96ecf$export$12f9d299cedee2a4).json,
    generic: (0, $95a6e4b7d3d96ecf$export$12f9d299cedee2a4).generic,
    form: $4f7b8ee3319b9cb1$export$896ffdf74cdc03a8
};
function $4f7b8ee3319b9cb1$export$896ffdf74cdc03a8(schema, record) {
    return $4f7b8ee3319b9cb1$var$_getForm(schema, record);
}
function $4f7b8ee3319b9cb1$var$_getForm(schema, record, title = "") {
    /**
 * Form Structure
        krForm
        - krFormHeader
        - krFormBody
          - krFormInputElement
            - krFormInputPropertySection
            - krFormInputValueSection
              - krFormInputValueElement (many)
                - krFormInputValuePositionSection
                  - krFormInputValuePositionField
                - krFormInputValueFieldSection
                - krFormInputValueActionSection
            - krFormInputActionSection
        - krFormFooter


 */ // Get property and values
    let propertyContent = $4f7b8ee3319b9cb1$var$_getFormObject(schema, record);
    // Get form
    let content = $4f7b8ee3319b9cb1$var$getFormBody(title, propertyContent);
    return content;
}
function $4f7b8ee3319b9cb1$var$_getFormObject(schema, record) {
    // Get property and values
    let propertyElements = [];
    for(let propertyID in schema.properties){
        let propertySchema = schema.properties[propertyID];
        let values = record?.[propertyID] || null;
        values = $4f7b8ee3319b9cb1$var$ensureArray(values);
        // Get value Elements
        let valueElements = [];
        let position = 1;
        for (let value of values){
            let formValueInput = $4f7b8ee3319b9cb1$var$getFormValueInput(propertyID, propertySchema, value);
            valueElements.push($4f7b8ee3319b9cb1$var$getFormValueElement(propertyID, position, formValueInput));
            position += 1;
        }
        // Get template
        let templateValueInput = $4f7b8ee3319b9cb1$var$getFormValueInput(propertyID, propertySchema, null);
        let template = $4f7b8ee3319b9cb1$var$getFormValueElement(propertyID, 0, templateValueInput);
        // Get property Element
        let propertyElement = $4f7b8ee3319b9cb1$var$getFormPropertySection(propertyID, valueElements.join(" "), template);
        propertyElements.push(propertyElement);
    }
    return propertyElements.join(" ");
}
function $4f7b8ee3319b9cb1$var$getFormValueInput(propertyID, propertySchema, htmlType, value) {
    if (propertySchema.type == "array") propertySchema = propertySchema.items;
    if (propertySchema.type == "object") return $4f7b8ee3319b9cb1$var$_getFormObject(propertySchema, value);
    htmlType = htmlType || "text";
    let inputID = propertyID;
    return (0, $7bc4819471928c38$export$19bac24ae08a7791).get(propertyID, inputID, value, htmlType, propertySchema?.choices, propertySchema?.choices);
}
function $4f7b8ee3319b9cb1$var$getFormValueElement(propertyID, position, formValueInput) {
    let content = `

      <div class="d-flex krFormInputValueElement" data-propertyID="${propertyID}">

        <div class=" p-1 krFormInputValuePositionSection">
          <span class="krFormInputValuePositionField">
            ${position}
          </span>
        </div>

        <div class=" flex-grow-1 p-1 krFormInputValueFieldSection">
          ${formValueInput}

        </div>
        
        <div class="hide p-1 krFormInputValueActionSection text-end">
          <span class="m-2" onclick="
              let krFormInputValueElement=this.closest('.krFormInputValueElement');
              krFormInputValueElement.remove(); 
            ">
            ${$4f7b8ee3319b9cb1$var$_getMinusSvg()}
          </span>
        </div>

      </div>


    `;
    return content;
}
function $4f7b8ee3319b9cb1$var$getFormPropertySection(propertyID, propertyContent, template) {
    let templateID = String(crypto.randomUUID());
    let content = `


        <div class="row krFormInputElement" data-propertyID="${propertyID}">

            <div class="col col-12 col-md-4">
                <div class="krFormInputPropertySection">
                    <label for="${propertyID}" class="form-label">
                      ${propertyID}
                    </label>
                </div>
                </div>

                <div class="col col-12 col-md-8 krFormInputValueSection">
                <div class="krFormInputValueSection">
                    ${propertyContent}
                </div>
            </div>




            <div class="hide krFormInputActionSection p-1 text-end">

              <span class="p-2 p-2">
                <span class="p-2" onclick="console.log('click');
                      let inputElement=this.closest('.krFormInputElement');
                      console.log('inputElement', inputElement.getAttribute('data-propertyID'));
                      let templateElement = document.getElementById('${templateID}');
                      console.log('template', templateElement.getAttribute('data-propertyID'));
                      let temp = document.createElement('div');
                      temp.innerHTML = templateElement.innerHTML;
                      let valueSection = inputElement.querySelector('.krFormInputValueSection');
                      let position = valueSection.children.length + 1
                      let p = temp.querySelector('.krFormInputValuePositionField');
                      p.textContent = String(position);
                      valueSection.appendChild(temp);

                      ">
                  ${$4f7b8ee3319b9cb1$var$_getPlusSvg()}
                </span>
              </span>


            </div>


            <div style="display:none" class="krFormInputTemplateSection" id="${templateID}" data-propertyID="${propertyID}">

              ${template}

            </div>




        </div>
    `;
    return content;
}
function $4f7b8ee3319b9cb1$var$getFormBody(title, propertyElements) {
    let content = `

    <div class="krForm border">


      <form>
        <div class="krFormHeader">

          <span class="formTitle">
            ${title}
          </span>

        </div>

        <div class="krFormBody">

          <!-- Input element start -->
          <div class="row krFormInputContainer">

           ${propertyElements}
          </div>



        </div>

        <div class="krFormFooter">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>

      </form>

    </div>


    `;
    return content;
}
function $4f7b8ee3319b9cb1$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}
function $4f7b8ee3319b9cb1$var$_getPlusSvg() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>`;
}
function $4f7b8ee3319b9cb1$var$_getMinusSvg() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`;
}


const $cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb = {
    base: (0, $7273c79db1984708$export$692781a1ff91f328),
    components: (0, $142d59e8e9fc125c$export$4246f31abc58218d),
    blocks: (0, $93fdc2b13619b337$export$e7683685b728d57e),
    pages: (0, $3a1b44dbd394eb1c$export$231d25987ab0d3e8),
    Website: (0, $a1a008964b27f3a6$export$8ab84c004e37b3e),
    tools: (0, $20c2e88e9de26296$export$c6b0852280a67061),
    form: (0, $4f7b8ee3319b9cb1$export$2298f52a9b1682f8)
};


export {$cf838c15c8b009ba$export$a4b3bd7dfd4f2cdb as krakenHtml};
//# sourceMappingURL=main.js.map
