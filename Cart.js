import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart,delCart } from '../redux/action/index';

export function Cart () {
    const state = useSelector((state) => state.addCart)
    const dispatch = useDispatch()

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <h2>Cart</h2>
                <div className='container py-4'>
                    <button type="button" className="btn-close float-end" aria-label="Close"></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                         <img src={cartItem.img} alt={cartItem.title}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
        return (
            <div>
                {state.length !== 0 && state.map(cartItems)}
            </div>
        );
}
