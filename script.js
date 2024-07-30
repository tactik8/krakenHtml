import { krakenHtml, KrakenHtmlClass } from "./src/index.js";

function test1() {
    let record = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        "veryLongKeyWith some stuff": "b",
        image: {
            "@context": "https://schema.org/",
            "@type": "VideoObject",
            "@id": "video1",
            name: "video1",
            contentUrl:
                "https://videos.pexels.com/video-files/11376704/11376704-hd_1920_1080_30fps.mp4",
        },
    };


    let req = {
        hostname:
            "2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev",
        pathname: null,
        query: {
            limit: 20,
            offset: 2000,
            breadcrumb: JSON.stringify(
                 
                    {
                        "@type": "BreadcrumbList",
                        itemListElement: 
                        [ 
                            {
                                "@type": "ListItem",
                                "position": 0,
                                item: { 
                                    name: 'name', 
                                    url: '/data/testAgg/PropertyValue/id_99' 
                                }
                            }
                        ] 
                    }
                
            )
        }
    }

    
    let options = {
        pathname: null,
        params: {
            limit: 20,
            offset: 2000
        },
        record_type: undefined,
        record_id: undefined
    };

    let records = [
        record,
        record,
        record,
        record,
        record,
        record,
        record,
        record,
    ];
    let element = document.getElementById("test1");

    let c = new KrakenHtmlClass(records);
    c.urlOptions = options;

    let p = new krakenHtml.krakenWebsite(req)
    
    
   
    //element.innerHTML += c.cards()
    //element.innerHTML += c.table()

    element.innerHTML += c.pagination();

    p.addBreadcrumb('test', 'https://www.test.com')
    p.addBreadcrumb('test2', 'https://www.test2.com')

    p.addBreadcrumb('test3', 'https://www.test3.com')
    p.addBreadcrumb('test4', 'https://www.test4.com')

    element.innerHTML += p.breadcrumbContent;
}

test1();
