import React, { Component } from 'react'

import Simulacro from '../../../assets/images/simulacro.jpg'
import Plantel from '../../../assets/images/plantel.jpg'

export class Galeria extends Component {
  render() {
    return (
      <div>
        <h2 className='text-start'>Galería</h2>

        <div className='card p-3'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Plantel} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block ">
                  <h5>Plantel</h5>
                  <p>Vista aerea del plantel</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={Simulacro} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Simulacro</h5>
                  <p>Simulacro de bomba en el plantel</p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Galeria