import '../style/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container className='footer'>
        <Row>
            <Col xs={3} md={3} lg={3} >
                <Link to="https://github.com/LimonsitOwO" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className='icon' size={50} style={{ fill: 'var(--font-light)'}}/>
                </Link>
            </Col>
            <Col xs={3} md={3} lg={3}>
                <Link to="https://www.linkedin.com/in/luis-carlos-ballen-913138299/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='icon' size={50} style={{ fill: 'var(--font-light)'}}/>
                </Link>
            </Col>
            <Col xs={3} md={3} lg={3}>
                <Link to={"mailto:luislm080304@gmail.com"} target="_blank" rel="noopener noreferrer">
                    <BiLogoGmail className='icon' size={50} style={{ fill: 'var(--font-light)'}}/>
                </Link>
            </Col>
            <Col xs={3} md={3} lg={3}>
                <Link to="https://wa.me/+573208249935" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='icon' size={50} style={{ fill: 'var(--font-light)'}}/>
                </Link>
            </Col>
        </Row>
    </Container>
  );
}
export { Footer };