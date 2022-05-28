import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../assets/css/aside.css'

export class sidebar extends Component {
    render() {
        return (
            <div className="xd-sidebar mt-3 mt-xl-0">
                <h5 data-bs-toggle="collapse" href="#collapseSidebar" role="button" aria-expanded="false" aria-controls="collapseSidebar">
                    <i className='bi-caret-down-fill' />
                    Más buscados</h5>
                <ul className='collapse show' id="collapseSidebar">
                    <li><Link to="/">Avisos generales</Link></li>
                    <li><Link to="/escuela/directorio">Contacto</Link></li>
                    <li><Link to="/alumnos/correo">Correo institucional</Link></li>
                    <li><Link to="/padres/calificaciones">Consulta calificaciones</Link></li>
                    <li><Link to="/mapa">Mapa del sitio</Link></li>
                </ul>
            </div>
        );
    }
}

export default sidebar