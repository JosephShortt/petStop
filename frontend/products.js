async function getProducts(){
    const url = "http://localhost:8080/api/products";

    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = await response.json();
        console.log(data);

        const keys = Object.keys(data[0]);
        const div = document.createElement('div');

        data.forEach(item => {
            const innerDiv = document.createElement('div');

            keys.forEach(key => {
                if(key==="productId"){
                    const h1 = document.createElement('h1');
                    h1.textContent = "Product ID: "+item[key];
                    innerDiv.appendChild(h1);
                }
                else if(key==="productCategory"){
                    const p = document.createElement('p');
                    p.textContent = "Category: "+item[key];
                    innerDiv.appendChild(p);
                }
                else{
                    const p = document.createElement('p');
                    p.textContent = "Price: €"+item[key];
                    innerDiv.appendChild(p);
                }

            })
            
            div.appendChild(innerDiv);

        });

        const container = document.getElementById('product-container');

        if(container) container.appendChild(div);
        console.log(container);
    } catch(error){
        console.log(error);
    }

}