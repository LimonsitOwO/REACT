import '../style/Create.css';
import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const URI = 'https://vd-node.vercel.app/peliculas/'

const CreateCard = () => {
    const [url, setUrl] = useState('')
    const [nombrep, setNombrep] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [generouno, setGenerouno] = useState('')
    const [generodos, setGenerodos] = useState('')
    const [generotres, setGenerotres] = useState('')
    const navigate = useNavigate()

    const create = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            url: url,
            nombrep: nombrep,
            sinopsis: sinopsis,
            plataforma: plataforma,
            generouno: generouno,
            generodos: generodos,
            generotres: generotres,
        })
        navigate('/')
    }

    return (
        <div className='container-fluid main'>
            <Container className='cont'>
              <Row className='justify-content-center'>
                <Col>
                    <Link to={`/`} className='back'>
                        <IoMdArrowRoundBack />
                    </Link>
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
                        <div className='mb-3 form-create'>
                            <label className='form-label'>Genero de la pelicula</label>
                            <input value={generouno} 
                            onChange={ (e) => setGenerouno(e.target.value)} 
                            type="text" 
                            className='form-control'/>
                        </div>
                        <div className='mb-3 form-create'>
                            <label className='form-label'>Otro genero de la pelicula</label>
                            <input value={generodos} 
                            onChange={ (e) => setGenerodos(e.target.value)} 
                            type="text" 
                            className='form-control'/>
                        </div>
                        <div className='mb-3 form-create'>
                            <label className='form-label'>Otro genero de la pelicula</label>
                            <input value={generotres} 
                            onChange={ (e) => setGenerotres(e.target.value)} 
                            type="text" 
                            className='form-control'/>
                        </div>
                        <div className='cont-btn'>
                            <button type='submit' className='submit'>
                                Crear
                            </button>
                        </div>
                    </form>
                </Col>
              </Row>
            </Container>
        </div>
    );  
}

export { CreateCard };