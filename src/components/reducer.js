export const reducer = (state, action) =>{
    if(action.type === "REMOVE_ITEM"){
        return {...state, 
        item: state.item.filter((currelem)=>{
            return currelem.id !== action.payload; 
        })
        }
    }
    if(action.type === "CLEAR_CART"){
        return {...state, item: []}
    }
    if(action.type === "INCREMENT"){
        const updateCart = state.item.map((currele) => {
            if(currele.id === action.payload){
                return {...currele, quantity: currele.quantity + 1}
            }
            return currele;
        })
        return {...state, item: updateCart}
    }
    if(action.type === "DECREMENT"){
        const updateCart = state.item.map((currele) => {
            if(currele.id === action.payload){
                return {...currele, quantity: currele.quantity - 1}
            }
            return currele;
        }).filter((currele) => {
            return currele.quantity !== 0;
        })
        return {...state, item: updateCart}
    }
    if(action.type === "GET_TOTAL"){
        let { totalItem,totalAmount } = state.item.reduce((accum, curVal) => {
            let {price, quantity} = curVal;
            let updateTotalAmount = price * quantity;
            accum.totalAmount += updateTotalAmount;
            accum.totalItem += quantity;
            return accum;
         }, {
            totalItem: 0,
            totalAmount: 0
        })
        return {...state, totalItem,totalAmount}
    }
    return state;
}