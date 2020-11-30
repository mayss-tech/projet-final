import React, { useEffect, useState} from 'react';
import {fetchMenuAsync} from '../JS/actions/menuAction';
import { useDispatch, useSelector } from 'react-redux';
import Fade from "react-reveal/Fade";
import { addItem } from '../JS/actions/shopping-cartAction';

const MenuList= (props) => {
    const menus= useSelector((state) => state.menuReducer.menus);
    const loading = useSelector((state) => state.menuReducer.loading);
    const error= useSelector((state) => state.menuReducer.error);
    const cartItems= useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuAsync())
        }, []);

    return loading ? (
        <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) :error? ( <h1 style={{marginTop:'15%', marginLeft:'40%'}}> 404 Not Found </h1>
    ) : ( 
    <div>
        <div className="shopping-cart">
            <h4 onClick={()=>props.history.push('/cartItems')}>Mon pannier</h4>
            <div className="tot_cart"><i className="fas fa-shopping-cart"></i>
            <p className="pannier">{cartItems.length}</p>
        </div>
        </div>
        <Fade bottom cascade>
        <div className="part1">
        {menus.map(el=><div className="restoList" key={el.id}>
                <img className="imgResto"  src={el.img} alt="image"/>
                <div style={{display:"block"}} >
                <h4>{el.menuName}</h4>
                <h5>{el.price} dt </h5></div>
                <button className="btn1" onClick={()=>dispatch(addItem(el))}>Ajouter au pannier</button>
            </div>)
        }
        </div>
        </Fade>
    </div>
    )
};
export default MenuList;