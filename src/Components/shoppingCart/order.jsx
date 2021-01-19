import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Bar from "../Bar/Bar";
import { nextStep } from "../JS/actions/ProgressBar";
const Order = (props) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const TTC =useSelector((state)=>state.cartReducer.tot)
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const [open,setOpen]=useState(false)
  return (
    <div className="order">
      <div>
      <Bar/>
      </div>
      
      
      <h5>Order N° {Date.now()} </h5>
      <div className="user_details">
        <p>Nom et prènom : {isAuth.name}</p>
        <p>Téléphone : {isAuth.telephone}</p>
        <p>Adresse : {isAuth.adress} </p>
        <p>Code postal :{isAuth.codePostal}</p>
        <hr />
        <h5>Vos achats</h5>
        {cartItems.map( el=><div className="cartItems_details" >
        <p> Restaurant : {el.nameResto}</p>
          <p> Menu : {el.menuName} </p>
          <p> Quantité : {el.qtn}  </p>
          <p> Prix  : {el.price} dt </p>
        </div>)}
        <div>
        <p>Vous pouvez ajouter une remarque sur la commande, destinée au restaurant
</p>
<input type="text" onClick={()=>setOpen(!open)}/>
<div className={open?"p":"none"}>
<p   ><u>Exemple:</u><br/> 
pas d'olive sur le pizza </p>
  </div>

        </div>

<textarea name="remarque" data-ot="<u>Exemple:</u>
</Br> pas d'olive" data-ot-fixed="true"
data-ot-stem="left" data-ot-tip-joint="left" data-ot-stem-base="10" rows="4" cols="50"
data-ot-target="true" class="focus-visible" data-focus-visible-added>

</textarea>

        <h5>Frais de livraison : 5 dt</h5>
        <h5> Prix à payer : {TTC} dt </h5>
        <button onClick={()=>{props.history.push('Confirmer la commande');
        dispatch(nextStep(60))
      }
      
      
      }>Confirmer la commande</button>
      </div>
    </div>
  );
};
export default withRouter (Order);
