import { useContext, useEffect, useState } from 'react';
import React from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import style from '../Layout/HeaderCartButton.module.css'

function HeaderCartButton(props) {
    const [btnEvent, setBtnEvent] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${style.button} ${btnEvent ? style.bump : ''}`;
    
    useEffect(() => {
        if (items.length === 0 ) {
            return;
        }
        setBtnEvent(true);
        const timer = setTimeout(() => {
            setBtnEvent(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.cartClick}>
            <span className={style.icon}>
                <CartIcon/>
            </span>
            <span className={style.cart}>내 장바구니</span>
            <span className={style.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton