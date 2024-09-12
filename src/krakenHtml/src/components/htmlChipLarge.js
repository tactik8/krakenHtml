import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'





export function htmlChipLarge(value, options){

    return _getChip(value, options)

}



function _getChip(record, options){

    if(!record || record == null){ record = {}}


    let content = `

    
<div class="d-flex align-items-end justify-content-between">
    <div class="d-flex align-items-center">
        ${base.mediaAvatar(record, options)} 
        <div class="small">
            <div class="fw-bold">${base.heading1(record, options)}</div>
            <div class="text-muted">${base.heading2(record, options)}</div>
        </div>
    </div>
</div>
                
    
    `
    return content
    
    
}

