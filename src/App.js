import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import ProductDetails from './Details/ProductDetails';
import Mobiles from './Pages/Mobiles';
import Laptop from './Pages/Laptop';
import Earbuds from './Pages/Earbuds';
import Tvs from './Pages/Tvs';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/mobiles' element={<Mobiles/>}/>
      <Route path='/mobiles/:id' element={<ProductDetails/>}/>
      <Route path='/laptops' element={<Laptop/>}/>
      <Route path='/laptops/:id' element={<ProductDetails/>}/>
      <Route path='/earbuds' element={<Earbuds/>}/>
      <Route path='/earbuds/:id' element={<ProductDetails/>}/>
      <Route path='/tvs' element={<Tvs/>}/>
      <Route path='/tvs/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
