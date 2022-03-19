import React from 'react'
import logo from '../../assets/images/dhaam_logo.png'
const PastOrder = () => {
  return (
    <div className="past_order">
        <h3>Past Orders</h3>
        <div className="order_box">
            <div className="left">
                <img src={logo} alt="" />
                <div className="txtb">
                    <p>Oranges</p>
                    <div>
                        <span>Price: ₹130/Kg</span>
                        <span> Qty: 2</span>
                        <span> Total: ₹260/kg </span>
                    </div>
                </div>

            </div>
            <div className="deliever">Delivered on Wed, Mar 2 2022</div>
        </div><div className="order_box">
            <div className="left">
                <img src={logo} alt="" />
                <div className="txtb">
                    <p>Oranges</p>
                    <div>
                        <div>
                            <span>Price: ₹130/Kg</span>
                            <span> Qty: 2</span>
                            <span> Total: ₹260/kg </span>
                        </div>
                        <button className='get_details'> Get Details</button>
                    </div>
                </div>

            </div>
            <div className="deliever">Delivered on Wed, Mar 2 2022</div>
        </div>
    </div>
  )
}

export default PastOrder