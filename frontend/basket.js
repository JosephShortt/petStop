
function saveItem(productId){
    sessionStorage.setItem(productId,parseInt(document.getElementById(productId).value));
   
    console.log("Basket Items:");
    console.log("Collar q="+sessionStorage.getItem("collarQuantity"));
    console.log("leash q="+sessionStorage.getItem("leashQuantity"));
    console.log("bowl q="+sessionStorage.getItem("bowlQuantity"));


}