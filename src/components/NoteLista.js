import React, { Component } from 'react';
import Nota from './Nota';
import Navegation from './Navegation'
import '../styles/NoteLista.css'
import Cookies from 'js-cookie'
import axios from 'axios'


class NoteLista extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        let header = 'Bearer ' + Cookies.get('token')
        console.log("voy a mandar este: ", header)
        const res = await axios.get('http://localhost:4000/api/notes', {
            data: JSON.stringify(''),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': header
            }
        })
        this.setState({notes: res.data})
        console.log(this.state.notes)
    }

    render() {
        return (
            <div className='contenedor'>
                <Navegation />
                <div className='contenedor_notas'>
                    <Nota title="" content="" edit= {false} />
                    {
                        this.state.notes.map( nota => 
                            <Nota key={nota._id} 
                                title= {nota.title} 
                                content= {nota.content} 
                                key_note={nota._id}
                                edit={false}
                                />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NoteLista;