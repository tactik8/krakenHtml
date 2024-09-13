import { formBaseElements as b } from "../baseElements/formBaseElements.js";

/**
 *
 *Form structure
 *
 * - krThing
 *     - krProperty
 *         - krPropertyHeader
 *         - krPropertyBody
 *             - krValue
 *                 - krValueHeader
 *                 - krValueBody
 *                 - krValueAction
 *                 - krValueFooter
 *         - krPropertyAction
 *         - krPropertyFooter
 * 
 * 
 */



export function formJsonSchema(
    jsonSchema,
    value,
    propertyID,
    propertyPrefix = [],
    position=null
) {
    let content = "";

    
    if (jsonSchema?.type == "object") {
        
        for (let p in jsonSchema.properties) {
            
            let newPropertyPrefix = JSON.parse(JSON.stringify(propertyPrefix));
            newPropertyPrefix.push(p);
            let headerContent = jsonSchema.properties?.[p]?.title || propertyID;
            let bodyContent = formJsonSchema(
                jsonSchema.properties[p],
                value?.[p] || null,
                p,
                newPropertyPrefix,
            );
            content += _getPropertyTemplate(p, headerContent, bodyContent);
        }
        content = _getThingTemplate(value?.['@type'] || '', value?.['@id'] || '', propertyPrefix, content)
        
    } else if (jsonSchema?.type == "array") {

        // Skip if maxItems == 1
        if(jsonSchema?.maxItems == 1){ 
            
            let valueContent = formJsonSchema(jsonSchema.items, value, propertyID, propertyPrefix)
            return _getValueTemplate(valueContent, 0);
        
        }

        //
        let position = 0;
        value = ensureArray(value)
        
        // Comply with minItems
        if(jsonSchema.minItems || jsonSchema.minItems != null){
            while(value.length < Number(jsonSchema.minItems)){
                value.push(null)
            }
        }

        // Iterate through values
        for (let v of value) {
            let newPropertyPrefix = propertyPrefix.slice(0, propertyPrefix.length -2);
            newPropertyPrefix.push(propertyPrefix[propertyPrefix.length -1] + "[" + String(position) + "]");
            let valueContent = formJsonSchema(
                jsonSchema.items,
                v,
                propertyID,
                newPropertyPrefix,
                position
            );
            
            content += _getValueTemplate(valueContent, position);
            position += 1;
        }
        
    } else {

        if(Array.isArray(value) == true){ value = value[0]}

        let choices = jsonSchema?.choices 
        let choicesCaption = jsonSchema?.choices 

        if(jsonSchema?.enum){
            choices = jsonSchema?.enum.map(x => x.const)
            choicesCaption = jsonSchema?.enum.map(x => x.title)
        }
        
        let valueContent = b.get(
            propertyPrefix.join("."),
            propertyPrefix.join("."),
            propertyPrefix.join("."),
            value,
            jsonSchema.tags?.[0] || 'text',
            choices,
            choicesCaption,
        );

        content += _getValueTemplate(valueContent, position);
        
    }

    return content;
}




function _getThingTemplate(record_type, record_id, propertyPrefix, bodyContent){

    let content = `
    
        <div class='krThing' data-record-type="${record_type}" data-record-id="${record_id}">
            ${b.get(
                propertyPrefix.join(".") + '.@type',
                propertyPrefix.join(".") + '.@type',
                propertyPrefix.join(".") + '.@type',
                record_type,
                'hidden'
            )}
            ${b.get(
                propertyPrefix.join(".") + '.@id',
                propertyPrefix.join(".") + '.@id',
                propertyPrefix.join(".") + '.@id',
                record_id,
              'hidden'
            )}
            ${bodyContent}
        </div>
        `
    return content

}

function _getPropertyTemplate(propertyID, headerContent, bodyContent) {
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




function _getValueTemplate(valueContent, position) {

    let positionPlaceholder = ''
    if (position && position != null && position != 0){
        positionPlaceholder = '-'
    }
    
    let content = `

    <div class="d-flex krValue">
        <div class="flex-shrink krValueHeader">
            ${position || ''}
        </div>
        <div class="krValueBody">
            ${valueContent}
        </div>
        <div class="flex-shrink ms-auto krValueAction">
            ${positionPlaceholder}
        </div>
        <div class="flex-shrink ms-auto krValueFooter">
            
        </div>
    </div>

    `;

    return content;
}

function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
