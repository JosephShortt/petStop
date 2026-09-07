
function saveItem(productId){
    sessionStorage.setItem(productId,1);
   
    console.log("Basket Items:");
    console.log("Collar q="+sessionStorage.getItem("collarQuantity"));
    console.log("leash q="+sessionStorage.getItem("leashQuantity"));
    console.log("bowl q="+sessionStorage.getItem("bowlQuantity"));
}

async function getBasket(){
    const basketItems = [];

    for(var i=1;i<=sessionStorage.length;i++){
        const basketItem = [i, parseInt(sessionStorage.getItem(i))];
        basketItems.push(basketItem);
    }

    console.log(basketItems);

    const ul = document.createElement('ul');

    for (const item of basketItems){
        const productName = await getProductName(item[0]);
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.value = item[1];
        input.type = "number";
        input.addEventListener('change', function(){
            sessionStorage.setItem(item[0],input.value);

        })
        li.textContent = "Product Id: "+item[0] + " "+ productName + " Quantity: "+item[1];
        
        ul.appendChild(li);
        ul.appendChild(input);
    }
        

    const basketList = document.getElementById('basket-container');
    if(basketList) basketList.appendChild(ul);

}

async function getProductName(id){
    const url = "http://localhost:8080/api/products/"+id;
    try{
        const response = await fetch(url);

        const result = await response.text();

        return result;
    }
    catch(error){
        console.log(error);
    }
}

getBasket();