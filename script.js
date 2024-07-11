
import { krakenHtml } from './src/index.js'


function test1(){

    

    

    let website  = new krakenHtml.krakenWebsite()

    
    website.addHeader('Link1', 'https://www.test.com/l1')
    website.addHeader('Link2', 'https://www.test.com/l2')
    website.addHeader('Link3', 'https://www.test.com/l3')

    website.addFooter('Link1', 'https://www.test.com/l1')
    website.addFooter('Link2', 'https://www.test.com/l2')
    website.addFooter('Link3', 'https://www.test.com/l3')

    website.legalName = 'Abc Inc.'
    website.name = 'Bob'
    //website.wpHeader = getHeader()
    
    console.log(website.record)
    
    let article = getArticle()


    let page = website.page
    
    //page.addSection(krakenHtml.article(article, true))

    //page.addSection(krakenHtml.pagination('https://www.test.com/', '',  55, 10, null, null, 201))
    page.addSection(krakenHtml.accordion('Heading 1', 'Content'))



    let actions = [
        {
            "@type": "action",
            "name": "action1",
            "url": "https://www.test.com"
        },
        {
            "@type": "action",
            "name": "action2",
            "url": "https://www.test.com"
        },
        {
            "@type": "action",
            "name": "action3",
            "url": "https://www.test.com"
        }
    ]
    page.addSection(krakenHtml.actionMenu(actions))
    
    
    //let htmlContent = krakenHtml.record(record)
    let htmlContent = page.content
    
    //htmlContent += krakenHtml.section(krakenHtml.cards([record, record, record, record]))
  
    
    
  

    
    let e = document.getElementById('test1')

    e.innerHTML= htmlContent
    
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