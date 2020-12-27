import React,{useState,useEffect} from 'react';
import Bar from '../Bar/Bar';
import Rate from '../restaurant/rate';

const ConfirmOrder = () => {
    const [affNameResto,setAffNameResto]=useState("")
    useEffect(() => {
        setAffNameResto(JSON.parse(localStorage.getItem('menuListX')).name)
       }, []);
    return (
        <div>
            <div>
                <Bar/>
            </div>
            <h3>Merci d'avoir passé commande</h3>
           
            <p>Donnez votre avis au restaurant (service, qualité, rapidité)</p>
            <div style={{display:"flex"}}> <h5>{affNameResto} : </h5> <Rate/></div>
           
            <p>Vos commentaires nous...... </p>
            <input 
            type="text"
            placeholder="Votre commentaire"/>
            <button>+</button>
        </div>
    )
}

export default ConfirmOrder
