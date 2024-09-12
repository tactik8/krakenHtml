
import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'


import { htmlRecord } from './htmlRecord.js'


export function htmlHeroLeft(record, options) {

    let content = _getHeroLeft(record, options)

    return content

}

export function htmlHeroRight(record, options) {

    let content = _getHeroRight(record, options)

    return content

}

export function htmlHeroCenter(record, options) {

    let content = _getHeroCenter(record, options)

    return content

}


function _getHeroLeft(record, options){


    if(!record || record == null){ record = {}}



    let content = `
    
    
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <span style="width:700px; height:500px">
                ${base.media(record, options)}
            </span>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold  lh-1 mb-3">
                ${base.heading1(record, options)}
            </h1>
            <p class="lead">
                ${base.headingDescription(record, options)}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              
            </div>
          </div>
        </div>
      </div>
    `


    return content

}

function _getHeroRight(record, options){


    if(!record || record == null){ record = {}}



    let content = `


    <div class="container col-xxl-8 px-4 py-5">
        <div class="row  align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <span style="width:700px; height:500px">
                ${base.media(record, options)}
            </span>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold  lh-1 mb-3">
                ${base.heading1(record, options)}
            </h1>
            <p class="lead">
                ${base.headingDescription(record, options)}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">

            </div>
          </div>
        </div>
      </div>
    `


    return content

}


function _getHeroCenter(record, options){


    if(!record || record == null){ record = {}}



    let content = `


    <div class="container col-xxl-8 px-4 py-5 text-center">
        <div class="row  align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-12">
                <span style="max-width:700px; max-height:500px">
                    ${base.media(record, options)}
                </span>
            </div>
            <div class="col-lg-12 text-center">
                <h1 class="display-5 fw-bold  lh-1 mb-3">
                ${base.heading1(record, options)}
                </h1>
                <p class="lead">
                ${base.headingDescription(record, options)}
                </p>
            
            </div>
        </div>
    </div>
    `


    return content

}