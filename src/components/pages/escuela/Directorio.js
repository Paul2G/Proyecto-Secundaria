import React, { Component } from 'react'

export class Directorio extends Component {
  render() {
    return (
      <div className='text-start'>
        <div>
          <h3>Directorio</h3>
        </div>

        <div className='row px-3'>
          <div className="card col-sm m-1">
            <div className="card-body">
              <h5 className="card-title">Contacto</h5>
              <p className="card-text">
                <h6>Esc. Sec. Gral. No. 14 "ENRIQUE BELTRÁN"</h6>
                <p className='ps-2'>
                  664 6505732 <br/>
                  sec_gral14@gmail.com
                </p>

                <h6>SNTE Seccion 2</h6>
                <p className='ps-2'>
                  664 6222598
                </p>

              </p>
            </div>
          </div>

          <div className="card col-sm m-1">
            <div className="card-body">
              <h5 className="card-title">Enlaces</h5>
              <a href="https://www.educacionbc.edu.mx/" class="card-link">Sistema Educativo Estatal de BC</a><br/>
              <a href="http://www.educacionbc.edu.mx/servicios/docentes/docente/" class="card-link">Indicencia de personal</a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Directorio