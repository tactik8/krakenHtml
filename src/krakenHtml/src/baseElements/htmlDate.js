

export function htmlDate(value, propertyID, options){

    return _getDate(value, propertyID, options)

}



export function htmlDateRelative(value, propertyID, options){

    return _getDateRelative(value, propertyID, options)

}



function _getDate(record, propertyID, options){


    let inputDate = record?.[propertyID]
    let formattedValue 

    let locale = 'en-CA'

    if((inputDate instanceof Date == false)){

        console.log(inputDate)
        try{
            inputDate = new Date(inputDate)
            formattedValue = inputDate.toLocaleDateString(locale, options);
        } catch (error) {
            formattedValue = ''
        }

    } else {

        try{
            formattedValue = inputDate.toLocaleDateString(locale, options);
        } catch {
            formattedValue = ''
        }
        
    }

    
    let content = `
            <span
                data-record-type="${record['@type']}"
                data-record-id="${record['@id']}" 
                data-propertyID="${propertyID}"
                >
                ${ formattedValue }
            </span>
    `
    return content

}





function _getDateRelative(record, propertyID, options){

    let value = getRelativeDate(record?.[propertyID])

    if(!value || value == null){
        value = ''
    } 


    let content = `
            <span
                data-record-type="${record['@type']}"
                data-record-id="${record['@id']}" 
                data-propertyID="${propertyID}"
                >
                ${ value }
            </span>
    `
    return content


}





function getRelativeDate(inputDate) {


    if(inputDate === undefined || inputDate === null){ return null }

    if((inputDate instanceof Date == false)){

        try{
            inputDate = new Date(inputDate)
        } catch (error) {
            
        }
    }
    
    const now = new Date();
    const differenceInSeconds = Math.floor((now - inputDate) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(differenceInSeconds / interval.seconds);
        if (count >= 1) {
            return count === 1 
                ? `${count} ${interval.label} ago` 
                : `${count} ${interval.label}s ago`;
        }
    }

    return 'just now';
}