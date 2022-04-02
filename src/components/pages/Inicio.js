import React, { Component } from 'react'

import foto from '../../assets/images/aprendeEnCasa.jpg'
import news from '../../assets/json/AvisosGral.json'

export class Inicio extends Component {
  render() {
    return (
      <div className='text-start'>
          <h2>Avisos generales</h2>

          {news.map(function(aNew, i){
            return (
              <div>
                <div className="card">

                  {( () => {
                      if(aNew.imageUrl != null){
                        return(
                          <img src={aNew.imageUrl} class="card-img-top" alt="..."></img>
                        );
                      }
                    }
                  ) }
                  
                  <div className="card-body">
                    <h5 class="card-title">{aNew.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{aNew.date.day} de {aNew.date.month} de {aNew.date.year}</h6>
                    <p className='card-text'>{aNew.content}</p>

                    
                    {aNew.links.map(function(aLink, i){
                      return (
                        <a href={aLink.url} class="card-link">{aLink.name}</a>
                      );
                    })}

                  </div>

                </div>

                <div className='py-2'></div>
              </div>
            );
          })}

      </div>
    )
  }
}

export default Inicio