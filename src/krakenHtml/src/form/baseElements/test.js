console.log('keydown', this.value);
let datalist=document.getElementById('datalistOptions${inputID}');
let element = this;
callApi(element, datalist);

async function callApi(element, datalist){
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"propertyID": "_heading1", "textContent": this.value, "format": "simple"}),
    };
    let response = await fetch(${url}, requestOptions);
    if (!response.ok) {
          throw new Error('Network response was not ok');
    };
    let data = await response.json();
    datalist.innerHTML = '';
    for(let item of data.itemListElement){
        var option = document.createElement('option');
        option.value = item._heading1;
        datalist.appendChild(option);
    }
}