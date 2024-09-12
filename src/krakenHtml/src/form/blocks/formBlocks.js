
import { formAddress } from './formAddress.js'
import { formJsonSchema } from './formJsonSchema.js'
import { formGeneric} from './formGeneric.js'

export const formBlocks = {

    address: formAddress,
    json: formJsonSchema,
    generic: formGeneric
    
}