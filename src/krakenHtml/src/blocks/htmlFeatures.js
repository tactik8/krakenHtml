
import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'


import { htmlRecord } from './htmlRecord.js'


export function htmlFeaturesLeft(record, options) {

    let content = _getFeaturesLeft(record, options)

    return content

}

export function htmlFeaturesRight(record, options) {

    let content = _getFeaturesRight(record, options)

    return content

}

export function htmlFeaturesCenter(record, options) {

    let content = _getFeaturesCenter(record, options)

    return content

}


function _getFeaturesLeft(record, options){


    if(!record || record == null){ record = {}}

    let featuresContent = _getItems(record, options)

    let content = `

<div class="container col-xxl-8 px-4 py-5 ">

            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div class="col d-flex flex-column  align-items-start gap-2">
                    
                    ${_getMedia(record, options)}
                    ${_getHeading1(record, options)}
                    ${_getText(record, options)}
                    ${base.buttons(record?.potentialAction, options)}
                   
                </div>
        
                <div class="col">
                    <div class="row row-cols-1 row-cols-sm-2 g-4">
                
                    ${_getItems(record, options) || ''}
                    </div>
                </div>
            </div>
        </div>
 
    `


    return content

}


function _getFeaturesRight(record, options){


    if(!record || record == null){ record = {}}


    let featuresContent = _getItems(record, options)

    let content = `





<div class="container col-xxl-8 px-4 py-5">


            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 flex-lg-row-reverse">
                <div class="col d-flex flex-column align-items-start gap-2">

                    ${_getMedia(record, options)}
                    ${_getHeading1(record, options)}
                    ${_getText(record, options)}
                    ${base.buttons(record?.potentialAction, options)}
                    
                </div>

                <div class="col">
                    <div class="row row-cols-1 row-cols-sm-2 g-4">

                    ${_getItems(record, options) || ''}
                    </div>
                </div>
            </div>
        </div>

    `


    return content

}


function _getFeaturesCenter(record, options){


    if(!record || record == null){ record = {}}

    let featuresContent = _getItems(record, options)

    

    let content = `

    <div class="container col-xxl-8 px-4 py-5 text-center">
        <div class="row  align-items-center g-5 py-5">
            
            <div class="col-lg-12 text-center">
                
                ${_getMedia(record, options)}
                ${_getHeading1(record, options)}
                ${_getText(record, options)}
                ${base.buttons(record?.potentialAction, options)}
                
            </div>

            <div class="row  align-items-center g-5 py-5">
                ${_getItems(record, options) || ''}
            </div>
                
            </div>
        </div>
    </div>
    `


    return content

}


function _getMedia(record, options){


    if(record?.image && record?.image != null){
        record = record.image
    }

    if(!record.contentUrl || record.contentUrl == null){
        return ''
    }

    let content = `
        <span style="max-width:700px; max-height:500px" class="align-items-center">
            ${base.media(record, options)}
        </span>
    `
    return content
    
}

function _getHeading1(record, options){

    let content = ''
    let heading = base.heading1(record, options)

    if(heading && heading != null){

        content = `
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            ${heading}
            </h1>
        `
    }
    return content

}

function _getText(record, options){

    let content = ''
    let heading = base.headingDescription(record, options)

    if(heading && heading != null){

        content = `
        <p class="lead">
                ${heading}
                </p>
                <span>
        `
    }
    return content

}



function _getItems(record, options){

    let featuresContent = ''

    for(let p of record?.hasPart || []){

        let c = `

        <div class="col d-flex flex-column gap-2">

            <div class="feature-icon-small d-inline-flex fs-4 rounded-3">
              ${base.mediaThumbnail(p, options)}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">
                ${base.heading1(p, options)}
            </h4>
            <p class="text-body-secondary">
                ${base.headingDescription(p, options)}
            </p>
            <span>
                ${base.buttons(record?.potentialAction, options)}
            </span>
        </div>

        `
        featuresContent += c


    }

    return featuresContent
    
}