import React, { Component } from 'react'

export class Calificaciones extends Component {
  render() {
    return (
      <div  className='text-start'>
        <h3>Consulta califiaciones</h3>

        <p className='mb-0'>Página para consultar califiaciones:</p>
        <a class="btn btn-secondary" href="https://rel.educacionbc.edu.mx/consultacalif/" role="button">
            Consulta calificaciones
          <i class="bi-box-arrow-up-right ms-2"></i>
        </a>

        <p className='mb-0 mt-3'>Si no conoces tu CUPRP o la de tu hijo puedes conocerla aquí:</p>
        <a class="btn btn-secondary" href="https://www.gob.mx/curp/" role="button">
            Consultar aquí
          <i class="bi-box-arrow-up-right ms-2"></i>
        </a>
      </div>
    )
  }
}

export default Calificaciones