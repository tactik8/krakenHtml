
import {htmlBaseElements as base} from '../baseElements/htmlBaseElements.js'

import { htmlComponents as c } from '../components/htmlComponents.js'
import { htmlRecord } from './htmlRecord.js'


export function htmlReview(record, options) {

    let content = _getReview(record, options)

    return content

}


export function htmlReviews(records, options) {


    
    let content = ``

    content += `
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">`

    for(let r of records){

        content += '<div class="col">'

            content += _getReview(r, options)

        content += '</div>'

    }


    content += '</div>'

    return content

    

}


function _getReview(record, options){


    if(!record || record == null){ record = {}}



    let content = `

    <span
    data-record-type="${record['@type']}"
    data-record-id="${record['@id']}" 
    >

    <div class="card" style="width: 18rem;">
        <div class="container">
      ${c.starRating(record?.reviewRating)}
      </div>
      
      <div class="card-body">
        <h5 class="card-title">${base.heading1(record, options)}</h5>
        <p class="card-text">"${base.headingDescription(record, options)}"</p>
        <p class="card-text text-end">
            <small>
            ${base.dateRelative(record, 'datePublished', options)}
            </small>
        </p>
      </div>
    </div>
    </span>
    `


    return content

}