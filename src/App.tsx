import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home_page from './Pages/Home_page/Home_page';
import Login_page from './Pages/Login_page/Login_page';
import Notfound_404 from './Pages/Notfound_404.tsx/Notfound_404';
import Signup_page from './Pages/Signup_page/Signup_page';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='*' element={<Notfound_404/>}/>
        <Route path='/' element={<Login_page/>}/>
        <Route path='signup' element={<Signup_page/>}/>
        <Route path='home' element={<Home_page/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
