

import { htmlValue } from './htmlValue.js'



export function htmlArticle(value, includeToC=false){

    if(includeToC==false){
        return _getArticleOnly(value)
    } else {
        return _getArticleAndToC(value)
    }
}


function _getArticleOnly(value){

    let navID = value['@type'] + '_' + value['@id']
    let content = `<article> <div data-bs-spy="scroll" data-bs-target="#${navID}">${_getArticle(value)}  </div></article>`
    return content
    
}


function _getArticleAndToC(value){

    let navID = value['@type'] + '_' + value['@id']
    let content = ` <article>
                        <div class="row" > 
                            <div class="col col-12 col-lg-9" data-bs-spy="scroll" data-bs-target="#${navID}"> 
                                ${_getArticle(value)}
                            </div>
                            <div class="col col-12 col-lg-3 d-none d-lg-block"> 
                                ${_getToC(value)}
                            </div>
                        </div>
                    </article>
    `
    return content
                            
}

function _getArticle(value, level=1){

    
    
    let content = ``

    let anchorId = value.headline.replace(' ', '_')
    
    let text = value?.articleBody || value?.text
    let imageUrl = value?.image?.contentUrl || value?.contentUrl || null


    // Image
    if(imageUrl && imageUrl != null){
        content += `<div class="container mb-4"><img class="img-fluid" src="${imageUrl}"></div>`
    }

    // Date
    let date = value?.datePublished || value?.dateCreated || null
    if(date && date!=null){
        content += `<div>${date.toLocaleDateString()}</div>`
    }

    // Author
    let author = value?.author || null
    if(author && author!=null){
        content += `<div>${htmlValue(author)}</div>`
    }

    
    // headline
    content += `<div>`
    content += `<a id="${anchorId}" name="${anchorId}"></a>`
    content += `<h${level} class="mt-2">${value.headline}</h${level}>`
    
    // body
    content += `${text}`

    // sub sections
    for(let v of value?.hasPart || []){
        content += _getArticle(v, level+1)
    }
    
    
    // Complete
    content += '</div>'
    
    return content
    
}



function _getToC(value, level=1){

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