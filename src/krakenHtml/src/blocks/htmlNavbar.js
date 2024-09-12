import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'




export function htmlNavbar(value){

    return getNavbar(value)
    
}


function getNavbar(value){


    let links = ``

    for(let r of value?.hasPart){

        links += `<a class="nav-link " href="${r?.url}">${r?.name}</a>`
        
    }

    
    
    let content = `

        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">${value?.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        ${links}
              </div>
            </div>
          </div>
        </nav>

`

    return content
    
}