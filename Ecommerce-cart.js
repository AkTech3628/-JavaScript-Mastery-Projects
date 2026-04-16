const products=[
    {id : 1 , name : "Laptop", price : 1000 , quantity : 2},
    {id : 2 , name : "Mouse", price : 25 , quantity : 5},
    {id : 3 , name : "Keyboard", price : 75 , quantity : 3}
];


// 1.Get Total Price of all products in the cart

const getTotalprice=()=>{
  const total=products.reduce((sum,p)=>sum+(p.price * p.quantity), 0);
  console.log("Total Price:",total)
  return total;
  
}


// 2. Get Products Names in the Cart

const getProductnames=()=>{
    const names=products.map(p=>p.name)
    console.log("Products names :",names)
    return names;
}


//3. Get Expensive Producrs

const getExpensiveproducts=()=>{
    const expensive=products.find(p=>p.price>75)
    console.log("Expensive Products :",expensive)
    return expensive

}

//4.GET Total Items

const getTotalItems=()=>{
    const totalItems=products.map(p=>p.quantity).reduce((sum,q)=>sum+q,0)

    console.log("Total Items in Cart :",totalItems)
    return totalItems
}


getTotalprice();
getProductnames()
getExpensiveproducts()
getTotalItems()


