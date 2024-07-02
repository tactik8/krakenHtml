
import { krakenHtml } from './src/index.js'


function test1(){

    let record = {
             "@type": "Person",
             "@id": "person_1",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222",
            "image": {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    "name": "image_1",
                    "contentUrl": "https://placehold.co/600x400"
                },
            "address": {      
                    "@type": "PostalAddress",  
                    "@id": "address_1",
                    "streetAddress": "7 S. Broadway",
                    "addressLocality": "Denver",      
                    "addressRegion": "CO",      
                    "postalCode": "80209",      
                    "addressCountry": "US"
                 },
             "hasOccupation": {
                 "@type": "Occupation",
                 "@id": "occupation_1",
                 "name": "occupation_1"
                 },
             "worksfor": [
                 {
                 "@type": "Organization",
                 "@id": "organization_1",
                 "name": "test_org_1",
                 "url": "https://www.test.com"
                 },
                 {
                      "@type": "Organization",
                      "@id": "organization_1",
                      "name": "test_org_1",
                      "url": "https://www.test.com"
                      },
                 {
                      "@type": "Organization",
                      "@id": "organization_1",
                      "name": "test_org_1",
                      "url": "https://www.test.com"
                      },
                 {
                      "@type": "Organization",
                      "@id": "organization_1",
                      "name": "test_org_1",
                      "url": "https://www.test.com"
                      }
                 ]
         }


    //let htmlContent = krakenHtml.record(record)
    let htmlContent = krakenHtml.cards([record, record, record, record])

    
    let e = document.getElementById('test1')

    e.innerHTML= htmlContent
    
}

test1()