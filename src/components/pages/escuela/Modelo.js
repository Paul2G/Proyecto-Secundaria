import React, { Component } from 'react'

import maqueta from '../../../assets/images/maqueta.jpg'
import plantel from '../../../assets/images/plantel.jpg'

export class Modelo extends Component {
  render() {
    return (
      <div className='text-start'>
        <div>
          <h3 className='text-start'>Modelo estratégico</h3>          
        </div>
        
        <div className='row px-3'>
          <div className='order-md-1 col-md-6 p-0 m-md-3 d-flex align-items-center'>
            <img src={plantel} class="img-fluid " alt="plantel" />
          </div>
          
          <div className="order-md-2 xd-card col-md-5 mb-3 mb-md-0">
              <h5 className="card-title">Misión</h5>
              <p className="card-text">
                Somos una institución comprometida con la labor educativa, interesada en lograr que nuestras y nuestros estudiantes egresen con el perfil del nivel de secundaria; consolidada como centro educativo con una infraestructura capaz de atender las necesidades educativas de sus alumnas y sus alumnos, con principios humanistas, brindando educación de calidad proyectándonos de forma competitiva hacia la comunidad en general, estando a la vanguardia en el uso de las nuevas tecnologías.
              </p>
          </div>
          
          <div className='order-md-4 col-md-6 p-0 m-md-3 d-flex align-items-center'>
            <img src={maqueta} class="img-fluid" alt="plantel" />
          </div>

          <div className="order-md-3 xd-card col-md-5 mb-3 ">
              <h5 className="card-title">Visión</h5>
              <p className="card-text">
                Brindar a sus alumnas y alumnos, a través de sus maestras, maestros y personal de apoyo aprendizajes significativos; desarrollando sus capacidades basadas en competencias, egresando con el perfil requerido para el joven actual que le permita adaptarse a su medio y convivir de manera armónica, respetando la diversidad cultural y valorándola como una fortaleza de su propia identidad.
              </p>
          </div>
        </div>

      </div>
    )
  }
}

export default Modelo