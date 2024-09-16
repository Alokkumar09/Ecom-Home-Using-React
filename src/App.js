import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import './App.css';

import { Route,Routes } from 'react-router-dom';
import Home from './home/Home';
import Blog from './blog/Blog';
import NavItems from './components/NavItems';
function App() {
  return (
    <div className="App">
      <NavItems/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
