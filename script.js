
import { krakenHtml } from './src/index.js'
import { HtmlPaginationClass } from './src/krakenHtml/src/htmlPagination.js'
import { HtmlTableClass } from './src/krakenHtml/src/htmlTable.js'
import { HtmlUrlClass } from './src/krakenHtml/src/htmlUrl.js'

function clickFnA() {

    console.log('click fn')
}


function test1(){

    let element = document.getElementById('test1')




    
    let record = {
             "@type": "Person",
             "@id": "person_1",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222",
             "hasOccupation": {
                 "@type": "Occupation",
                 "@id": "occupation_1",
                 "name": "occupation_1"
                 },
             "worksfor": {
                 "@type": "Organization",
                 "@id": "organization_1",
                 "name": "test_org_1",
                 "url": "https://www.test.com"
                 }
         }
    
    let r = new krakenHtml.RecordClass(record)
   
    r.basePath = '/test1/test2'

    element.innerHTML = r.content



    
}
test1()



function getLorem(){
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}




function getArticle(){

    return {
        "@type": "CreativeWork",
        "@id": "article_1",
        "name": "article_1",
        "url": "https://www.test.com",
        "headline": "Article 1",
        "text": getLorem(),
        "author": {
                 "@type": "Person",
                 "@id": "person_1",
                 "givenName": "John",
                 "familyName": "Smith",
                 "email": "test@test.com",
                 "telephone": "1-514-111-2222"
             },
        "datePublished": new Date('2022-05-22'),
        "image": {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                "name": "image_1",
                "contentUrl": "https://placehold.co/600x400"
            },
        "hasPart": [
            {
                "@type": "CreativeWork",
                "@id": "article_11",
                "name": "article_11",
                "headline": "Article 11",
                "text": getLorem(),
                "hasPart": [
                    {
                        "@type": "CreativeWork",
                        "@id": "article_111",
                        "name": "article_111",
                        "headline": "Article 111",
                        "text": getLorem()
                    }
                ]
            },
            {
                "@type": "CreativeWork",
                "@id": "article_12",
                "name": "article_12",
                "headline": "Article 12",
                "text": getLorem(),
                "hasPart": [
                    {
                        "@type": "CreativeWork",
                        "@id": "article_121",
                        "name": "article_121",
                        "headline": "Article 121",
                        "text": getLorem()
                    }
                ]
            }
        ]
    } 
}