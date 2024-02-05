import '../style/Info.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const URI = 'https://vd-node.vercel.app/peliculas/';

const InfoPage = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState({
        url: '',
        nombrep: '',
        sinopsis: '',
        plataforma: '',
        generouno: '',
        generodos: '',
        generotres: ''
    });
    
    useEffect(() => {
        getPeliculaById();
    }, [id]);

    const getPeliculaById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setPelicula(res.data);
    };

    const { url, nombrep, sinopsis, plataforma, generouno, generodos, generotres } = pelicula;

    return (
        <div className='container-fluid main'>
            <Container className='cont'>
                <Row className='justify-content-center'>
                    <Col>
                        <Link to={`/`} className='back'>
                            <IoMdArrowRoundBack />
                        </Link>
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
                                Generos
                            </h4>
                            <p>
                                {`${generouno || 'null'}${generodos ? `, ${generodos.toLocaleLowerCase()}` : ''}${generotres ? `, ${generotres.toLocaleLowerCase()}` : ''}`}
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
                        <img src={url} alt='' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { InfoPage };
