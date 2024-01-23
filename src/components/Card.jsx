import '../style/Card.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/peliculas/'

const Card = () => {
    const [peliculas, setPelicula] = useState([])
    useEffect ( () => {
        getPeliculas()
    }, [])

    const getPeliculas = async () => {
        const res = await axios.get(URI)
        setPelicula(res.data)
    }

    const deletePelicula = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPeliculas()
    }

    return (
        <div className='container-fluid main'>
            <Container className='cont'>
              <Row className='justify-content-center'>
                { peliculas.map( (pelicula) => (
                    <div xs={6} md={3} lg={2} className='cardp' >
                        <Link to={`/info/${pelicula.id}`} className='cardp-cont' key={pelicula.id} >
                            <div className='cardp-img'>
                                <img src={pelicula.url} alt="" />
                            </div>
                            <h5 className='cardp-tittle'>
                              {pelicula.nombrep}
                            </h5>
                        </Link>
                        <Link to={`/edit/${pelicula.id}`} className='cardp-cont'>
                            <button className='cardp-btn edit'>
                                <MdEdit style={{ fill:'var(--font-light)' }} />
                            </button>
                        </Link>
                        <button onClick={ () => deletePelicula(pelicula.id) } className='cardp-btn delete'>
                            <MdDelete style={{ fill:'var(--font-light)' }} />
                        </button>
                    </div>
                ))}
                <div className='cardp'>
                    <Link to={'/Create'} className='cardp-cont' xs={6} md={3} lg={2}>
                        <div className='cardp-img add' style={{ height: '270px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IoIosAdd size={100} />
                        </div>
                        <h5 className='cardp-tittle'>
                            Crear
                        </h5>
                    </Link>
                </div>
              </Row>
            </Container>
        </div>
    );  
}

export { Card };