import React from 'react';
import '../styles/Navegation.css';
import { Link } from 'react-router-dom';

function Navegation() {

  const cerrarSesion = () =>{
    console.log('cerrar')
    window.location.href='./'
  }

  return (
    <div className='contenedor_nav'>
      <nav>
        <div className='boton'>
          <Link className='link' to='/noteLista'>
            Inicio
          </Link>
        </div>
        <div className='boton'>
          <Link className='link' to='/ajustes'>
            Ajustes
          </Link>
        </div>
        <div className='boton' onClick={cerrarSesion}>
          Cerrar Sesión
        </div>
      </nav>
    </div>
  );
}

export default Navegation;