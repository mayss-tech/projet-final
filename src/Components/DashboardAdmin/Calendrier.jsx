import React,{useState} from 'react'
import Time from './Time';

const Calendrier = () => {
    const [firstOpenDay, setFirstOpenDay]=useState(null);
    const [lastOpenDay, setLastOpenDay]=useState(null);   
  
    return (
        <div style={{marginLeft:"35vw",marginTop:"10vh"}}>
            <div className="day">
              <select onChange={(e)=>setFirstOpenDay(e.target.value)}>
                  <option value="" >From...</option>
              <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
              </select>
              <select style={{marginLeft:"0.5vw"}} onChange={(e)=>setLastOpenDay(e.target.value)}>
                  <option value=""  >To...</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
              </select>
              
            </div>
       
            <Time  firstDay={firstOpenDay} lastDay={lastOpenDay}/>
           
{/* 
            <div>
                <p>first Day: {firstDay}</p> 
                <p>last Day: {lastDay}</p> 

            </div> */}
            
        </div>
       
    )}

export default Calendrier
