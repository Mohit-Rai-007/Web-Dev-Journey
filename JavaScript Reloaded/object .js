let student={
    name: "Mohit",
    greet:  function(){
        return `Hi,I am ${this.name}`
    }
    
    
}
console.log(student.greet());

let mobile={
    brand:"iphone",
    features:["camera","5G","Fast Charging","512GB","Snapdragon"],
    spec:{
        storage:"256GB",
        extended_storage:"12GB"
    }
}

console.log(mobile.features[3]);

console.log(mobile.spec.extended_storage);


let cars={brand:"Tesla", price:3000000, color:"Red"}

for(let key in cars)
{
    console.log(`${key} ${cars[key]}`);
    
}

console.log(Object.keys(cars));
console.log(Object.values(cars));
console.log(Object.entries(cars));



let product={
    name: "Laptop",
    price: 60000,
    category: "electronics",
    discount: function(){
        dis_price=this.price-this.price*0.2
        return `Real Price is ${this.price} and after discount is ${dis_price}`
    }
}

console.log(product.discount());

