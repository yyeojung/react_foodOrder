import React, { useRef, useState } from 'react';
import Input from '../../Ui/Input';
import style from './MealItemForm.module.css'

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] =  useState(true);
    const amountInputRef = useRef();

    const SubmitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber > 5 ||
            enteredAmountNumber < 1
        ) {
            setAmountIsValid(false);
            return;
        }
        
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={style.form} onSubmit={SubmitHandler}>
            <Input 
                ref={amountInputRef}
                label="개수" 
                input={{
                id: 'amount'+ props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>추가</button>
            {!amountIsValid && <p>5개 이하의 수량을 선택해주세요.</p>}
        </form>
    )
}

export default MealItemForm