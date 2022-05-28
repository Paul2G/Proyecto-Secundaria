import React, { Component } from 'react';
import { HashRouter,Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

//Paginas
import Inicio from './components/pages/Inicio.js';
import Map from './components/pages/Map.js'
  //Escuela
import Directorio from "./components/pages/escuela/Directorio"
import Modelo from "./components/pages/escuela/Modelo.js"
import Organizacion from "./components/pages/escuela/Organizacion"
import Ubicacion from "./components/pages/escuela/Ubicacion"

  //Alumnos
import CorreoIns from './components/pages/alumnos/CorreoIns';
import Recursos from './components/pages/alumnos/Recursos';
import Reglamento from './components/pages/alumnos/Reglamento';

  //Padres
import Uniforme from './components/pages/padres/Uniforme';
import Requisitos from './components/pages/padres/Requisitos';
import Calificaciones from './components/pages/padres/Calificaciones';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    }

    this.handleSession = this.handleSession.bind(this);
  }

  handleSession (loginState) {
    this.setState({login: loginState});
  }

  componentDidMount(){
    fetch('http://localhost/backend/checksession.php', {
			method: 'POST'
		})
		.then(res => res.json(), e => {
			console.log("Obtención fallida", e);
		})
		.then(data => {
      console.log(data);
			this.setState({ login: data.session });
		});
  }
  
  render () {
    return (
      <div>
          <HashRouter>
            <Navbar  sessionUpdate={this.handleSession} loginState={this.state.login}/>
            <div className='xd-content container-xl d-flex m-9 pe-xl-4 py-5 row mx-auto box-shadow'>
              <main className='order-xl-2 col-xl-9 p-xl-0'>
                <Routes>
                  <Route exact path='/' element={<Inicio sessionUpdate={this.handleSession} loginState={this.state.login}/>} />

                  <Route exact path='/escuela/modelo' element={<Modelo/>} />
                  <Route exact path='/escuela/ubicacion' element={<Ubicacion/>} />
                  <Route exact path='/escuela/organizacion' element={<Organizacion sessionUpdate={this.handleSession} loginState={this.state.login}/>} />
                  <Route exact path='/escuela/directorio' element={<Directorio/>} />

                  <Route exact path='/alumnos/reglamento' element={<Reglamento/>} />
                  <Route exact path='/alumnos/recursos' element={<Recursos/>} />
                  <Route exact path='/alumnos/correo' element={<CorreoIns/>} />

                  <Route exact path='/padres/calificaciones' element={<Calificaciones/>} />
                  <Route exact path='/padres/requisitos' element={<Requisitos/>} />
                  <Route exact path='/padres/uniforme' element={<Uniforme/>} />

                  <Route exact path='/mapa' element={<Map/>} />
                </Routes>
              </main>
              <aside className='order-xl-1 col-xl-3 m-0'>
                <Sidebar />
              </aside>
            </div>

            <Footer/>
          </HashRouter>
      </div>
    );
  }
}

export default App;
