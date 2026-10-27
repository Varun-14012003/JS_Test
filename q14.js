function fetchProduct(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const product = {
                name: "Laptop",
                price: 50000,
                availability: "Yes"
            }
            resolve(product)
        },2000)
    })
}
fetchProduct()

.then(product=>{
    console.log("Product Name: ",product.name);
    console.log("Product Name: ",product.price);
    console.log("Product Name: ",product.availability);
})

.catch(error=>{
    console.log(error.name+" "+error.message);
})