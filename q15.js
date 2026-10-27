function fetchOrderHistory(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const orders = [
            {orderid: 1, product: "AC", price: 10000},
            {orderid: 2, product: "TV", price: 10000},
            {orderid: 3, product: "Mobile", price: 10000}
        ];
        resolve(orders)
        }, 2000)
    })
}
async function displayOrdersHistory(){
    try{
        const orders = await fetchOrderHistory();
        console.log("Custormer Order History:");
        orders.forEach(order=>{
            console.log(order.orderid, order.product, order.price);
            
        })
    } catch(error){
        console.log("Error: ",error.message);
        
    }
}

displayOrdersHistory()