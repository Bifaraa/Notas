import React, { useState } from 'react';
import '../styles/FormNewUser.css'
import axios from 'axios'

function Registro() {

  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const onChangeCorreoElectronico = e => {
    setUsuario(e.target.value)
  }

  const onChangePassword = e => {
    setContraseña(e.target.value)
  }

  const registar = async e => {
    e.preventDefault();
    const data = {
      "username": usuario,
      "password": contraseña
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('http://localhost:4000/api/users',data, config)
    console.log(res)
    window.location.href='./'
  }

  return (
    <form className='formulario_registro'>
      <legend>
        Registro De Usuario
      </legend>
      <div className='section_form div_registro__uno'>
        <label className='label_registro label_registro__nombre' for="nombre">
          Nombre
        </label>
        <input className='input_registro ipnut_registro__nombre' id="nombre" name="nombre" type="text" placeholder='nombre' onChange={onChangeCorreoElectronico}/>
      </div>
      <div className='section_form div_registro__dos'>
        <label className="label_registro label_registro__contraseña" for="contraseña">
          Contraseña
        </label>
        <input className='input_registro input_registro__contraseña' id="contraseña" name="contraseña" type="password" placeholder='*******' onChange={onChangePassword} />
      </div>
      <div className='section_form div_registro__tres'>
        <label className='label_registro labbel_registro__correo' for="correo">
          Correo Electronico
        </label>
        <input className='input_registro input_registro__correo ' id="correo" name="correo" type="email" placeholder='Correo@electronico.com' />
      </div>
      <div className='boton_registrar' onClick={registar}>
        <span>
          Registrar
        </span>
      </div>
    </form>

  );
}

export default Registro;