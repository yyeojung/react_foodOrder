import React, { useContext } from 'react'
import Modal from '../Ui/Modal';
import style from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    };

    const cartItems = (
        <ul className={style['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
        );
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={style.total}>
            <span>총 가격</span>
            <span>{totalAmount}</span>
        </div>
        <div className={style.actions}>
            <button className={style.button__alt} onClick={props.onClose}>취소</button>
            {hasItems&&<button className={style.button}>주문</button>}
        </div>
    </Modal>
  )
}

export default Cart