
const localStoregeDB=id=>{
    let shoppingCart=localStorageData();

    // const getShoppingCart=localStorage.getItem('shopping_cart_id')
    // if(getShoppingCart){
    //     shoppingCart= JSON.parse(getShoppingCart) 
    // }else{
    //     shoppingCart={}
    // }

    const quantity=shoppingCart[id]

    if(quantity){
        shoppingCart[id]=quantity+1;
    }else{
        shoppingCart[id]=1
    }


    localStorage.setItem('shopping_cart_id', JSON.stringify(shoppingCart))

}


const localStorageData=()=>{
    let shoppingCart;

    const getShoppingCart=localStorage.getItem('shopping_cart_id')
    if(getShoppingCart){
        shoppingCart= JSON.parse(getShoppingCart) 
    }else{
        shoppingCart={}
    }
    return shoppingCart;
}


export {localStoregeDB, localStorageData}