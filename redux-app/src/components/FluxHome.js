import React,{useState,useEffect} from 'react'
import store from '../flux/store/store'
import * as  actionTypes from '../flux/actions/actionTypes'

const FluxHome = () => {
  const [value, setvalue] = useState(20);
  useEffect(() => {
    store.on('change',()=>{
      setvalue(store.getCounterValue())
    });
  
  }, []);
  
  return (
      <div className='container -fluid has-text-centered'>
      <h2 className='title is-5 my-3' > Deposit/withdraw counter </h2>
      <div className='columns is-centered'>
        <div className='box column is-3 is-offset-x is-flex is-jsutify-content-center '>
          <button className='button is-link  is-one-quarter is-flex is-align-items-center' onClick={()=>{actionTypes.decrementValue(5)}}>-</button>
          <div className='has-text-centered mx-2 is-flex is-one-quarter p-0'><input disabled className='input' type='text' value={value}/></div>
          <button className='button is-link  is-one-quarter is-flex is-align-items-center' onClick={()=>{actionTypes.incrementValue(5)}}>+</button>
        </div>
      </div>
    </div>

  )
}

export default FluxHome
