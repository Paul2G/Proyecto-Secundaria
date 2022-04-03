import React, { Component } from 'react'

export class Requisitos extends Component {
  render() {
    return (
      <div className='text-start'>
        <h3>Requisitos de inscripción</h3>
        <div className='row'>
          <div className='col-md m-1'>
            <div className="card-body">
                <h5 className="card-title">Primer grado</h5>
                <p className="card-text">
                  <ul>
                    <li>Acta de nacimiento.</li>
                    <li>Certificado de primaria.</li>
                    <li>CURP</li>
                    <li>Comprobante de domicilio (agua)</li>
                    <li>IFE (Padre, Madre o Tutor legal)</li>
                  </ul>
                </p>
              </div>
          </div>
          <div className='col-md m-1'>
            <div className="card-body">
                <h5 className="card-title">Segundo grado</h5>
                <p className="card-text">
                <ul>
                    <li>Acta de nacimiento.</li>
                    <li>Certificado de primaria.</li>
                    <li>Boleta de secundaria 1er grado</li>
                    <li>CURP</li>
                    <li>Comprobante de domicilio (agua)</li>
                    <li>IFE (Padre, Madre o Tutor legal)</li>
                  </ul>
                </p>
              </div>
          </div>
          <div className='col-xl m-1'>
            <div className="card-body">
                <h5 className="card-title">Tercer grado</h5>
                <p className="card-text">
                <ul>
                    <li>Acta de nacimiento.</li>
                    <li>Certificado de primaria.</li>
                    <li>Boleta de secundaria 1er grado</li>
                    <li>Boleta de secundaria 2do grado</li>
                    <li>CURP</li>
                    <li>Comprobante de domicilio (agua)</li>
                    <li>IFE (Padre, Madre o Tutor legal)</li>
                  </ul>
                </p>
              </div>
          </div>
        </div>

        <p className='fst-italic fw-bold'>Original y copia de todos los documentos</p>
      </div>
    )
  }
}

export default Requisitos