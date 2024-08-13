import { krakenHtml, KrakenHtmlClass } from "./src/index.js";

function test1() {


    let records =  {
            "@type": "ItemList",
            "@id": "ItemList0",
            "name": "ItemList0",
            "itemListElement": [
                
            ]
        }


    let e = document.getElementById('test1')
    e.innerHTML = krakenHtml.table(records,null, null, {})

    
}

test1();
