import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar.js'
import Footer from './components/Footer';

//Paginas
import Inicio from './components/pages/Inicio.js';
  //Escuela
import Galeria from './components/pages/escuela/Galeria.js';
import Directorio from "./components/pages/escuela/Directorio"
import Modelo from "./components/pages/escuela/Modelo.js"
import Organizacion from "./components/pages/escuela/Organizacion"
import Ubicacion from "./components/pages/escuela/Ubicacion"
  //Docentes
import AvisosDoc from './components/pages/docentes/AvisosDoc';
import Calendario from './components/pages/docentes/Calendario';
import ListaAlumnos from './components/pages/docentes/ListaAlumnos';
import Plan from './components/pages/docentes/Plan';
  //Alumnos
import Asesores from './components/pages/alumnos/Asesores';
import Aulas from './components/pages/alumnos/Aulas';
import CorreoIns from './components/pages/alumnos/CorreoIns';
import CorreoProf from './components/pages/alumnos/CorreoProf';
import Guias from './components/pages/alumnos/Guias';
import Libros from './components/pages/alumnos/Libros';
import Recursos from './components/pages/alumnos/Recursos';
import Reglamento from './components/pages/alumnos/Reglamento';
import Television from './components/pages/alumnos/Television';
  //Padres
import Acuerdo from './components/pages/padres/Acuerdo';
import Uniforme from './components/pages/padres/Uniforme';
import Requisitos from './components/pages/padres/Requisitos';
import Calificaciones from './components/pages/padres/Calificaciones';
import AvisosPad from './components/pages/padres/AvisosPad';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <div className='container-md px-sm-5 py-3 border-start border-end'>
            <Routes>
              <Route exact path='/' element={<Inicio/>} />

              <Route exact path='/escuela/galeria' element={<Galeria/>} />
              <Route exact path='/escuela/modelo' element={<Modelo/>} />
              <Route exact path='/escuela/ubicacion' element={<Ubicacion/>} />
              <Route exact path='/escuela/organizacion' element={<Organizacion/>} />
              <Route exact path='/escuela/directorio' element={<Directorio/>} />

              <Route exact path='/alumnos/reglamento' element={<Reglamento/>} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
