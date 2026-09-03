let collarQuantity=null; 
let leashQuantity = null;
let bowlQuantity = null;

function saveItems(){
    collarQuantity = parseInt(document.getElementById("collarQuantity").value);
    leashQuantity = parseInt(document.getElementById("leashQuantity").value);
    bowlQuantity = parseInt(document.getElementById("bowlQuantity").value);

    console.log("Basket Items:");
    console.log("Collar q="+collarQuantity);
    console.log("leash q="+leashQuantity);
    console.log("bowl q="+bowlQuantity);


}