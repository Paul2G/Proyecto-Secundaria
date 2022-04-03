import React, { Component } from 'react'

export class Uniforme extends Component {
  render() {
    return (
      <div>
        <h3 className='text-start'>Uniforme escolar </h3>
        <div className='card-body'>
          <div className='row text-start'>
            <div className='col-lg'>
              <h5 className="card-title">Hombres</h5>
              <h6>Uniforme formal</h6>
              <p>
                <ol>
                  <li>Pantalón escolar color azúl marino, corte recto a la medida, no entubado, sin modificaciones (<strong>no cortarlo</strong>), no demasiado largo o ancho, sin aberturas o doblez y ceñido a la cintura. Si es de una donación, cerciorarse de que cumpla con estos requisitos.</li>
                  <li>Camisa escolar de manga corta color blanco con el logo de la escuela (fajada).</li>
                  <li>Suéter escolar color azul marino, cuello V, con logotipo.</li>
                  <li>Zapato negro escolar (no tenis).</li>
                  <li>Cinto escolar color negro tipo piel.</li>
                  <li>Camiseta blanca sin estampados bajo el uniforme.</li>
                </ol>
              </p>

              <h6>Corte de cabello</h6>
              <p>
                <ul>
                  <li>Con máquina no. 1 o 2, a los lados y atrás.</li>
                  <li>Desvanecido.</li>
                  <li>Corte corto a tijera en la parte de arriba.</li>
                  <li>Patilla a la mitad forma recta sin pico.</li>
                  <li>Sin líneas, desniveles o pedazos de pelo que sobresalgan.</li>
                  <li>El corte no es a la moda, debe ser común y regular, no se permite corte mohawk.</li>
                </ul>
              </p>
            </div>
            <div className='col-lg'>
              <h5 className="card-title">Mujeres</h5>
              <h6>Uniforme formal</h6>
              <p>
                <ol>
                  <li>Falda de color azul marino a cuadros con lineas rojas y blancas para los tres grados que cubra completamente la rodilla, no ajustada, sin modificaciones (<strong>no cortarla</strong>) y con bastilla.</li>
                  <li>Camisa escolar de mangar corta color blanco con el logo de la escuela (fajada)</li>
                  <li>Zapato negro escolar (no tenis).</li>
                  <li>Suéter escolar color azul marino, cuello V, con logotipo.</li>
                  <li>Calceta blanca larga y sin doblar (no tines) y/o mallas en invierno.</li>
                </ol>
              </p>
            </div>
          </div>
          <div className='row text-start'>
            <h5 className="card-title">Ambos</h5>
            <h6>Uniforme deportivo</h6>
            <p>
              <ol>
                <li>El uniforme deportivo es de color azul marino con rojo y francas blancas para todos los grupos, solo se usará el día de clases de educación física.</li>
                <li>No se deberán hacer ajustes al pantalón deportivo, no entubarlo ni cortarlo.</li>
                <li>Playera tipo polo color gris con logotipo de la escuela.</li>
                <li>Tenis color blancos o negros sin adorno de colores, con agujetas del color de sus tenis y no de otros colores.</li>
                <li>Calceta deportiva blanca.</li>
                <li>En caso de que el alumno no cuente con todo su uniforme deportivo completo o con los tenis que se piden, deberá traer el uniforme oficial hasta que cuente con el requerido.</li>
              </ol>
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default Uniforme