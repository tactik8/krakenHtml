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

    let options = {
        hostname:
            "2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev",
        basePath: "/data/testAgg",
        pathname: null,
        params: {
            limit: 20,
            offset: 2000,
            breadcrumbs: [ { name: 'name', url: '/data/testAgg/PropertyValue/id_99' } ]
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

    let p = new krakenHtml.krakenWebsite()
    
   
    //element.innerHTML += c.cards()
    //element.innerHTML += c.table()

    element.innerHTML += c.pagination();

    p.addBreadcrumbRecord('test', 'https://www.test.com')
    element.innerHTML += p.breadcrumb;
}

test1();
