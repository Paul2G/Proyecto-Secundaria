import React, { Component } from 'react'

import '../../../assets/css/inicio.css'

export class organizacion extends Component {
  constructor(props){
    super(props);

    this.state = {
      organigrama: [],
      loadFailed: false,

      selectedAreaId: 0,

      selectedItem: {
        "id": 0,
        "style": "Tratamiento",
        "name": "Nombre",
        "lastname": "Apellidos"
      }
    }

    this.setSelectedItem = this.setSelectedItem.bind(this);

    this.handleForm = this.handleForm.bind(this);
    this.handleOnAdd = this.handleOnAdd.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
  }

  componentDidMount(){
    this.importOrgani();
  }

  setSelectedItem(e) {
    e.preventDefault();

    var dato = { "id": e.target.id };

    fetch('http://localhost/backend/organizacion/importaperson.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dato)
    })
      .then(res => res.json(), e => {
        console.log("Fallo", e);
      })
      .then(data => {
        this.setState({selectedItem: data});
      })
  }

  importOrgani(){
    fetch('http://localhost/backend/organizacion/importorgani.php', {
      method: 'POST'
    })
    .then(res => res.json(), e => {
      console.log("Obtención fallida", e);
    })
    .then(data => {
      this.setState({organigrama: data});
    })
    .catch(() => {
      this.setState({loadFailed: true});
    });
  }

  handleOnAdd (e){
    e.preventDefault();

    var formulario = document.getElementById("addFormu");
    var datos = new FormData(formulario);

    formulario.reset();

    fetch('http://localhost/backend/organizacion/addpersonal.php', {
      method: 'POST',
      body: datos
    })
      .then(res => res.json(), e => {
        console.log("Obtención fallida", e);
      })
      .then(data => {
        console.log(data);

        if(!data.session){
          alert("No se ha podido añadir el personal \nLa sesión ha expirado \nInicie sesión nuevamente");

        } else {
          this.importOrgani();
        }

        this.props.sessionUpdate(data.session);
      })
  }

  handleOnDelete(e) {
    e.preventDefault();

    var dato = { "id": this.state.selectedItem.id };

    fetch('http://localhost/backend/organizacion/deleteperson.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dato)
    })
      .then(res => res.json(), e => {
        console.log("Fallo", e);
      })
      .then(data => {
        console.log(data);
        if(!data.session){
          alert("No se ha podido eliminar el personal\nLa sesión ha expirado \nInicie sesión nuevamente ");
          
        } else {
          this.importOrgani();
        }
        
        this.props.sessionUpdate(data.session);
      })
  }

  handleOnEdit(e){
    e.preventDefault();

    var formulario = document.getElementById("editformu");
		var datos = new FormData(formulario);

    formulario.reset();

    fetch('http://localhost/backend/organizacion/editperson.php', {
      method: 'POST',
      body: datos
    })
      .then(res => res.json(), e => {
        console.log("Obtención fallida", e);
      })
      .then(data => {
        console.log(data);

        if(!data.session){
          alert("No se ha podido editar el personal \n La sesión ha expirado \nInicie sesión nuevamente");

          //eliminando fade
          var loginFade = document.getElementsByClassName("modal-backdrop fade show");
          loginFade[0].parentNode.removeChild(loginFade[0]);
          var daBody = document.getElementsByTagName("body")[0];
				  daBody.removeAttribute("style"); daBody.removeAttribute("class");

          
        } else {
          this.importOrgani();
        }

        this.props.sessionUpdate(data.session);
      });
  }

  handleForm (e) {
    this.setState({selectedAreaId: e.target.value});
  }

  displayEditButtons(id){
    if (this.props.loginState) {
      return (
        <>
          <button type="button" id={id} className='bi-pencil xd-edit-button pe-0' data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={this.setSelectedItem} />
          <button type="button" id={id} className='bi-trash xd-edit-button' data-bs-toggle="modal" data-bs-target="#staticBackdropDelete" onClick={this.setSelectedItem} />
        </>
      );
    } else {
      return (
        <noscript>Boton</noscript>
      );
    }
  }

  createEditModals() {
    if (this.props.loginState) {
      return (
        <>
          <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropEditLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <form className="needs-validation text-start" id='editformu' onSubmit={this.handleOnEdit}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropEditLabel">Editar anuncio</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">

                    <input name="id" type="text" className="form-control d-none" 
                      value={this.state.selectedItem.id}/>

                    <div className='col-12 mb-3'>
                      <label htmlFor="validationCustom21" className="form-label mb-0">Tratamiento:</label>  
                      <input name="style" type="text" className="form-control" id="validationCustom21" placeholder='Escriba el titulo...' 
                        value={this.state.selectedItem.style} onChange={e => {this.state.selectedItem.style = e.target.value; this.setState({})}} required />
                    </div>

                    <div className='col-12 mb-3'>
                      <label htmlFor="validationCustom22" className="form-label mb-0">Nombre(s):</label>  
                      <input name="name" type="text" className="form-control" id="validationCustom22" placeholder='Escriba el titulo...' 
                        value={this.state.selectedItem.name} onChange={e => {this.state.selectedItem.name = e.target.value; this.setState({})}} required />
                    </div>

                    <div className='col-12 mb-3'>
                      <label htmlFor="validationCustom23" className="form-label mb-0">Apellidos:</label>  
                      <input name="lastname" type="text" className="form-control" id="validationCustom23" placeholder='Escriba el titulo...' 
                        value={this.state.selectedItem.lastname} onChange={e => {this.state.selectedItem.lastname = e.target.value; this.setState({})}} required />
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-primary" >Editar</button>
                  </div>
                
                </form>
              </div>
            </div>
          </div>

          <div className="modal fade" id="staticBackdropDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropDeleteLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropDeleteLabel">Eliminar personal</h5>
                </div>
                <div className="modal-body">
                  ¿Esta seguro que desea eliminar al personal?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleOnDelete}>Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <noscript>Modals xd</noscript>
      );
    }
  }

  displayAddButton(){
    if (this.props.loginState) {
      return (
        <button className="bi-file-earmark-plus xd-newpost-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ToggleExternalContent" aria-controls="ToggleExternalContent" aria-expanded="false" aria-label="Toggle" />
      );
    } else {
      return (
        <noscript>Boton</noscript>
      );
    }
  }

  displayForm() {
    if (this.props.loginState) {
      return (
        <div className='card mb-3 collapse' id="ToggleExternalContent">
          <div className='card-body'>
            <h5 className="card-title">Añadir nuevo personal</h5>
            <form className="needs-validation text-start row" id='addFormu' onSubmit={this.handleOnAdd}>

              <div className='mb-3 col-sm-2'>
                <label htmlFor="validationCustom31" className="form-label mb-0">Tratamiento:</label>
                <input name="style" type="text" className="form-control" id="validationCustom31" placeholder='Ej: PhD.' required />
              </div>

              <div className='mb-3 col-sm-5'>
                <label htmlFor="validationCustom32" className="form-label mb-0">Nombre(s):</label>
                <input name="name" type="text" className="form-control" id="validationCustom32" placeholder='Ej: Juan' required />
              </div>

              <div className='mb-3 col-sm-5'>
                <label htmlFor="validationCustom33" className="form-label mb-0">Apellidos:</label>
                <input name="lastname" type="text" className="form-control" id="validationCustom33" placeholder='Ej: Lopéz Peréz' required />
              </div>

              <div className='mb-3 col-sm-6'>
                <label htmlFor="validationCustom34" className="form-label mb-0">Area:</label>
                <select name="area" class="form-select" id="validationCustom34" onChange={this.handleForm} required>
                  <option selected disabled value="">Selecciona un area...</option>
                  {this.state.organigrama.map(function(area){
                    return(
                      <option value={area.id}>{area.name}</option>
                    );
                  })}
                </select>
              </div>

              <div className='mb-3 col-sm-6'>
                <label htmlFor="validationCustom35" className="form-label mb-0">Puesto:</label>
                <select name="puesto" class="form-select" id="validationCustom35" required>
                  <option selected disabled value="" >Selecciona un puesto...</option>
                  {(this.displayPuestos())}
                </select>
              </div>

              <div className="col-12 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary" >Añadir</button>
              </div>
            </form>

          </div>
        </div>
      );
    } else {
      return (
        <noscript>Boton xd</noscript>
      );
    }
  }

  displayPuestos () {
    if(this.state.selectedAreaId === 0){
      return(
        <noscript>jijiji</noscript>
      );
    } else {
      return(
        this.state.organigrama[this.state.selectedAreaId-1].puestos.map(function(puesto){
          return(
            <option value={puesto.id}>{puesto.name}</option>
          );
        })
      );
    }
  }

  displayOrganigrama(){
    var editBts = (id) => this.displayEditButtons(id);
    var crEditMod = this.createEditModals();

    if(this.state.loadFailed){
      return(
        <h5>Error al cargar organigrama.</h5>
      );
    } else {
      return(
        <>
          <div className='row mx-3'>
            <div className='col-md-6'>
              {this.state.organigrama.map(function (area, i) {
                if(i!==3){
                  return(
                    <div key={i} className="pb-2">
                      <h5 className='mb-0'>{area.name}</h5>

                      {area.puestos.map(function(puesto, j){
                        return(
                          <div key={j} className="pb-2 ps-3">
                            <h6 className='mb-0'>{puesto.name}</h6>

                            {puesto.personal.map(function(person, k){
                              return(
                                <p key={k} className="mb-0 ps-3">
                                  {editBts(person.id)}
                                  {person.style} {person.last_name} {person.name}
                                </p>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>

            <div className='col-md-6'>
              {this.state.organigrama.map(function (area, i) {
                if(i===3){
                  return(
                    <div key={i} className="pb-2">
                      <h5 className='mb-0'>{area.name}</h5>

                      {area.puestos.map(function(puesto, j){
                        return(
                          <div key={j} className="pb-2 ps-3">
                            <h6 className='mb-0'>{puesto.name}</h6>

                            {puesto.personal.map(function(person, k){
                              return(
                                <p key={k} className="mb-0 ps-3">
                                  {editBts(person.id)}
                                  {person.style} {person.last_name} {person.name}
                                </p>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {crEditMod}
        </>
      );
    }
  }

  render() {
    return (
      <div className='text-start'>
        <div className='d-flex justify-content-between'>
          <h3>Organización</h3>
          {this.displayAddButton()}
        </div>

        <div className='col'> 
          {this.displayForm()}
          {this.displayOrganigrama()}
        </div>
      </div>
    )
  }
}

export default organizacion