import '../style/Card.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const URI = 'https://vd-node.vercel.app/peliculas/'

const Card = () => {
    const [peliculas, setPelicula] = useState([])
    const [search, setSearch] = useState("")
    const [selectedGeneros, setSelectedGeneros] = useState([])
    const [allGeneros, setAllGeneros] = useState([])
    const [showBtn, setShowBtn] = useState(null)

    useEffect(() => {
        getPeliculas();
    }, []);
    useEffect(() => {
      const uniqueGeneros = [...new Set(
          peliculas.flatMap(pelicula => [
              pelicula.generouno,
              pelicula.generodos,
              pelicula.generotres
          ]).filter(genero => genero !== null && genero !== ' ')
      )];
      setAllGeneros(uniqueGeneros);
    }, [peliculas]);

    const getPeliculas = async () => {
        const res = await axios.get(URI)
        setPelicula(res.data)
    }
    
    const deletePelicula = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPeliculas()
    }

    const textChange = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const searcher = (e) => {
      setSearch(e.target.value);
    };

    const handleMouseOver = (id) => {
      setShowBtn(id);
    }
    
    const handleMouseOut = () => {
      setShowBtn(null);
    }
    
    const toggleGenero = (e) => {
      setSelectedGeneros((prevGeneros) => {
        if (prevGeneros.includes(e.target.value)) {
          return prevGeneros.filter((selectedGenero) => selectedGenero !== e.target.value);
        } else {
          return [...prevGeneros, e.target.value];
        }
      });
    };
    
    const filterMovie = peliculas.filter((srch) => (
      (!search || textChange(srch.nombrep.toLowerCase()).includes(textChange(search.toLowerCase())))
      && (selectedGeneros.length === 0 || selectedGeneros.some(genero => srch.generouno === genero || srch.generodos === genero || srch.generotres === genero))
    ));

    return (
      <div className='container-fluid main'>
          <div className='container-fluid main-filter'>
              <div className='searchbar'>
                <input type="text" placeholder='Buscar' id='search' value={search} onChange={searcher} />
                <label className='icon' for='search'>
                    <FaSearch/>
                </label>
              </div>
              <div className='filter'>
                {allGeneros
                .filter((genero) => genero.trim() !== '') 
                .map((genero) => (
                  <div className='check' key={genero}>
                    <label htmlFor={`${genero}`} className={`checkbox-label ${selectedGeneros.includes(genero) ? 'active' : ''}`}>
                      <input className='me-2 checkbox-hidden' id={`${genero}`} type="checkbox" value={`${genero}`} onChange={toggleGenero} />
                      {genero.toUpperCase()}
                    </label>           
                  </div>
                ))}
              </div>
          </div>
          <Container className='cont'>
            <Row className='justify-content-center'>
              {filterMovie.map( (pelicula) => (
                <div xs={6} md={3} lg={2} className='cardp' key={pelicula.id} onMouseOver={() => handleMouseOver(pelicula.id)} onMouseOut={handleMouseOut}>
                  <Link to={`/info/${pelicula.id}`} className='cardp-cont'>
                    <div className='cardp-cont'>
                      <div className='cardp-img'>
                          <img src={pelicula.url} alt="" />
                      </div>
                      <h5 className='cardp-tittle'>
                        {pelicula.nombrep}
                      </h5>
                    </div>
                  </Link>
                  <Link to={`/edit/${pelicula.id}`} className={`cardp-btn edit ${showBtn === pelicula.id ? '' : 'hidden'}`} >
                    <MdEdit />
                  </Link>
                  <button onClick={() => deletePelicula(pelicula.id)} className={`cardp-btn delete ${showBtn === pelicula.id ? '' : 'hidden'}`}>
                    <MdDelete />
                  </button>
                </div>
              ))}
              <div className='cardp card-add'>
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