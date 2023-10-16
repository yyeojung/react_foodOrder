import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
import style from './Header.module.css'

function Header(props) {
  return (
    <Fragment>
        <header className={style.header}>
            <h1>YummyYummy</h1>
            <HeaderCartButton cartClick={props.onShowCart}/>
        </header>
        <div className={style['main-image']}>
            <img src={mealsImage} alt='음식사진'/>
        </div>
    </Fragment>
  )
}

export default Header