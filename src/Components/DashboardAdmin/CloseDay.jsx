import React,{useState} from 'react';

const CloseDay = ( ) => {
    const [firstCloseDay, setFirstCloseDay]=useState(null);
    const [lastCloseDay, setLastCloseDay]=useState(null); 

    return (
        <div>
            <div className="day">
              <select onChange={(e)=>setFirstCloseDay(e.target.value)}>
                  <option value="" >From...</option>
              <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                  <option value="null">Null</option>
              </select>
              <select style={{marginLeft:"0.5vw"}} onChange={(e)=>setLastCloseDay(e.target.value)}>
                  <option value=""  >To...</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                  <option value="null">Null</option>
              </select>
              {/* <div  className="btn"  onClick={ addCalender}>
            <i className="fas fa-check-double"></i>
            </div> */}
            </div>
        </div>
    )
}

export default CloseDay
