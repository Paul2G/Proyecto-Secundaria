import React, { Component } from 'react'

export class CorreoIns extends Component {
  render() {
    return (
      <div className='text-start'>
        <div>
          <h3>Correo institucional</h3>
        </div>

        <p>
          Apreciable alumno (a): Conocer tu correo institucional del estado de Baja California y tu contraseña es muy importante, esta herramienta permitirá crear un enlace entre tu y tu escuela, es muy útil para obtener datos personales relacionados con la administración de tu educación secundaria y en estos momentos de contingencia ante la pandemia de COVID-19 servirá como herramienta de enlace entre tus maestros y tu.
        </p>
        <p>
          Antes de entrar al enlace que te permitirá conocerlo por primera vez debes de tener lista la siguiente información:
          <ul>
            <li>CURP</li>
            <li>Un <strong>correo electronico personal</strong> (Si no lo tienes puede ser el de tu mama o tu papa o de algún familiar, debes de tener cuidado de escribirlo correctamente porque en ese se te enviara la informacion por primera vez, te pedimos entrar al siguiente enlace y seguir las instrucciones tal como se te indican)</li>
          </ul>
        </p>
        <a class="btn btn-secondary" href="http://app3.educacionbc.edu.mx/activar/cuenta/1" role="button">
            Correo institucional para alumnos
          <i class="bi-box-arrow-up-right ms-2"></i>
        </a>

        <p className='fst-italic'>Este enlace te permite también reestablecer tu contraseña si ya cuentas con tu correo electrónico institucional.</p>
      </div>
    )
  }
}

export default CorreoIns