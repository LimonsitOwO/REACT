import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav.jsx';
import { Card } from './components/Card.jsx';
import { CreateCard } from './components/Create.jsx';
import { EditCard } from './components/Edit.jsx';
import { InfoPage } from './components/Info.jsx';
import { Footer } from './components/Footer.jsx';

const Home = () => {
  return( 
    <div>
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
      <div className='body'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/info/:id' element={<Info />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
        <h5>
          Limonsito
        </h5>
      </div>
    </div>
  );
}
export default App;