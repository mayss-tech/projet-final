import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import Rate from '../restaurant/rate';
const LastComponent = () => {
    const avis= useSelector((state) => state.AvisReducer.avis);
    const user = useSelector((state) => state.userReducer.user);
    const [affNameResto,setAffNameResto]=useState("")
    useEffect(() => {
        setAffNameResto(JSON.parse(localStorage.getItem('menuListX')).name)
       }, []);
    return (
        <div style={{marginTop:"10%"}}>
            <h3>Votre avis</h3>
          <div style={{display:"flex"}}>
          { avis.map(el => <div key={el.id}>
            <p>{el.comment} </p>
            </div>) } 
            <Rate/>
          </div>
            <div style={{display:"flex"}}>
            <h5>{user.name},  </h5>
            <p>{affNameResto} </p>
            </div>
        </div>
    )
}

export default LastComponent
