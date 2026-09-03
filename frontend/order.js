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
            body: JSON.stringify({firstName:firstName,surname:surname,address:address,items:[
                {product: {productId: 1 },quantity:sessionStorage.getItem("collarQuantity")},
                {product: {productId: 2 },quantity:sessionStorage.getItem("leashQuantity")},
                {product: {productId: 3 },quantity:sessionStorage.getItem("bowlQuantity")}
            ]

            })
        })
        const data = await response.text();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}