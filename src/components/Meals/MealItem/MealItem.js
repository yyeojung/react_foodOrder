import React, { useContext } from 'react'
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
    const cartCtx = useContext(CartContext);
    const price = `${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount, 
            price: props.price
        })
    };

  return (
    <li className={style.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={style.description}>{props.description}</div>
            <div className={style.price}>{price}</div>
        </div>
        <div>
            <MealItemForm 
            id={props.id} 
            onAddToCart={addItemToCartHandler}

            />
        </div>
    </li>
  )
}

export default MealItem