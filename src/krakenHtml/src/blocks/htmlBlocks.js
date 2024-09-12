
import { htmlArticle } from './htmlArticle.js'
import { htmlFooter } from './htmlFooter.js'

import { htmlGeneric } from './htmlGeneric.js'
import { htmlNavbar } from './htmlNavbar.js'

import { htmlRecord } from './htmlRecord.js'
import { htmlHeroLeft, htmlHeroRight, htmlHeroCenter} from './htmlHero.js'
import { htmlFeaturesLeft, htmlFeaturesRight, htmlFeaturesCenter} from './htmlFeatures.js'
import { htmlReview } from './htmlReview.js'
import { htmlFloatingMenu } from './htmlFloatingMenu.js'
import { htmlAuto } from './htmlAuto.js'


export const htmlBlocks = {

    article: htmlArticle,
    navbar: htmlNavbar,
    footer: htmlFooter,
    generic: htmlGeneric,
    record: htmlRecord,
    heroLeft: htmlHeroLeft,
    heroRight: htmlHeroRight,
    heroCenter: htmlHeroCenter,
    featuresleft: htmlFeaturesLeft,
    featuresRight: htmlFeaturesRight,
    featuresCenter: htmlFeaturesCenter,
    review: htmlReview,
    floatingMenu: htmlFloatingMenu,
    auto: htmlAuto
}