import '../style/Nav.css';
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";

function Nav() {
  return (
    <header className='container-fluid justify-content-between'>
        <div className='tittle-navbar'>
            <h2 className='tittle-primary'>
                <BiSolidCameraMovie size={40} className='me-2'/>
                PELICULA
            </h2>
        </div>
    </header>
  );
}
export { Nav };