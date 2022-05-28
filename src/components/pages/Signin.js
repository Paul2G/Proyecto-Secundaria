import React, { Component } from 'react'

export class Signin extends Component {
  render() {
    return (
      <div className='container-xl p-0 text-start'>
        <h3>Registrate</h3>
        <form class="row g-3 needs-validation">
          <div className='col-md-6'>
            <label for="validationCustom01" class="form-label">Primer nombre</label>
            <input type="text" class="form-control" id="validationCustom01" required/>
          </div>

          <div className='col-md-6'>
            <label for="validationCustom02" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="validationCustom02" required />
          </div>

          <div class="col-md-6">
            <label for="validationCustomEmail" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="validationCustomEmail"/>
          </div>

          <div class="col-md-6">
            <label for="validationCustom01" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="validationCustom01" required/>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-secondary">Registrase</button>
          </div>

        </form>
      </div>
    )
  }
}

export default Signin