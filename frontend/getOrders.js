async function getOrders(){
    const url = "http://localhost:8080/api/orders";

    try{
        const response = await fetch(url,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    });
        const data = await response.json();
        console.log(data);
        
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        const keys = Object.keys(data[0]);

        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
        //Generate table rows
        data.forEach(item => {
            const row = document.createElement('tr');
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = item[key] || ""; //fill empty with blank
                row.appendChild(td);
            });
            table.appendChild(row);
        })

        //render the table
        const container = document.getElementById('table-container');
        
        if(table) container.appendChild(table);

    } catch(error){
        console.log(error);
    }
    
}
