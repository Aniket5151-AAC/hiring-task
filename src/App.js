
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Layout/Navbar';
import Login from './components/Pages/Login.js';
import Register from './components/Pages/Register.js';
import Product1 from './components/Pages/Product1.js';





function App() {
  return (
    <div className="App">

<div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/product' element={<Product1/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
        {/* Wildcard route Character- */}
           </Routes>
      </BrowserRouter>
    </div>

    </div>
  );
}

export default App;
