
import { krakenHtml } from './src/index.js'



function test1(){

    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "veryLongKeyWith some stuff": "b"
        }


    let element = document.getElementById('test1')


    let r = new krakenHtml.RecordClass(record)
    element.innerHTML = r.content
}


test1()