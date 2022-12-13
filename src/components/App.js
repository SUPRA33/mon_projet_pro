import { BrowserRouter, Route } from 'react-router-dom';
import '../assets/scss/styles.scss';

import Accueil from './Accueil';
import AdminPannel from './adminPannel/AdminPannel';
import Contact from './Contact';
import Footer from './Footer';
import Header from "./Header";
import ResultList from './ResultList';
import Sponsors from './Sponsors';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Sponsors/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
