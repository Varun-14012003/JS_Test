function checkInventory(quantity){
    if (quantity < 5) {
        throw new Error("Inventory quantity is below 5")
    }
    return "Inventory is Sufficient"
}

try{
    console.log(checkInventory(3));
} catch(error) {
    console.log(error.message);
    
}