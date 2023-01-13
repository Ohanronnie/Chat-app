import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// Bootstrap CSS
import App from './App';
export default function Note(){
	return (
	<BrowserRouter>
	    <Routes>
	        <Route path="/">
	        <Route index element={<Register />}/>
	      
	        <Route path="register/login" element={<Login />}/>
	              <Route path="register/signup" element={<Register />}/>
	      
	            
	            </Route>
	    </Routes>
	 </BrowserRouter>
	 )
}
ReactDOM.render(
  <React.StrictMode>
    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);
