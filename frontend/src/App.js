import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Adddetail from './components/Adddetail';
import Detail from './components/Detail';
import Updatedetail from './components/Updatedetail';
import Profile from './components/Profile';
import Error from './components/Error'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Detail/>} />
      <Route path='/add' element={<Adddetail/>} />
      <Route path='/update' element={<Error />} />
      <Route path='/update/:id' element={<Updatedetail/>} />
      <Route path='/logout' element={<h1>Logout page</h1>} />
      <Route path='/profile' element={<Profile/>} />
      </Route>
      <Route path='/Signup' element={<h1><Signup/></h1>} />
      <Route path='/login' element ={<h1><Login/></h1>} />
    </Routes>
    </BrowserRouter>  
    <Footer/>
    </div>
  );
}

export default App;
