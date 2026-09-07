let firstName = null;
let surname = null;
let address = null;


async function placeOrder(){
    firstName = document.getElementById("firstName").value;
    surname = document.getElementById("surname").value;
    address = document.getElementById("address").value;
    

    const url = "http://localhost:8080/api/orders";

    try{
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({firstName:firstName,surname:surname,address:address,items:parseBasket()
            })
        })
        const data = await response.text();
        console.log(data);
        window.alert(data);
    }
    catch(error){
        console.log(error);
    }

    sessionStorage.clear();
    window.location.replace("./thankYouPage.html");
}

function parseBasket(){
    const items = [];

    for(var i=1;i<=sessionStorage.length;i++){
        items.push({product: {productId: i},quantity:sessionStorage.getItem(i)});
    }

    return items;
}