import '../style/Nav.css';
import { MdOutlineDarkMode } from "react-icons/md";

function Nav({ toggleDarkMode }) {
  return (
    <header className='container-fluid justify-content-between'>
        <div className='tittle-navbar'>
            <img src="https://cdn-icons-png.flaticon.com/512/412/412785.png" alt="icon" />
            <h1 className='tittle-primary'>
                LibrePelis
            </h1>
        </div>
        <label htmlFor="colormode" className="colormode">
          <input className='d-none' id="colormode" type="checkbox" value="active" onChange={toggleDarkMode}/>
          <MdOutlineDarkMode size={20}/>
        </label>   
    </header>
  );
}
export { Nav };