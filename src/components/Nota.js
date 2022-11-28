import React, { useState } from "react";
import '../styles/Nota.css'
import axios from 'axios'
import Cookies from 'js-cookie'

function Nota({ title, content, key_note, edit }) {

  const [titulo, setTitle] = useState('')
  const [contenido, setContent] = useState('')

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeContent = e => {
    setContent(e.target.value)
  }

  const borrarNota = async e => {
    e.preventDefault();
    const respuesta = await axios.delete(`http://localhost:4000/api/notes/${key_note}`)
    window.location.href = './noteLista'
    console.log(respuesta)
  }

  const crearNota = async e => {
    e.preventDefault();
    const data = {
      "title": titulo,
      "content": contenido
    }
    let fullToken = 'Bearer ' + Cookies.get('token')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': fullToken
      }
    }

    const res = await axios.post('http://localhost:4000/api/notes',data, config)
    console.log(res)
    window.location.href='./noteLista'
  }

  return (
    <div className='div_note'>
      <form>
        <div className='titulo_note'>
          <h3>
            {title}
          </h3>
          <input
            className={`input_titulo ${title === "" ? 'display_inline-block' : 'display_none'}`}
            type='text'
            placeholder='Titulo'
            onChange={onChangeTitle}
          />
        </div>
        <div className='cuerpo_note'>
          <p>
            {content}
          </p>
          <input
            className={`input_cuerpo ${title === "" ? 'display_inline-block' : 'display_none'}`}
            type='text'
            placeholder='Escriba...'
            onChange={onChangeContent}
          />
        </div>
        <button
          className={`crear_note ${title === "" ? 'display_inline-block' : 'display_none'}`}
            onClick={crearNota}>
          Crear Nota
        </button>
        <button className={`crear_note ${edit ? 'display_none': 'display_inline-block'}`}
          onClick={borrarNota}>
          Borrar
        </button>
        <button 
          className={`crear_note ${edit ? 'display_inline-block': 'display_none'}`} 
          >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default Nota;