import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/appDispatcher';
// import actionsTypes from '../actions/actionsTypes';

// let state._counterValue=0;
// const CHANGE_EVENT = 'change'
class CounterStore extends EventEmitter {
    constructor() {
        super();
        
        this.state={
            _counterValue : 20
        }
    }
    // addChangeListener(callback) {
    //     this.on(CHANGE_EVENT, callback);
    // }
    // removeChangeListener(callback) {
    //     this.removeListener(CHANGE_EVENT, callback);
    // }
    // emitChange() {
    //     this.emit(CHANGE_EVENT);
    // }
    incrementValue(val) {
        this.state._counterValue+=val;
        console.log("Increment function called", this.state._counterValue)
        this.emit('change')
    }
    decrementValue(val) {
        this.state._counterValue-=val;
        console.log("Decrement function called", this.state._counterValue)
        this.emit('change')
    }
    getCounterValue() {
        console.log("Get Counter value is", this.state._counterValue)
        return this.state._counterValue;
    }
    handleAction(action) {
        console.log("Received action", action)

        switch (action.type) {
            case 'INCREMENT':
                this.incrementValue(action.payload);
                break;
            case 'DECREMENT':
                this.decrementValue(action.payload);
                break;
            default: this.getCounterValue();
                break;
        }
    }
}

const store = new CounterStore();

dispatcher.register(store.handleAction.bind(store))
window.dispatcher = dispatcher;
export default store
