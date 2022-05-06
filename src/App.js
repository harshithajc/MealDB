import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import NewHome from './components/Body/NewHome';
import HomePage from './components/Body/HomePage';
import Reci from './components/Body/Reci';
import Random from './components/Body/Random';


function App() {
  return (
        <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/newhome' element={<NewHome/>}/>
        <Route path='/reci' element={<Reci/>}/>
        <Route path='/random' element={<Random/>}/>

        </Routes>
      </Router>
    </div>
     

    
  );
}

export default App;
