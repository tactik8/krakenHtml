

import { htmlRecord, HtmlRecordClass } from './krakenHtml/src/htmlRecord.js'
import { htmlUrl, HtmlUrlClass } from './krakenHtml/src/htmlUrl.js'

import { htmlPage } from './krakenHtml/src/htmlPage.js'
import { htmlTable, HtmlTableClass } from './krakenHtml/src/htmlTable.js'
import { htmlValue } from './krakenHtml/src/htmlValue.js'
import { htmlCard, HtmlCardClass } from './krakenHtml/src/htmlCard.js'
import { htmlCards, HtmlCardsClass } from './krakenHtml/src/htmlCard.js'
import { htmlNavbar } from './krakenHtml/src/htmlNavbar.js'
import { htmlFooter } from './krakenHtml/src/htmlFooter.js'
import { htmlSection } from './krakenHtml/src/htmlSection.js'
import { htmlArticle } from './krakenHtml/src/htmlArticle.js'
import { htmlPagination, HtmlPaginationClass } from './krakenHtml/src/htmlPagination.js'
import { htmlAccordion } from './krakenHtml/src/htmlAccordion.js'
import { htmlActionMenu } from './krakenHtml/src/htmlActionMenu.js'
import { htmlMedia, HtmlMediaClass } from './krakenHtml/src/htmlMedia.js'
import { htmlMediaThumbnail, HtmlMediaThumbnailClass } from './krakenHtml/src/htmlMediaThumbnail.js'

import { KrakenWebsite } from './krakenHtml/src/krakenWebsite.js'

import { htmlBreadcrumb, HtmlBreadcrumbClass } from './krakenHtml/src/htmlBreadcrumb.js'



export class KrakenHtmlClass {

    constructor(data, urlOptions){
        this._data = data
        this._urlOptions = urlOptions
    }

    get data(){
        return this._data
    }

    set data(value){
        if(value && value != null){ 
            this._data = value 
        }
    }
    
    get urlOptions(){
        return this._urlOptions
    }

    set urlOptions(value){
        if(value && value != null){ 
            this._urlOptions = value 
        }
    }

    setData(data, urlOptions){
        this.data = data
        this.urlOptions = urlOptions
    }
    
    card(data, urlOptions){
        this.setData(data, urlOptions)
        return htmlCard(this.data, this.urlOptions)
    }

    cards(data, urlOptions){
        this.setData(data, urlOptions)
        return htmlCards(this.data, this.urlOptions)
    }

    media(data, urlOptions){
        this.setData(data, urlOptions)
        return htmlMedia(this.data, this.urlOptions)
    }

    mediaThumbnail(data, urlOptions){
        this.setData(data, urlOptions)
        return htmlMediaThumbnail(this.data, this.urlOptions)
    }
    
    record(data, urlOptions){
        this.setData(data, urlOptions)
        return htmlRecord(this.data, this.urlOptions)
    }

    pagination(data, urlOptions){
        this.setData(data, urlOptions)
        return htmlPagination(this.data, this.urlOptions)
    }

    table(data, urlOptions, keys, headers, potentialActions){

        this.setData(data, urlOptions)
        return htmlTable(this.data, keys, headers, this.urlOptions, potentialActions)
    }



}



export const krakenHtml = {
    'accordion': htmlAccordion,
    'actionMenu': htmlActionMenu,
    'article': htmlArticle,
    'breadcrumb': htmlBreadcrumb,
    'BreadcrumbClass': HtmlBreadcrumbClass,
    'card': htmlCard,
    'CardClass': HtmlCardClass,
    'cards': htmlCards,
    'CardsClass': HtmlCardsClass,
    'footer': htmlFooter,
    'media': htmlMedia,
    'MediaClass': HtmlMediaClass,
    'mediaThumbnail': htmlMediaThumbnail,
    'MediaThumbnailClass': HtmlMediaThumbnailClass,
    'navbar': htmlNavbar,
    'page': htmlPage,
    'pagination': htmlPagination,
    'PaginationClass': HtmlPaginationClass,
    'record': htmlRecord,
    'RecordClass': HtmlRecordClass,
    'section': htmlSection,
    'table': htmlTable,
    'TableClass': HtmlTableClass,
    'url': htmlUrl,
    'UrlClass': HtmlUrlClass,
    'value': htmlValue,
    'krakenWebsite': KrakenWebsite,
    'KrakenHtmlClass': KrakenHtmlClass
}



