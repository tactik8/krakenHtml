
export function htmlActionMenu(actions){

    return _getActionMenu(actions)

}


function _getActionMenu(actions){


    // Generate action menu items
    actions = ensureArray(actions)
    let actionMenuItems = ``

    for(let action of actions){

        let hrefValue = ''
        if(action.url && action.url != null){
            hrefValue = `href="${action.url}"`
        }
        let onClickValue = ''
        if(action.onClick && action.onClick != null){
            onClickValue = `onclick="${action.onClick}"`
        }
        
        actionMenuItems += `
            <li>
                <a data-record-type="${action?.["@type"]}" data-record-id="${action?.["@id"]}" id="${action['@id']}" class="dropdown-item" ${hrefValue} ${onClickValue}>
                    ${action.name}
                </a>
            </li>
            `
         
    }

   

    // Generate action menu icon
    let content = `
    <div class="dropdown">
        <a class="btn p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-three-dots-vertical" >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>

        </a>

        <ul class="dropdown-menu">
        ${actionMenuItems}
        </ul>
    </div>
    `

    return content
    
}



function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}