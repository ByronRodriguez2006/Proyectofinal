import React, { useState, useEffect } from 'react';
import '../Style/FormLogin.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
//import { postUsers } from '../Services/PostUsers';
import { GetUsers } from '../Services/GetUsers';


function FormLogin() {
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setContraseña] = useState('');


  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  

    useEffect(() => {
      const fetchUsers = async () => {
        const data = await GetUsers();
       
        
        setUsers(data);
   
      };
      fetchUsers();
    }, []);

    console.log(users)

  const cargaCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const cargaContra = (event) => {
    setContraseña(event.target.value);
  };

  const cargar = () => {
    console.log('Correo:', username);
    console.log('Contraseña:', password);

    if (!Correo || !Contraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No llenaste todos los espacios!'
      });
      return;
    }

    for (let index = 0; index < users.length; index++) {
      
    if (users[index].Correo === Correo && users[index].Contraseña === Contraseña) {
      Swal.fire({
        title: 'Ingreso Exitoso!',
        text: 'Bienvenido a la pagina de administracion!',
        icon: 'success'
      });
      navigate('/Administracion');
      localStorage.setItem("Autenticado","true")

    }else{

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Correo o Contraseña invalidos!'
      })

    }
      
    }
  };

  return (
    <div className="login-container">
      <div className="login-box animated">
        <h2 className="login-title">Iniciar Sesión</h2>
        <div className="login-input-container">
          <label className="login-label" htmlFor="username">Correo</label>
          <input
            className="login-input animated-input"
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su Correo"
            value={Correo}
            onChange={cargaCorreo}
            required
          />
        </div>
        <div className="login-input-container">
          <label className="login-label" htmlFor="password">Contraseña</label>
          <input
            className="login-input animated-input"
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={Contraseña}
            onChange={cargaContra}
            required
          />
        </div>

        <button className="login-button animated-button" onClick={cargar}>Iniciar</button>
      </div>
    </div>
  );
}

export default FormLogin;








