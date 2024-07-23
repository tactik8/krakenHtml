

import { htmlRecord } from './krakenHtml/src/htmlRecord.js'
import { htmlPage } from './krakenHtml/src/htmlPage.js'
import { htmlTable, HtmlTableClass } from './krakenHtml/src/htmlTable.js'
import { htmlValue } from './krakenHtml/src/htmlValue.js'
import { htmlCard } from './krakenHtml/src/htmlCard.js'
import { htmlCards } from './krakenHtml/src/htmlCard.js'
import { htmlNavbar } from './krakenHtml/src/htmlNavbar.js'
import { htmlFooter } from './krakenHtml/src/htmlFooter.js'
import { htmlSection } from './krakenHtml/src/htmlSection.js'
import { htmlArticle } from './krakenHtml/src/htmlArticle.js'
import { htmlPagination, HtmlPaginationClass } from './krakenHtml/src/htmlPagination.js'
import { htmlAccordion } from './krakenHtml/src/htmlAccordion.js'
import { htmlActionMenu } from './krakenHtml/src/htmlActionMenu.js'
import { KrakenWebsite } from './krakenHtml/src/krakenWebsite.js'





export const krakenHtml = {
    'accordion': htmlAccordion,
    'actionMenu': htmlActionMenu,
    'article': htmlArticle,
    'card': htmlCard,
    'cards': htmlCards,
    'footer': htmlFooter,
    'navbar': htmlNavbar,
    'page': htmlPage,
    'pagination': htmlPagination,
    'PaginationClass': HtmlPaginationClass,
    'record': htmlRecord,
    'section': htmlSection,
    'table': htmlTable,
    'TableClass': HtmlTableClass,
    'value': htmlValue,
    'krakenWebsite': KrakenWebsite
}



