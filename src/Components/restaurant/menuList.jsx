import React, {useEffect,useState} from 'react';
import {fetchMenuAsync} from '../JS/actions/menuAction';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../JS/actions/shopping-cartAction';
import Modal from 'react-modal';
const MenuList= (props) => {
    const menus= useSelector((state) => state.menuReducer.menus);
    const loading = useSelector((state) => state.menuReducer.loading);
    const error= useSelector((state) => state.menuReducer.error);
    const cartItems= useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuAsync())
        }, []);
    const [popUp,setPopUp]=useState(null);
const openModal=(el)=>{
    setPopUp({popUp})
}
const closeModal=()=>{
    setPopUp()}
    return loading ? (
        <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) :error? ( <h1 style={{marginTop:'15%', marginLeft:'40%'}}> 404 Not Found </h1>
    ) : ( 
    <div>
        <div className="shopping-cart">
            <h3 onClick={()=>props.history.push('/cartItems')}> Panier</h3>
            <div className="tot_cart"><i className="fas fa-shopping-cart"></i>
            <p className="pannier">{cartItems.length}</p>
        </div>
        </div>
        <div className="part_menu"  >
        {menus.map(el=><div className="menu" key={el.id} >
            <div onClick={()=>(openModal(popUp))}> 
                <img className="imgmenu" src={el.img} alt="image"/>
                <div className="menu_p"><h3>{el.menuName}</h3>
                <h5>{el.price} dt </h5>
                </div>
            </div>
                <button className="btn_menu" onClick={()=>dispatch(addItem(el))}>
                <b>Ajouter au panier</b>{" "}<i className="fas fa-cart-plus"></i></button>
               
            </div>)}
        </div>
        <div> {popUp && (<Modal isOpen={true} onRequestClose={closeModal} >
  
          <div>
              <button onClick={()=>closeModal({popUp:null})}><i className="fas fa-times"></i></button>
            </div>
       
    
    
       
    </Modal>)}</div>
    </div>
    )};
export default MenuList;