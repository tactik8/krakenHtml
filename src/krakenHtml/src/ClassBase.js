

export class ClassBase {

    constructor(record, request) {

        if(Array.isArray(record)){
            this.things = record
        } else {
            this.thing = record
        }

        // Object related
        this.record_type = null
        this.record_id = null
        
        // Array related
        this.query = null
        this.limit = 20
        this.offset = 0
        this.orderBy = 'createdDate'
        this.orderDirection = -1
        this.potentialActions = null

        // Links
        this.baseUrl = null
        this.fullUrl = null
        this.path = null

        if(request){
            this.loadFromRequest(request)
        }
    }



    get record(){
        return this._record
    }

    set record(value){
        this.thing = value
    }
    
    get records(){
        return this._records
    }
    
    set records(value){
        this.things = value
    }

    get thing(){
        return this._thing
    }

    set thing(value){
        if(value?.record_type){
            this._thing = value
            this._record = value.record
        } else {
            this._record = value
        }
    }

    get things(){
        return this._things
    }

    set things(value){
        value = ensureArray(value)
        if(value[0] && value[0]?.record_type){
            this._things = value
            this._records = value.map(x=> x.record)
        } else {
            this._records = value
        }
    }

    set request(req){
        this.loadFromRequest(req)

    }

    loadFromRequest(req){

        this.record_type = req.query['@type'] || req.query['record_type'] || req.params['@type'] || req.params['record_type']
        this.record_id = req.query['@id'] || req.query['record_id'] || req.params['@id'] || req.params['record_id']

        
        this.query =  req.query['query'] ||  req.query['q']
        this.offset =  req.query['offset'] ||  req.query['o']
        this.limit =  req.query['limit'] ||  req.query['l']
        this.orderBy =  req.query['orderBy'] || req.query['order'] 
        this.orderDirection =  req.query['orderDirection'] ||  req.query['direction']

        let PORT = "";
        this.protocol = req.protocol;
        this.host = req.hostname;
        this.urlPath = req.originalUrl;
        this.port = process.env.PORT || PORT;
        this.baseUrl = `${this.protocol}://${this.host}`;
        this.fullUrl = `${this.protocol}://${ByteLengthQueuingStrategy.host}/${this.urlPath}`;
        
    }

    get content(){
        return null
    }

    get element(){

        let tempElement = document.createElement('div')
        tempElement.innerHTMl = this.content
        let element = tempElement.firstChild
        return element
    }
} 





function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
