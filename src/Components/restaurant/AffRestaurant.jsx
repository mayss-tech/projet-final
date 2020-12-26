import React from 'react';
import { withRouter } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { nextStep } from '../JS/actions/ProgressBar';
const AffRestaurant = (props) => {
    const restaurants = useSelector((state) => state.restoReducer.restaurants);
    
     const dispatch = useDispatch()
    return (
        <div>
            {restaurants
        
        .map((el) => (
          <div className="restoList" key={el.id}>
            <img className="imgResto" src={el.image} alt="imgRestaurant" />
            <div className="desc">
              <h4>{el.name}</h4>
              <p>{el.desc}</p>
            </div>
            <div>
              <button
                className="btn_resto"
                onClick={() => {dispatch(nextStep(20))
                  props.history.push("/menuList/" + el._id);
             
                }}
              >
                Voir menu
              </button>
            </div>
          </div>
        ))}
        </div>
    )
}

export default withRouter(AffRestaurant);
