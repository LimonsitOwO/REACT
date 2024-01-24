import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const URI = 'http://localhost:8000/peliculas/'

const EditCard = () => {
    const [url, setUrl] = useState('')
    const [nombrep, setNombrep] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [generouno, setGenerouno] = useState('')
    const [generodos, setGenerodos] = useState('')
    const [generotres, setGenerotres] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {url: url,
                                    nombrep: nombrep,
                                    sinopsis: sinopsis,
                                    plataforma: plataforma,
                                    generouno: generouno,
                                    generodos: generodos,
                                    generotres: generotres
                                })
        navigate('/')
    }

    useEffect( () =>{
        getPeliculaById()
    }, [])

    const getPeliculaById = async () =>{
        const res = await axios.get(URI + id)
        setUrl(res.data.url)
        setNombrep(res.data.nombrep)
        setSinopsis(res.data.sinopsis)
        setPlataforma(res.data.plataforma)
    }

    return (
        <div className='container-fluid main'>
            <Container className='cont'>
              <Row className='justify-content-center'>
                <Link to={`/`}>
                    <div className='button'>
                        <IoMdArrowRoundBack style={{ fill: 'var(--font-light)'}}/>
                    </div>
                </Link>
                <Col>
                    <h3 className='form-tittle'>
                        EDITAR LA INFORMACION DE LA PELICULA
                    </h3>
                    <form onSubmit={update}>
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
                            onChange={ (e) => setNombrep(e.target.value)} 
                            type="text" 
                            className='form-control'/>
                        </div>
                        <div className='mb-3 form-create'>
                            <label className='form-label'>Otro genero de la pelicula</label>
                            <input value={generodos} 
                            onChange={ (e) => setSinopsis(e.target.value)} 
                            type="text" 
                            className='form-control'/>
                        </div>
                        <div className='mb-3 form-create'>
                            <label className='form-label'>Otro genero de la pelicula</label>
                            <input value={generotres} 
                            onChange={ (e) => setPlataforma(e.target.value)} 
                            type="text" 
                            className='form-control'/>
                        </div>
                        <div className='cont-btn'>
                            <button type='submit' className='submit'>
                                Actualizar
                            </button>
                        </div>
                    </form>
                </Col>
              </Row>
            </Container>
        </div>
    );  
}

export { EditCard };