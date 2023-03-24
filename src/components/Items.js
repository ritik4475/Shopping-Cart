import React, { useContext } from 'react'
import { CartContext } from './Cart'

export default function Items({id, description, title, img, price, quantity}) {

    const {removeItem, increment, decrement} = useContext(CartContext)

    return (
        <>
            <div className='items-info'>
                <div className='product-img'>
                    <img src={ img } alt='img' />
                </div>

                <div className='title'>
                    <h2>{ title }</h2>
                    <p>{description}</p>
                </div>

                <div className='add-minus-quantity'>
                    <i className="fa fa-plus add" aria-hidden="true" onClick={() => increment(id)}></i>
                    <input type="text" placeholder={quantity} />
                    <i className="fa fa-minus minus" aria-hidden="true" onClick={() => decrement(id)}></i>
                </div>

                <div className='price'>
                    <h3>₹ {price}</h3>
                </div>

                <div className='remove-item'>
                    <i className="fa fa-trash-alt remove" aria-hidden="true" onClick={()=>removeItem(id)}></i>
                </div>
            </div>
            <hr />
        </>
    )
}
