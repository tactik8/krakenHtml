


import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'
import { htmlComponents as c } from '../components/htmlComponents.js'


export function htmlArticle(value, options, includeToC=false){

    if(includeToC==false){
        return _getArticleOnly(value, options)
    } else {
        return _getArticleAndToC(value, options)
    }
}


function _getArticleOnly(value, options){

    let navID = value['@type'] + '_' + value['@id']
    let content = `<article> <div data-bs-spy="scroll" data-bs-target="#${navID}">${_getArticle(value, options)}  </div></article>`
    return content
    
}


function _getArticleAndToC(value, options){

    let navID = value['@type'] + '_' + value['@id']
    let content = ` <article>
                        <div class="row" > 
                            <div class="col col-12 col-lg-9" data-bs-spy="scroll" data-bs-target="#${navID}"> 
                                ${_getArticle(value, options)}
                            </div>
                            <div class="col col-12 col-lg-3 d-none d-lg-block"> 
                                ${_getToC(value, options)}
                            </div>
                        </div>
                    </article>
    `
    return content
                            
}

function _getArticle(record, options, level=1){

    

    let anchorId = record.headline.replace(' ', '_')
    
   

    // get subSections
    let subSectionContent = ''
    for(let v of record?.hasPart || []){
        subSectionContent += _getArticle(v, options, level+1)
    }

    // Get section
    
    let content = `
            <div>
                <div class="container mb-4">
                    ${ base.media(record, options) }
                </div>

                <div class="container mb-4">

                    <div>
                        ${ base.date(record, 'datePublished', options) }
                    </div>
                    
                    <div>
                        ${ c.chip(record?.author) }
                    </div>
    
                    <div>
                        <a id="${anchorId}" name="${anchorId}"></a>
    
                        <h${level} class="mt-2">
                            ${base.text(record, 'headline', options)}
                        </h${level}>
    
                        <p>
                            ${base.text(record, 'text', options)}
                        </p>
    
                    </div>

                    ${ subSectionContent }
                    
                </div>
                
            </div>
        
        `

    return content
    
}



function _getToC(value, options, level=1){

    let content = ''
    
    if(level ==1){
        content += `<style>a.active { font-weight: bold;}</style>`
        let navID = value['@type'] + '_' + value['@id']
        content += `<div class="sticky-top" ><nav class="" id="${navID}">`
    }
    

    let anchorId = value.headline.replace(' ', '_')
    
    content += '<ul class=" flex-column">'

   
    content += `<li class=""><a class="" href="#${anchorId}">${value.headline}</li>`
   

    for(let v of value?.hasPart || []){

        content += _getToC(v)

    }

    content += '</ul>'
    
    if(level ==1){
        content += `</nav></div>`
    }
    return content

}