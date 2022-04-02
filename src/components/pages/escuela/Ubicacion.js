import React, { Component } from 'react'

export class Ubicacion extends Component {
  render() {
    return (
      <div>
        <h2 className='text-start'>Ubicación</h2>

        <div className="card text-start">
            <div className='ratio ratio-21x9'>
              <iframe height="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.367206649244!2d-116.83386168482518!3d32.48961328105966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d93e4fd3bfa3e1%3A0x9fe1afff9f4ef2c4!2sEsc.%20Secundaria%20General%2014!5e0!3m2!1ses!2smx!4v1648866245269!5m2!1ses!2smx"></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">Dirección</h5>
              <p className="card-text">
                Calle Hacienda Sta Monica Sn, Terrazas del Valle,   <br/> 
                CP 22246 Tijuana, B.C.                                
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Ubicacion