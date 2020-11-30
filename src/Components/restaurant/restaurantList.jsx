import React, { useEffect} from 'react';
import {fetchRestaurantBeginAsync} from '../JS/actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Star from './star'
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
        <div className="part1"> 
        {       restaurants.map(el=><div className="restoList" key={el.id}>
                <img className="imgResto" src={el.image} alt="image"/>
                <div style={{display:"block"}} >
                <h4>{el.name}</h4>
                <p>{el.desc}</p>
                {/* <p><Star/></p> */}
                </div>
                <button className="btn1" onClick={()=>props.history.push("/menuList")} >Voir menu</button>
            </div>)
        }
        </div>
    )};
export default withRouter (RestoList);