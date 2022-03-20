import React from 'react'
import Sidebar from './Sidebar'

const OrderDetail = (props) => {
  return (
    <Sidebar onClose={props.onClose} isOpen={props.isOpen}>
    <h3>Order Id #129305676750</h3>
    <p>Delivered on Wed, Mar 2, 2022, 08:15 PM by Sanjeev Kumar</p>
    <h4 className='item_count'>2 Items</h4>
    <div className="item_box d-flex justify-content-between align-items-center">
        <span>
            Apple, 2KG
        </span>
        <span>
            ₹260
        </span>
    </div>
    <div className="item_box d-flex justify-content-between align-items-center">
        <span>
            Apple, 2KG
        </span>
        <span>
            ₹260
        </span>
    </div>
    <div className="bill d-flex justify-content-between align-items-center">
        <h5>Bill Total</h5>
        <span>
            ₹520
        </span>
    </div>
</Sidebar>
  )
}

export default OrderDetail