const INTITAL_STATE = 10
const reducer = (state = INTITAL_STATE, action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload
        case 'withdraw':
            return state - action.payload
        case 'multiply':
            return state * action.payload
        case 'divide':
            return Number((state / action.payload).toFixed(0))

        default: return state;
    }
}
export default reducer