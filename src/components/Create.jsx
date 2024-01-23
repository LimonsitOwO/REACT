import '../style/Create.css';
import axios from 'axios';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/peliculas/'

const CreateCard = () => {
    const [url, setUrl] = useState('')
    const [nombrep, setNombrep] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const navigate = useNavigate()

    const create = async (e) => {
        e.preventDefault()
        await axios.post(URI, {url: url,
                               nombrep: nombrep,
                               sinopsis: sinopsis,
                               plataforma: plataforma})
        navigate('/')
    }

    return (
        <div className='container-fluid main'>
            <Container className='cont'>
              <Row className='justify-content-center'>
                <h3 className='form-tittle'>
                    CREAR INFORMACION DE LA PELICULA
                </h3>
                <form onSubmit={create}>
                    <div className='mb-3 form-create'>
                        <label className='form-label'>URL dela portada de la pelicula</label>
                        <input value={url} 
                        onChange={ (e) => setUrl(e.target.value)} 
                        type="text" 
                        className='form-control'/>
                    </div>
                    <div className='mb-3 form-create'>
                        <label className='form-label'>Nombre de la pelicula</label>
                        <input value={nombrep} 
                        onChange={ (e) => setNombrep(e.target.value)} 
                        type="text" 
                        className='form-control'/>
                    </div>
                    <div className='mb-3 form-create'>
                        <label className='form-label'>Sinopsis de la pelicula</label>
                        <input value={sinopsis} 
                        onChange={ (e) => setSinopsis(e.target.value)} 
                        type="text" 
                        className='form-control'/>
                    </div>
                    <div className='mb-3 form-create'>
                        <label className='form-label'>Plataforma en la que se puede visualizar</label>
                        <input value={plataforma} 
                        onChange={ (e) => setPlataforma(e.target.value)} 
                        type="text" 
                        className='form-control'/>
                    </div>
                    <div className='cont-btn'>
                        <button type='submit' className='submit'>
                            Crear
                        </button>
                    </div>
                </form>
              </Row>
            </Container>
        </div>
    );  
}

export { CreateCard };