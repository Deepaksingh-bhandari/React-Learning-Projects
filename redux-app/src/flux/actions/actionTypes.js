import dispatcher from "../dispatcher/appDispatcher";

export function incrementValue(val) {
    dispatcher.dispatch({
        type: 'INCREMENT',
        payload: val,
    });
}
export function decrementValue(val) {
    dispatcher.dispatch({
        type: 'DECREMENT',
        payload: val,
    });
}