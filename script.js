import { krakenHtml, KrakenHtmlClass } from "./src/index.js";

function test1() {


    let records = {
            "@type": "ItemList",
            "@id": "ItemList0",
            "name": "ItemList0",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "@id": "ListItem0",
                    "name": "ListItem0",
                    "position": 0,
                    "previousItem": null,
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "ListItem1"
                    },
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing0",
                        "name": "Thing0",
                        "url": "https://www.test.com/thing0"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "ListItem1",
                    "name": "ListItem1",
                    "position": 1,
                    "previousItem":  {
                        "@type": "ListItem",
                        "@id": "ListItem0"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "ListItem2"
                    },
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing1",
                        "name": "Thing1",
                        "url": "https://www.test.com/thing1"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "ListItem2",
                    "name": "ListItem2",
                    "position": 2,
                    "previousItem":  {
                        "@type": "ListItem",
                        "@id": "ListItem1"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "ListItem3"
                    },
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing2",
                        "name": "Thing2",
                        "url": "https://www.test.com/thing2"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "ListItem3",
                    "name": "ListItem3",
                    "position": 3,
                    "previousItem":  {
                        "@type": "ListItem",
                        "@id": "ListItem2"
                    },
                    "nextItem": null,
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing3",
                        "name": "Thing3",
                        "url": "https://www.test.com/thing3"
                    }
                }
            ]
        }


    let e = document.getElementById('test1')
    e.innerHTML = krakenHtml.table(records,null, null, {})

    
}

test1();
