import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/action-creators/actions';
// import {store} from '../state/store'


const Home = () => {

 
  
  const amount=useSelector(state=>state.amount2) //reducer name is provided here
  const dispatch=useDispatch()
  const action=bindActionCreators(actionCreators,dispatch)

  // Use Store can be used to get state of the store or replace reducers or can be subscribed for changes
  let str1=useStore() 
  useEffect(() => {
    console.log(str1.getState()); 
  }, [amount]);

  return (
    <div className='container -fluid has-text-centered'>
      <h2 className='title is-5 my-4 ' > Deposit/withdraw counter </h2>
      <div className='columns is-centered'>
        <div className='box column is-3 is-offset-x is-flex is-jsutify-content-center '>
          <button className='button is-link  is-one-quarter is-flex is-align-items-center' onClick={()=>{action.withdrawMoney(20)}}>-</button>
          <div className='has-text-centered mx-2 is-flex is-one-quarter p-0'><input disabled className='input' type='text' value={amount} /></div>
          <button className='button is-link  is-one-quarter is-flex is-align-items-center' onClick={()=>{action.depositMoney(20)}}>+</button>
        </div>
      </div>

      <h2 className='title is-5 my-4 ' > Multiply/divide counter</h2>
      <div className='columns is-centered'>
        <div className='box column is-3 is-offset-x is-flex is-jsutify-content-center '>
        <button className='button is-link  is-one-quarter is-flex is-align-items-center' onClick={()=>{dispatch(actionCreators.divideCounter(2))}}>/</button>
          <div className='has-text-centered mx-2 is-flex is-one-quarter p-0'><input disabled className='input' type='text' value={amount} /></div>
          <button className='button is-link  is-one-quarter is-flex is-align-items-center' onClick={()=>{dispatch(actionCreators.multiplyCounter(3))}}>*</button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
