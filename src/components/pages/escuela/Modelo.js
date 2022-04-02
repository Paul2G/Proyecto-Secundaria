import React, { Component } from 'react'

export class Modelo extends Component {
  render() {
    return (
      <div>
        <h2 className='text-start'>Modelo estratégico</h2>
        
        <div className='row text-start px-3'>
          <div className="card col-md m-1">
            <div className="card-body">
              <h5 className="card-title">Misión</h5>
              <p className="card-text">
                Somos una institución comprometida con la labor educativa, interesada en lograr que nuestras y nuestros estudiantes egresen con el perfil del nivel de secundaria; consolidada como centro educativo con una infraestructura capaz de atender las necesidades educativas de sus alumnas y sus alumnos, con principios humanistas, brindando educación de calidad proyectándonos de forma competitiva hacia la comunidad en general, estando a la vanguardia en el uso de las nuevas tecnologías.
              </p>
            </div>
          </div>

          <div className="card col-md m-1">
            <div className="card-body">
              <h5 className="card-title">Visión</h5>
              <p className="card-text">
                Brindar a sus alumnas y alumnos, a través de sus maestras, maestros y personal de apoyo aprendizajes significativos; desarrollando sus capacidades basadas en competencias, egresando con el perfil requerido para el joven actual que le permita adaptarse a su medio y convivir de manera armónica, respetando la diversidad cultural y valorándola como una fortaleza de su propia identidad.
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Modelo