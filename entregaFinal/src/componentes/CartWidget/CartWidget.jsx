import React from 'react'
import bolsa from './assets/bolsa.svg'
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
        <img src={bolsa} alt="bolsa" className='cartWidget'/>
        <p>0</p>
    </div>
  )
}

export default CartWidget
