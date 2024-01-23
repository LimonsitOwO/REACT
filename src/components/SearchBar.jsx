import '../style/SearchBar.css';
import { FaSearch } from "react-icons/fa";



function SearchBar() {
  return (
    <div className='searchbar'>
        <input type="text" placeholder='Buscar' id="searchbar" />
        <button>
            <FaSearch style={{ fill: 'var(--background-primary)' }}/>
        </button>
    </div>
  );
}
export { SearchBar };