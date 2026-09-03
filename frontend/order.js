const firstName = document.getElementById("firstName").value;
const surname = document.getElementById("surname").value;
const address = document.getElementById("address").value;


async function placeOrder(){
    const url = "http://localhost:8080/api/orders";

    try{
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({firstName,surname,address,items:[
                {product: {productId: 1 },quantity:collarQuantity},
                {product: {productId: 2 },quantity:leashQuantity},
                {product: {productId: 3 },quantity:bowlQuantity}
            ]

            })
        })
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}