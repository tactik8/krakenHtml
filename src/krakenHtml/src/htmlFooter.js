



export function htmlFooter(value){
    return _getFooter(value)
}



function _getFooter(value){


    let links = ``

    for(let r of value?.hasPart){

        links += `<li class="nav-item mb-2"><a class="nav-link " href="${r?.url}">${r?.name}</a></li>`

    }


    let content = ` 
    <div class=" bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
          
                <div class="col mb-3">
                    <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                    <p class="text-body-secondary">© 2024</p>
                </div>

                <div class="col d-none d-md-block mb-3">
    
                </div>
    
                <div class="col d-none d-md-block mb-3">
                 
                </div>
    
                <div class="col d-none d-md-block mb-3">
                  
                </div>
    
                <div class="col mb-3">
                  
                  <ul class="nav flex-column">
                    ${links}
                  </ul>
                  
                </div>
            
            </footer>
        </div>
    </div>
`
    return content
    
}