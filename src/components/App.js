import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/scss/styles.scss';

import Home from './Home';
import Sponsors from './Sponsors';
import Contact from './Contact';
import Roster from './Roster';
import Shop from './Shop';
import AdminLogin from './adminPanel/AdminLogin';
import AdminPanel from './adminPanel/AdminPanel';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/roster' element={<Roster/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/sponsors' element={<Sponsors/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/panel' element={<AdminPanel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
