

export class ClassBase {

    constructor(record, request) {


        this._record = {}
        this._records = []

        this._record_type =null
        this._record_id = null
        
        if(Array.isArray(record)){
            this.things = record
        } else {
            this.thing = record
        }

        // Object related
       
    
        
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

        this._hostname = null
        this._search = null
        this._basePath = null
        this._baseParams = {}
        this._params = {}
        

        if(request){
            this.loadFromRequest(request)
        }
    }

    get search(){
        return this._search
    }

    set search(value){
        this._search = value
    }

    get hostname(){
        return this._hostname
    }

    set hostname(value){
         this._hostname= value
    }

    get basePath(){
        return this._basePath
    }

    set basePath(value){
         this._basePath= value
    }

    
    get pathname(){
        return this.path
    }

    set pathname(value){
        this.path = value
    }


    get baseParams(){
        return this._baseParams
    }

    set baseParams(value){
         this._baseParams= value
    }

    get params(){
        return this._params
    }

    set params(value){
         this._params= value
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

    get record_type(){
        return this._record_type
    }

    set record_type(value){
        this._record_type = value
    }

    get record_id(){
        return this._record_id
    }
    set record_id(value){
        this._record_id = value
    }


    get thing(){
        return this._thing
    }

    set thing(value){

        if(!value || value == null) { return }
        
        if(value.record_type){
            this._thing = value
            this._record = value.record
        } else {
            this._record = value
        }
       
        this._record_type = this._record['@type'] || this._record_type
        this._record_id = this._record['@id'] || this._record_id
        
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


        if(!req || req == null) { return }
        
        this.record_type = req.query['@type'] || req.query['record_type'] || req.params['@type'] || req.params['record_type'] || this.record_type
        this.record_id = req.query['@id'] || req.query['record_id'] || req.params['@id'] || req.params['record_id'] || this.record_id

        
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

    
    
    get urlOptions(){

        let options = {
            'hostname': this.hostname,
            'basePath': this.basePath,
            'pathname': this.pathname,
            'params': this.params,
            'baseParams': this.baseParams,
            'record_type': this.record_type,
            'record_id': this.record_id
        }
        return options
    }

    set urlOptions(value){

        if(!value || value == null) { return }
        for(let k in value){
            let v = value[k]

            if(v && v != null){
                this[k] = value[k]
            }
        }
     
    }
} 





function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
