import { useState } from 'react'
import reactLogo from './assets/logo/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Bodypart from './Bodypart/Bodypart';
import Introduce from './Introduce/Introduce';
import Allpet from './Allpet/Allpet';
import Footer from './Footer/Footer';
function App() {
  
  return (
    <div className="App">      
      <Navbar/> 
      <Bodypart/> 
      <Introduce/>
      <Allpet/>
      <Footer/> 
    </div>
  );
}

export default App;
