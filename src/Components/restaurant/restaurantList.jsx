import React, { useEffect} from 'react';
import {fetchRestaurantBeginAsync} from '../JS/actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Rate from './rate';
const RestoList = (props) => {
    const dispatch = useDispatch();
    const restaurants= useSelector((state) => state.restoReducer.restaurants);
    const loading = useSelector((state) => state.restoReducer.loading);
    const error= useSelector((state) => state.restoReducer.error);
    useEffect(() => {
    dispatch(fetchRestaurantBeginAsync())
    }, []);

    return  loading ? ( 
        <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) :error? ( <h1 style={{marginTop:'15%', marginLeft:'40%'}}>404 Not Found </h1>
    ) : ( 
        <div> 
        {       restaurants.map(el=><div className="restoList" key={el.id}>
                <img className="imgResto" src={el.image} alt="image"/>
                <div  className="desc">
                <h4>{el.name}</h4>
                <p>{el.desc}</p>
                </div>
                <Rate rating={el.rate}/>
                <div ><button  className="btn_resto"
                onClick={()=>{props.history.push("/menuList/"+el.menu[0])}} >
                Voir menu</button></div>
            </div>)
        }
        </div>
    )};
export default withRouter (RestoList);