import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import HomeCarsouel from './Component/HomeCarsouel';
import ImgCard from './Component/ImgCard';
function App() {
  return (
    <div>
    < NavBar/>
    <HomeCarsouel/>
     <div className="img">
     <ImgCard />
     <ImgCard />
     <ImgCard/>
     </div>
   
    </div>
    
      );
}

export default App;
