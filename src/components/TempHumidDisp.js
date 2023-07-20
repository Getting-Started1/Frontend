import React from "react";
import { BsThermometerSun} from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import CountUp from 'react-countup';
import Moment from 'moment';



function TempHumidDisp({ temperature, humidity, time }) {

  return (
    <div className="dashboard_container">
    <div class="temphumid" >
      
      <div className="container-fluid">
      <h2>
        <h1>Current Temperature:</h1> 
        <BsThermometerSun/><div class="output">
          <div className="count"><CountUp decimals={1} end={temperature} />°C</div>
          {/* <div className="count_date">{Moment().utc(time).format("MMMM do, yyyy H:mma")}</div> */}
          <div className="count_date">{time}</div>
        
          
        
          </div>
      </h2>

      </div>



      <div className="container-fluid">
      <h2>
      {/* <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">Current Humidity:</Gradient> */}
      <h1>Current Humidity:</h1> 
       <WiHumidity/><div class="output">
       <div className="count"><CountUp decimals={1} end={humidity} />%</div>
       {/* <div className="count_date">{Moment().utc(time).format("MMMM do, yyyy H:mma")}</div> */}
       <div className="count_date">{time}</div>
       
    
    
        
        </div>
      </h2>
      
    
        </div>
     
    </div>
    </div>
  );
}

export default TempHumidDisp;
