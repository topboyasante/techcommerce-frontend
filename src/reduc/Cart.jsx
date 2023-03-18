import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({

name:'cart',
initialState:{
    TotalQuantity:0,
    Itemslist: [],


},
reducers:{
    Add(state,action){
        const newitem = action.payload;
        //check if item exist
        const existingitem= state.Itemslist.find((item)=> item.id=== newitem.id);
        if(existingitem){
            existingitem.quantity++;
            existingitem.totalprice+= newitem.price;
            state.showSnack = true;
        }
        else{
            //creating new item
            state.Itemslist.push(
                {
                    id:newitem.id,
                    price:newitem.price,
                    quantity:1,
                    totalprice:newitem.price,
                    name:newitem.name,
                    img:newitem.img
                }
            )
            state.TotalQuantity++;
        
         

        }






    },
    //deleting an item from cart
    delete(state,action){
            
        const id= action.payload;
        //finding the item with id === id
        const existingitem = state. Itemslist.find((item)=> id === item.id);
        //clearing item from cart if quantity === 1
        if(existingitem.quantity === 1){
            state.Itemslist = state.Itemslist.filter((item)=> item.id !== id);
            state.TotalQuantity--
        }
        //reducing the item quantity
        else{
            existingitem.quantity--;
            existingitem.totalprice -= existingitem.price;
        }

}

}











})


export const cartActions = cart.actions;

export default cart;