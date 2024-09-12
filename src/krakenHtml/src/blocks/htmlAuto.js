
import { htmlArticle } from './htmlArticle.js'
import { htmlFooter } from './htmlFooter.js'

import { htmlGeneric } from './htmlGeneric.js'
import { htmlNavbar } from './htmlNavbar.js'

import { htmlRecord } from './htmlRecord.js'
import { htmlHeroLeft, htmlHeroRight, htmlHeroCenter} from './htmlHero.js'
import { htmlFeaturesLeft, htmlFeaturesRight, htmlFeaturesCenter} from './htmlFeatures.js'
import { htmlReview } from './htmlReview.js'
import { htmlFloatingMenu } from './htmlFloatingMenu.js'


import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'
import { htmlComponents as c } from '../components/htmlComponents.js'



export function htmlAuto(value, options, sectionNo){


    let hasHeadline = value.headline && value.headline != null
    let hasText = value.text && value.text != null

    let hasHero = hasHeadline == true || hasText == true

    
    let hasPart = value.hasPart !== undefined && value.hasPart != null && value.hasPart != [] && value.hasPart.length != 0

    let hasImage = value?.image != undefined && value?.image != null && value?.image?.contentUrl !== undefined && value?.image?.contentUrl != null


    let orientation = 'left'
    if(sectionNo % 2 == 1){ orientation = 'right'}

    // Define classes
    let classes = ''
    if(sectionNo == 0){
        classes = 'bg-dark text-white'
    } else if(orientation == 'left'){
        classes = 'bg-light'
    } else if(orientation == 'right'){
        classes = ''
    }

    console.log(sectionNo, hasHero, hasPart, hasImage)
    
    
    let content = ''

    if(hasHero == true && hasPart == true){
        
        if(orientation == 'left'){
            content = htmlFeaturesLeft(value, options)
        } else {
            content = htmlFeaturesRight(value, options)
        }
        
    } else if(hasHero == true && hasPart == false && hasImage == true){

        if(orientation == 'left'){
            content = htmlHeroLeft(value, options)
        } else {
            content = htmlHeroRight(value, options)
        }

    } else if(hasHero == true && hasPart == false && hasImage == false){

        content = htmlHeroCenter(value, options)
   
    
    } else if(hasHero == false && hasPart == true){

        content = htmlFeaturesCenter(value, options)

    }


    content = `<div class="${classes}">${content}</div>`

    
    return content
    
}



function _getHero(record, options){


    let content = `

        <div class="col-12 col-sm-12 col-lg-12">
        
            <span style="max-width:700px; max-height:500px">
                ${base.media(record, options)}
            </span>
            <h2 class="fw-bold mt-4">
                ${base.heading1(record, options)}
            </h2>
            <p class="text-body-secondary">
                ${base.headingDescription(record, options)}
            </p>
        </div>
        
   
    `

    return content

    
}

function _getParts(record, options){

    let content = ''

    for (let p of ensureArray(record.hasPart)){
        
        let c =  `
        <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex   fs-4 rounded-3">
              ${base.mediaThumbnail(p, options)}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">
                ${base.heading1(p, options)}
            </h4>
            <p class="text-body-secondary">
                ${base.headingDescription(p, options)}
            </p>
        </div>
        `
        content += c
        
    }
    return content
    
}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}


