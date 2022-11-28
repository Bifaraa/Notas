import React from 'react';
import Nota from './Nota'
import Navegation from './Navegation'
import '../styles/NoteLista.css'

function AjustesNote({ titulo, contenido, llave_nota, editar }) {

    return (
        <div className='contenedor'>
            <Navegation />
            <div className='contenedor_notas'>
                <Nota title="" content="" editar={true} />
                <Nota title={titulo}
                    content={contenido}
                    key_note={llave_nota}
                    edit={true} />
            </div>
        </div>
    )
}

export default AjustesNote