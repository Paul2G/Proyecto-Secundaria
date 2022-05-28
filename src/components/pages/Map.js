import React, { Component } from 'react'

import '../../assets/css/map.css'

export class Map extends Component {
  render() {
    return (
      <div className='text-start'>
          <div>
              <h3>Mapa del sitio</h3>
          </div>
          <div className='xd-map'>
            <h5><i className='bi-caret-right-fill'/>Inicio</h5>
            <h5><i className='bi-caret-right-fill'/>Escuela</h5>
              <h6><i className='bi-caret-right'/>Modelo estratégico</h6>
              <h6><i className='bi-caret-right'/>Organización</h6>
              <h6><i className='bi-caret-right'/>Directorio</h6>
              <h6><i className='bi-caret-right'/>Ubicación</h6>
            <h5><i className='bi-caret-right-fill'/>Alumnos</h5>
              <h6><i className='bi-caret-right'/>Reglamento escolar</h6>
              <h6><i className='bi-caret-right'/>Recursos didácticos</h6>
              <h6><i className='bi-caret-right'/>Correo institucional</h6>
            <h5><i className='bi-caret-right-fill'/>Padres</h5>
              <h6><i className='bi-caret-right'/>Calificaciones</h6>
              <h6><i className='bi-caret-right'/>Recursos de incripcion</h6>
              <h6><i className='bi-caret-right'/>Uniforme escolar</h6>
          </div>
      </div>
    )
  }
}

export default Map;