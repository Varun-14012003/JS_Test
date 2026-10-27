class InvalidCouponCode extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidCouponCode"
    }
}

function applyCode(code){
    if (code !== "Save10%") {
        throw new InvalidCouponCode("Invalid Coupon Code!!")
    }
    console.log("Coupon Code Applied Successfully!!!");
    
}

try{
    console.log(applyCode("10%"));
} catch (error){
    console.log(error.name +" "+ error.message);
}
