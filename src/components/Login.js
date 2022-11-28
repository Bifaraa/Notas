import React, { useState } from 'react'
import '../styles/Login.css'
import axios from 'axios'
import Cookies from 'js-cookie'

function Login() {

  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const onChangeCorreoElectronico = e => {
    setUsuario(e.target.value)
  }

  const onChangePassword = e => {
    setContraseña(e.target.value)
  }

  const onClickRegistro = () => {
    window.location.href = './registro'
  }

  const enviar = async () => {
    try{
      const respuesta = await axios.post('http://localhost:4000/api/users/sing', {
        "username": usuario,
        "password": contraseña
      })
      const data = respuesta.data
      console.log(data.username)
      Cookies.set('token', data.token, {path: '/'})
      Cookies.set('username', data.username, {path: '/'})
      window.location.href='./noteLista'
    }catch(e){
      console.log('usuario o contraseña incorrecta')
    }
  }

  return (
    <form className='formulario_login'>
      <div className='section_form div_uno'>
        <label className='label_login labbel_login__correo' for="correo">
          Nombre
        </label>
        <input className='input_login input_login__correo ' 
          id="correo"
          name="correo" 
          type="text" 
          placeholder='Correo@electronico.com' 
          onChange = {onChangeCorreoElectronico}
          />
      </div>
      <div className='section_form div_dos'>
        <label className="label_login label_login__contraseña" for="contraseña">
          Contraseña
        </label>
        <input className='input_login input_login__contraseña'
          id="contraseña" 
          name="contraseña"
          type="password" 
          placeholder='*******'
          onChange = {onChangePassword} />
      </div>
      <div className='boton_ingresar' onClick = {enviar}>
        <span>
          Ingresar
        </span>
      </div>
      <div className='boton_registrar' onClick={onClickRegistro}>
        <span>
          Registrar
        </span>
      </div>
    </form>

  );
}

export default Login;