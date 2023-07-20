import "./App.css";
import React, { useEffect, useState } from "react";
import TempHumidDisp from "./components/TempHumidDisp";
import { BsFillCloudSunFill } from 'react-icons/bs';
import PrimeChart from "./components/PrimeChart";
import FileDownload from "js-file-download";
import Axios from "axios";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  // const [temperature, setTemperature] = useState(0);
  // const [humidity, setHumidity] = useState(0);
  const [thdata, setThdata] = useState();
  const [initial, setInitial] = useState();
  const [unlimitedDataset, setUnlimitedDataset] = useState(initial);
  const [intervalCount, setintervalCount] = useState(10);
 
  
  
// console.log(unlimitedDataset);  
  const handleClick = () => {
    // setInterval(() => { 
    setintervalCount(intervalCount + 5);
    // setlastCount(intervalCount + 5);
  // }, "100");
  };




  useEffect(() => {
    setInterval(() => { 
      fetch("http://localhost:3000/")  
      .then((response) => response.json())
      .then((data) => {
   
        const limitedData = data.slice(data.length -1,data.length)
        setThdata(limitedData)
      }
        ) 
      }, "10000");
     
  },[])



  useEffect(() => {
    setInterval(() => { 
      fetch("http://localhost:3000/")  
      .then((response) => response.json())
      .then((data) => {
        let start = data.length-intervalCount;
        let end = data.length;
        let limitedData = data.slice(start, end);
        setUnlimitedDataset(limitedData)
      
      }
        ) 
      }, "10000");
  },[intervalCount])
  

  useEffect(() => { 
      fetch("http://localhost:3000/")  
      .then((response) => response.json())
      .then((data) => {
        let start = data.length-intervalCount;
        let end = data.length;
        let newlimitedData = data.slice(start, end);
        setInitial(newlimitedData)
      }
        ) 
  },[])


  // useEffect(() => {
  //   const socket = new WebSocket('ws://localhost:3000');
  //   socket.onmessage = (event) => {
  //     const newData = JSON.parse(event.data);
  //     setData([...data, newData]);
  //   };
  // }, []);

const download = (e) => {
  e.preventDefault();
  Axios({
    url: "http://localhost:3000/export",
    method: "GET",
    responseType:"blob"
  }).then((res)=>{
  
    FileDownload(res.data, "sample_data.csv");
  })
}

  return (
    <>
    <div>

      <Navbar/>
      <Header/>
      <div class='title'  id="dashboard">
      <h1> <BsFillCloudSunFill/> Temperature and Humidity Dashboard</h1>
      </div>
      <div className="report_readings">
      {thdata && thdata.map((ln,index) =>{
        return (
      <TempHumidDisp  key={index} temperature={ln.temperature} humidity={ln.humidity} time={ln.time_new} />
      )
      })
      }
      </div>
      </div>
      <div class='title'>
      <h1>Temperature vs Humidity</h1>
      <div>
      {/* {unlimitedData && unlimitedData.map((ln,index) =>{
        return (
      <PrimeChart   key={index} graphData={unlimitedData} />
      )
      })
      } */}
      <PrimeChart myData={unlimitedDataset}/>
      </div>
      </div>
      <div className="buttons_twice">
      <div class="button_int_1">
        <div><button type="button" class="btn btn-primary" onClick={handleClick}>View the last 5 minute interval</button></div>
      </div> 
     <div class="button_int_2">
       
        <div> <button type="button" class="btn btn-primary" onClick={(e)=>download(e)}>Export to CSV</button></div>    
     </div>
     </div>
     <Footer/>
    
   
      </>
      
  );
}

export default App;
