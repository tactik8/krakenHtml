

import { htmlBaseElements } from './krakenHtml/src/baseElements/htmlBaseElements.js'
import { htmlComponents } from './krakenHtml/src/components/htmlComponents.js'
import { htmlBlocks } from './krakenHtml/src/blocks/htmlBlocks.js'
import { htmlPages } from './krakenHtml/src/pages/htmlPages.js'

import { KrakenWebsite } from './krakenHtml/src/website/krakenWebsite.js'

import { htmlTools} from './krakenHtml/src/tools/htmlTools.js'
import { htmlForm } from './krakenHtml/src/form/htmlForm.js'


export const krakenHtml = {
    base: htmlBaseElements,
    components: htmlComponents,
    blocks: htmlBlocks,
    pages: htmlPages,
    Website: KrakenWebsite,
    tools: htmlTools,
    form: htmlForm
   
}



