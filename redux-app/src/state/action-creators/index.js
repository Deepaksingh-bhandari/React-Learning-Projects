// export const depositMoney=(amount)=>{
// return  (dispatch)=>{
//      dispatch(
//          {
//          type: 'deposit',
//          payload: amount
//         }
//      )
// }
// }
    
// export const withdrawMoney=(amount)=>{
//     return  (dispatch)=>{
//         dispatch(
//             {
//             type: 'withdraw',
//             payload: amount
//            }
//         )
//    }
// }

// WITHOUT MIDDLEWARE( eg: THUNK) Actions should return plain object
export const withdrawMoney=(amount)=>{
    return  {
            type: 'withdraw',
            payload: amount
           }
}
export const depositMoney=(amount)=>{
    return  {
            type: 'deposit',
            payload: amount
           }
}   
export const multiplyCounter=(counter)=>{
    return  {
            type: 'multiply',
            payload: counter
           }
}   
export const divideCounter=(counter)=>{
    return  {
            type: 'divide',
            payload: counter
           }
}   