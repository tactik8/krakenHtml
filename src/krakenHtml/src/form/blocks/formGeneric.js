
import { formJsonSchema } from './formJsonSchema.js'

import { KrakenSchemas, KrSchemaItem } from 'krakenschema'

export function formGeneric(url, record_type, record, locale, light=true){

    let k = KrakenSchemas.get(record_type)

    let jsonSchema
    if(light == true){
         jsonSchema = k.get_jsonSchemaLight(locale)
    } else {
         jsonSchema = k.get_jsonSchema(locale)
    }

    console.log(JSON.stringify(jsonSchema, null, 4))
    let content = formJsonSchema(jsonSchema, record)
    // Wrap content in form

    
    let formContent = `
    <div class="container-lg">
    <form autocomplete="on" action="${url}">${content} </form>
    </div>
    `
    
    return formContent
}

