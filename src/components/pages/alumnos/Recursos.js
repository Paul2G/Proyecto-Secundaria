import React, { Component } from 'react'

import dBooks from '../../../assets/json/LibrosDidacticos.json'
import clases from '../../../assets/json/ClasesOnline.json'
import libros from '../../../assets/json/LibrosPiratas.json'

export class Recursos extends Component {
  render() {
    return (
      <div>
        <h3 className='text-start'>Recursos didácticos online</h3>

        <div className='row'>
            <div className='col-sm px-5 py-1'>
              <a type="button" class="btn btn-secondary btn-lg" href='https://www.loc.gov/collections/world-digital-library/about-this-collection/'>
                <i class="bi-book me-2"/>
                Biblioteca Mundial
              </a>
            </div>

            <div className='col-sm px-5 py-1'>
              <a type="button" class="btn btn-secondary btn-lg" href='https://sincopyright.com/museos-virtuales/'>
                <i class="bi-building me-2"/>
                Museos Virtuales
              </a>
            </div>
        </div>

        <div className='row my-3'>
          <div className='col-sm my-2'>
            <h4 className='text-start'>Libros didacticos</h4>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Primer grado
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {makeaUrlList(dBooks[0])}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Segundo grado
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {makeaUrlList(dBooks[1])}
                  </div>
                </div>
              </div>
              <div class="accordion-item p-0">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Tercer grado
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {makeaUrlList(dBooks[2])}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='col-sm my-2'>
            <h4 className='text-start'>Clases por internet</h4>
            <div className='border rounded-3'>
              {makeaUrlList(clases)}
            </div>
          </div>

          <div className='col-xl text-start my-2'>
            <h4>Literatura universal</h4>
            <div className='border rounded-3'>
              {makeaUrlList(libros)}
            </div>
          </div>
        </div>

      </div>
    )
  }
}


const makeaUrlList = (enlaces) => {
  return (
  <div class="list-group list-group-flush ">
    {enlaces.map(enlace => (
          <a href={enlace.url} class="list-group-item list-group-item-action">
            {enlace.name}
          </a>
    ))}
    
  </div>
  );
}

export default Recursos