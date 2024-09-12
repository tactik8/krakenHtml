

import { formBaseElements as b } from '../baseElements/formBaseElements.js'


import { KrakenSchemas, KrSchemaItem } from 'krakenschema'


export function formAddress(record){


    let k = KrakenSchemas.get('PostalAddress')

    let k1 = new KrSchemaItem()
    
    k1.getLocalizedPropertyID
    
    let content = `
    
    <div>

       

        <div class="row">
            <div class="col">
                ${b.label('streetAddress', 'streetAddress', 'streetAddress')}
                ${b.input.text('streetAddress', 'streetAddress', null, record?.streetAddress || '')}
            </div>
        </div>

        <div class="row">
            <div class="col">
                ${b.label('addressLocality', 'addressLocality', 'addressLocality')}
                ${b.input.text('addressLocality', 'addressLocality', null, record?.addressLocality || '')}
            </div>
            <div class="col">
                ${b.label('addressRegion', 'addressRegion', 'addressRegion')}
                ${b.input.text('addressRegion', 'addressRegion', null, record?.addressRegion || '')}
            </div>
        </div>

        <div class="row">
            <div class="col">
                ${b.label('postalCode', 'postalCode', 'postalCode')}
                ${b.input.text('postalCode', 'postalCode', null, record?.postalCode || '')}
            </div>
        </div>

        <div class="row">
            <div class="col">
                ${b.label('addressCountry', 'addressCountry', 'addressCountry')}
                ${b.input.text('addressCountry', 'addressCountry', null, record?.addressCountry || '')}
            </div>
        </div>

    </div>
    

        
    
    
    `

    return content
    
}