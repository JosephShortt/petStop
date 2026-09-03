
function saveItems(){
    sessionStorage.setItem("collarQuantity",parseInt(document.getElementById("collarQuantity").value));
    sessionStorage.setItem("leashQuantity",parseInt(document.getElementById("leashQuantity").value));
    sessionStorage.setItem("bowlQuantity",parseInt(document.getElementById("bowlQuantity").value));

    console.log("Basket Items:");
    console.log("Collar q="+sessionStorage.getItem("collarQuantity"));
    console.log("leash q="+sessionStorage.getItem("leashQuantity"));
    console.log("bowl q="+sessionStorage.getItem("bowlQuantity"));


}