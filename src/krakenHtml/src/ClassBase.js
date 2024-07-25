

export class ClassBase {

    constructor(record, urlOptions) {


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
        

        this.urlOptions = urlOptions
        
        
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

 
   

    get content(){
        return null
    }

    get element(){

        let tempElement = document.createElement('div')
        tempElement.innerHTMl = this.content
        let element = tempElement.firstChild
        return element
    }



    get params(){
        if(!this._params || this._params == null) { this._params = {}}
        return this._params
    }

    set params(value){
        this._params = value
    }


    // -----------------------------------------------------
    //  Atrirbutes for .params 
    // -----------------------------------------------------

    
    get limit(){
        return this.params?.limit
    }    

    set limit(value){
        this.params.limit = value
    } 

    get offset(){
        return this.params?.offset
    }    

    set offset(value){
        this.params.offset = value
    } 

    get orderBy(){
        return this.params?.orderBy
    }    

    set orderBy(value){
        this.params.orderBy = value
    } 

    get orderDirection(){
        return this.params?.orderDirection
    }    

    set orderDirection(value){
        this.params.orderDirection = value
    } 


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    
    get urlOptions(){

        let options = this._urlOptions

        if(!options || options == null){
            options = {}
        }

        if(this.basePath && this.basePath != null){
            options.basePath = this.basePath
        }
       
        
        if(this.record_type && this.record_type != null){
            options.record_type = this.record_type
        }
        if(this.record_id && this.record_id != null){
            options.record_id = this.record_id
        }

        return options
        
    }

    set urlOptions(value){

        if(! value || value == null){ this._urlOptions = {}; return }
        
       this._urlOptions=value
        this.record_type = value.record_type || this.record_type
        this.record_id = value.record_id || this.record_id
        this.basePath = value.basePath || this.basePath
    }
} 





function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
