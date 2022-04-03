import React, { Component } from 'react'

import organigrama from '../../../assets/json/Organigrama.json'
import docentes from '../../../assets/json/Docentes.json'

export class organizacion extends Component {
  render() {
    return (
      <div>
        <h2 className="text-start">Organizacion</h2>
          <div className=''>
            <div className=' card-body row'>

              <div className='col mx-3 text-start'> 
                {organigrama.map(function(area, i){
                    return (
                      <div>
                        <h4 className='text-muted'>{area.name}</h4>

                        {area.subareas.map(function(subarea, i){
                          return (
                            <div>
                              <h5>{subarea.name}</h5>

                              {subarea.members.map(function(member, i){
                                return (
                                  <div>
                                    <h6 className='ps-4'>{member.name}</h6>                                  
                                  </div>
                                );
                              })}

                            </div>
                          );
                        })}

                        <br/>
                      </div>
                    );
                })}
                
              </div>

              <div className='col mx-3 text-start'>
                <h4 className='text-muted'>{docentes.name}</h4>

                {docentes.materias.map(function(materia, i){
                    return (
                      <div>
                        <h5>{materia.name}</h5>

                        {materia.docentes.map(function(docente, i){
                            return (
                              <h6 className='ps-4'>{docente.name}</h6> 
                            );
                        })}

                      </div>
                    );
                })}

              </div>

            </div>
          </div>

      </div>
    )
  }
}

export default organizacion