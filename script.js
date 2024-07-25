
import { krakenHtml, KrakenHtmlClass } from './src/index.js'



function test1(){

    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "veryLongKeyWith some stuff": "b",
            "image": {
                    "@context": "https://schema.org/",
                    "@type": "VideoObject",
                    "@id": "video1",
                    "name": "video1",
                    "contentUrl": "https://videos.pexels.com/video-files/11376704/11376704-hd_1920_1080_30fps.mp4"
                }
        }


    let options = {'basePath': '/test0/test1'}

    
    let records = [record, record, record, record, record, record, record, record]
    let element = document.getElementById('test1')

    let c = new KrakenHtmlClass(records)
    c.urlOptions = options
    //element.innerHTML += c.cards()
    element.innerHTML += c.table()
   
}


test1()


