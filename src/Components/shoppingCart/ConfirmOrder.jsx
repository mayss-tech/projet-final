import React,{useState,useEffect} from 'react';
import Bar from '../Bar/Bar';
import {useDispatch} from 'react-redux';
import { addAvis} from '../JS/actions/avisAction';
import Rate from '../restaurant/rate';
import { withRouter } from 'react-router-dom';
import { rate } from '../JS/actions/restaurantAction';
const ConfirmOrder = (props) => {
    const starRate=props
    const [affNameResto,setAffNameResto]=useState("")
    const [comment,setComment]=useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        setAffNameResto(JSON.parse(localStorage.getItem('menuListX')).name)
       }, []);
    return (
        <div>
            <div>
                <Bar/>
            </div>
            <h3>Merci d'avoir passé commande</h3>
            <p>votre commande est en cours ...</p>
            <p>Donnez votre avis au restaurant (service, qualité, rapidité)</p>
            <div style={{display:"flex"}}> <h5>{affNameResto} : </h5> <Rate/></div>
           
            <p>Vos commentaires nous...... </p>
            <input 
            type="text"
            placeholder="Votre commentaire"
            onChange={(e)=>setComment(e.target.value)}/>
            
            <button onClick={()=>{
            props.history.push('/finish')
        dispatch(addAvis(comment));
        dispatch(rate(starRate))}}>Valider vos avis</button>
        </div>
    )
}

export default withRouter(ConfirmOrder);  