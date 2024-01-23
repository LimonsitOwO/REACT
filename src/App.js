import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav.jsx';
import { Card } from './components/Card.jsx';
import { CreateCard } from './components/Create.jsx';
import { EditCard } from './components/Edit.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { InfoPage } from './components/Info.jsx';

const Home = () => {
  return( 
    <div>
      <SearchBar />
      <Card />
    </div>
  ) 
}

const Create = () => {
  return(
    <div>
      <CreateCard />
    </div>
  )
}

const Edit = () => {
  return(
    <div>
      <EditCard />
    </div>
  )
}

const Info= () => {
  return(
    <div>
      <InfoPage />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </div>
  );
}
export default App;