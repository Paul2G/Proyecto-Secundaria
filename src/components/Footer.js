import React, { Component } from 'react'
import '../assets/css/footer.css'
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

export class Footer extends Component {
  render() {
    return (
        <footer className="d-flex flex-wrap justify-content-center bg-light py-4">
            <div className='container-md row d-flex text-start'>
                <div className="col-sm d-flex align-items-up">
                    <Link to="/" className="d-flex align-items-up mb-auto link-dark text-decoration-none">
                        <img src={logo} alt="Inicio" width="32" height="32"></img>
                    </Link>
                    <p className="text-muted mx-3"> Escuela Secundaria General #14 "Enrique Beltrán"</p>
                </div>

                <div className="col-sm">
                    <h5>Enlaces de interés</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://www.educacionbc.edu.mx/" className="p-0 text-muted">Sistema Educativo Estatal de BC</a></li>
                        <li className="nav-item mb-2"><a href="https://rel.educacionbc.edu.mx/consultacalif/" className="p-0 text-muted">Consulta calificaciones</a></li>
                        <li className="nav-item mb-2"><a href="http://www.educacionbc.edu.mx/servicios/docentes/docente/" className="p-0 text-muted">Indicencia de personal</a></li>
                    </ul>
                </div>

                <div className="col-sm">
                <h5>Contacto</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 text-muted">
                            <a href='https://www.facebook.com/Secundaria-General-14-Enrique-Beltr%C3%A1n-109260074164151' className='p-0 text-muted'>
                                <i className="bi-facebook me-2"/>
                                Secundaria General 14 "Enrique Beltrán"
                            </a>
                        </li>
                        <li className="nav-item mb-2 text-muted">
                            <i className="bi-telephone-fill me-2"/>
                            664 6505732
                        </li>
                        <li className="nav-item mb-2 text-muted">
                            <i className="bi-envelope-fill me-2"/>
                            sec_gral14@gmail.com
                        </li>
                        <li className="nav-item mb-2 text-muted">
                            <i className="bi-geo-alt-fill me-2"/>
                            Calle Hacienda Sta Monica Sn, Terrazas del Valle 
                            <br/>CP 22246, Tijuana, B.C. 
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer