import React, { useState } from 'react';
import '../styles/Ajustes.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'

function Ajustes() {

    const [newContraseña, setNewContraseña] = useState('')
    const [contraseña, setContraseña] = useState('')

    const onChangeNewContraseña = e => {
        setNewContraseña(e.target.value)
    }

    const onChangeContraseña = e => {
        setContraseña(e.target.value)
    }

    const actualizarContraseña = async () => {
        let header = 'Bearer ' + Cookies.get('token')
        const data = {
        "password": contraseña,
        "newPassword": newContraseña
        }   
        const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': header
            }
        }
    const res = await axios.put('http://localhost:4000/api/users',data, config)
    console.log(res)
    }

    return (
        <section className='ajustes'>
            <div className='boton_home'>
                <Link className="link" to='/noteLista'>
                    Volver A Pagina Principal
                </Link>
            </div>
            <form className='formulario'>
                <legend>
                    Actualizar Información
                </legend>
                <div className='section_form div_uno'>
                    <label for="nombre">
                        Antigua Contraseña
                    </label>
                    <input id="nombre" 
                        name="nombre" 
                        type="password" 
                        placeholder='********'
                        onChange={onChangeContraseña} />

                </div>
                <div className='section_form div_dos'>
                    <label for="contraseña">
                        Nueva Contraseña
                    </label>
                    <input id="contraseña" 
                        name="contraseña" 
                        type="password" 
                        placeholder='*******' 
                        onChange={onChangeNewContraseña}
                        />
                </div>

                <div className='boton_guardar__cambios' onClick={actualizarContraseña}>
                    <span>
                        Guardar Cambios
                    </span>
                </div>
                <div className='boton_guardar__cambios guardar_todos_los_cambios' onClick={actualizarContraseña}>
                    <span>
                        Guardar Cambios
                    </span>
                </div>
            </form>
        </section>
    );
}

export default Ajustes;