import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import HomeCarsouel from './Component/HomeCarsouel';
import ImgCard from './Component/ImgCard';
import data from './Component/data';



function App() {
  return (
    <div>
    <NavBar/>
    <HomeCarsouel/>

    <div className='img1'>
      {
        data.map((obj)=>{
          return (
            <div key={obj.id}>
            <ImgCard  title={obj.title} desc={obj.desc} imgUrl={obj.imgUrl}/>
            </div>
          )
        })
      }
      </div>
    
     </div>
     
     

   
  
    
      );
}

export default App;
