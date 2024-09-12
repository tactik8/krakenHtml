
import { htmlHeading1, htmlHeading2, htmlHeadingDescription } from './htmlHeadings.js'
import { htmlText } from './htmlText.js'
import { htmlDate, htmlDateRelative } from './htmlDate.js'

import { htmlMedia } from './htmlMedia.js'
import { htmlMediaAvatar } from './htmlMediaAvatar.js'
import { htmlMediaThumbnail } from './htmlMediaThumbnail.js'
import { htmlUrl } from './htmlUrl.js'
import { htmlValue } from './htmlValue.js'
import { htmlSection } from './htmlSection.js'
import { htmlButton, htmlButtons } from './htmlButton.js'
import { htmlModal, htmlModalBottom, htmlModalButton } from './htmlModal.js'
import { htmlToast} from './htmlToast.js'

export const htmlBaseElements = {

    text: htmlText,
    heading1: htmlHeading1,
    heading2: htmlHeading2,
    headingDescription: htmlHeadingDescription,
    date: htmlDate,
    dateRelative: htmlDateRelative,
    media: htmlMedia,
    mediaAvatar: htmlMediaAvatar,
    mediaThumbnail: htmlMediaThumbnail,
    url: htmlUrl,
    value: htmlValue,
    section: htmlSection,
    button: htmlButton,
    buttons: htmlButtons,
    modal: htmlModal,
    modalButton: htmlModalButton,
    modalBottom: htmlModalBottom,
    toast: htmlToast
    
}