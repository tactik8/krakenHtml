
import { htmlComponents as c } from '../../components/htmlComponents.js'


export function formInputAutocomplete(url, propertyID, inputID, caption, value){



    

    

    let content = `

            <input 
            class="form-control" 
            id="${inputID}" 
            data-propertyID="${propertyID}" 
            aria-describedby=""
            list="datalistOptions${inputID}"
            placeholder="Type to search..."
            onkeydown="
            console.log('keydown', this.value);
            let datalist=document.getElementById('datalistOptions${inputID}');
            let element = this;
            let url = '${url}';
            callApi(url, element, datalist);
            
            async function callApi(url, element, datalist){
                
                const requestOptions = {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({'propertyID': '@id', 'textContent': element.value, 'format': 'simple'})
                };

                let response;
                try{
                    let fullUrl = url +'?format=simple&propertyID=_heading1&textQuery=' + element.value;
                    console.log(fullUrl);
                    response = await fetch(fullUrl);
                } catch (error) { 
                    console.log(error);
                    console.log('r', response);
                }
                if (!response.ok) {
                      throw new Error('Network response was not ok');
                      console.log('r', response);
                };
                let data = await response.json();
                datalist.innerHTML = '';
                for(let item of data){
                    
                    var option = document.createElement('option');
                    //option.value = JSON.stringify({'@type': item['@type'], '@id': item['@id']});
                    option.value = JSON.stringify(item);
                    //option.innerHTML = item._heading1;
                    option.label =  item._heading1;
                    datalist.appendChild(option);
                    //element.appendChild(option);
                };
            };

            "
            oninput="
            try{
                let record = JSON.parse(this.value);
                console.log(record);

                let card = document.createElement('span');
                card.innerHTML = getCard(record);
                this.before(card)
                this.value = ''
                
               
                try{
                    record_cardElement.innerHTML = getCard(record);
                } catch (error) {
                    console.log(error)
                }
                
            } catch {
            
            };

            function getCard(record){

                let content = ''

                // Handle image
                let avatar = '';
               
                let sImage = document.createElement('span');
                sImage.classList.add('me-1');
                if(record?.image?.contentUrl){

                    console.log('Has image');
                    let image = document.createElement('img')
                    image.src = record?.image?.contentUrl;
                    image.classList.add('rounded-circle')
                    image.style.width = 'width:38px'
                    sImage.appendChild(image) 
                }

                content += sImage.innerHTML

                
                // Heading
                console.log('c')
                console.log('Get heading')
                let sHeading = document.createElement('span');
                sHeading.textContent = record._heading1;
                content += sHeading.innerHTML

                // Delete 
                let sDelete = document.createElement('span');
                let b = document.createElement('button');
                b.setAttribute('type', 'button');
                b.setAttribute('data-bs-dismiss', 'alert');
                b.setAttribute('aria-label', 'close');
                b.classList.add('btn-close')
                sDelete.appendChild(b)
            
                content += sDelete.innerHTML


                // Add fields
                let sFields = document.createElement('span');
                let input1 = document.createElement('input');
                input1.setAttribute('type', 'hidden') 
                input1.id = '@type'
                input1.setAttribute('value', record['@type'])
                sFields.appendChild(input1)
                
                let input2 = document.createElement('input');
                input2.type='hidden'
                input2.id = '@id'
                input2.setAttribute('value', record['@id'])
                sFields.appendChild(input2)

                console.log(sFields.innerHTML)
                content += sFields.innerHTML



                
                // Combine
                console.log('d')
                let sCard = document.createElement('div');
                sCard.classList.add('alert')
                sCard.classList.add('alert-light')
                sCard.classList.add('alert-dismissible')
                sCard.setAttribute('role', 'alert')
                sCard.innerHTML = content
              

                let temp = document.createElement('div');
                temp.appendChild(sCard);
                console.log('e')
                return temp.innerHTML
                
     
    
            };
            "
            
            >
            <datalist id="datalistOptions${inputID}">
            </datalist>
           
            

            

            

    `

    return content

}
