import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import HomeCarsouel from './Component/HomeCarsouel';
import ImgCard from './Component/ImgCard';
import { useEffect, useState } from 'react';
//import data from './Component/data';



function App() {
  const [data, Setdata] = useState([]);

  useEffect(()=>{
    const fetchdata = async ()=>{
      try{
        const responce = await fetch ("https://fakestoreapi.com/products")

        if(!responce.ok){
            throw new Error("Network Responce Failed")
        }
        const d = await responce.json();
        console.log(d)
        Setdata(d);

      }
      catch(error){
        console.log("Error occured", error)
      }
    }
    fetchdata();

  });


  return (
    <div>
    <NavBar/>
    <HomeCarsouel/>

    <div className='img1'>
      {
        data.map((obj)=>{
          return (
            <div key={obj.id}>
            <ImgCard  title={obj.title} desc={obj.desc} imgUrl={obj.image}/>
            </div>
          )
        })
      }
      </div>
      
      
    
     </div>
     
     

   
  
    
      );
}

export default App;
