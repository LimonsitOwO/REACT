import '../style/Info.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/peliculas/'

const InfoPage = () => {
    const [url, setUrl] = useState('')
    const [nombrep, setNombrep] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const {id} = useParams()

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
              <Row className='justify-content-center info'>
                <Col xs={12} md={6} lg={9} className='info-paragraph'>
                    <h1 className='info-tittle'>
                        {nombrep}
                    </h1>
                    <div className='info-text'>
                        <h3>
                            Sinopsis
                        </h3>
                        <p>
                            {sinopsis}
                        </p>
                        <h4>
                            Plataformas
                        </h4>
                        <p>
                            {plataforma}
                        </p>
                    </div>
                </Col>
                <Col xs={6} md={6} lg={3} className='info-img'>
                    <img src={`${url}`} alt='' />
                </Col>
              </Row>
            </Container>
        </div>
    );  
}

export { InfoPage };