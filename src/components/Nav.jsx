import '../style/Nav.css';
import { BiSolidCameraMovie } from "react-icons/bi";

function Nav() {
  return (
    <header className='container-fluid justify-content-between'>
        <div className='tittle-navbar'>
            <h1 className='tittle-primary'>
                <BiSolidCameraMovie size={50} className='me-3'/>
                LibrePelis
            </h1>
        </div>
    </header>
  );
}
export { Nav };