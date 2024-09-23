import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from '../Pages/Principal'
import Login from '../Pages/Login';
import Servicios from '../Pages/Servicios';
import Contactos from '../Pages/Contactos';
import Mapa from '../Pages/Mapa';
import Administracion from '../Pages/Administracion';
import ProtectedRoute from './ProtectedRoute';
import Tienda from '../Pages/Tienda';


function Routing() {
  return (
    <Router>
    <Routes>
  
      <Route path="/" element={<Principal />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/Contactos" element={<Contactos />} />
      <Route path="/Mapa" element={<Mapa />} />
      <Route path="/Administracion" element={<ProtectedRoute><Administracion /></ProtectedRoute>}/>

      

      
      <Route path="/Tienda" element={<Tienda />} />
      

    
     
    
    </Routes>
   </Router>
  )
}

export default Routing;