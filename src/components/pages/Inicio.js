import React, { Component } from 'react'

import '../../assets/css/inicio.css'

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]

export class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loadFailed: false,

      selectedItem: {
        "id": 0,
        "title": "Titulo",
        "content": "content"
      }
    }

    this.setSelectedItem = this.setSelectedItem.bind(this);

    this.handleOnPublish = this.handleOnPublish.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
  }

  componentDidMount(){
    this.importNews();
  }

  setSelectedItem(e) {
    this.setState({selectedItem: 
      JSON.parse(JSON.stringify(this.state.news.find(element => element.id === e.target.id))
    )});
  }

  handleOnPublish(e) {
    e.preventDefault();

    var formulario = document.getElementById("formu");
    var datos = new FormData(formulario);

    formulario.reset();

    fetch('http://localhost/backend/avisos/publishpost.php', {
      method: 'POST',
      body: datos
    })
      .then(res => res.json(), e => {
        console.log("Obtención fallida", e);
      })
      .then(data => {
        console.log(data);

        if(!data.session){
          alert("No se ha podido publicar el anuncio \nLa sesión ha expirado \nInicie sesión nuevamente");

        } else {
          this.importNews();
        }

        this.props.sessionUpdate(data.session);
      })
  }

  handleOnEdit(e) {
    e.preventDefault();

    var formulario = document.getElementById("editformu");
		var datos = new FormData(formulario);

    formulario.reset();

    fetch('http://localhost/backend/avisos/editpost.php', {
      method: 'POST',
      body: datos
    })
      .then(res => res.json(), e => {
        console.log("Obtención fallida", e);
      })
      .then(data => {
        console.log(data);

        if(!data.session){
          alert("No se ha podido editar el anuncio \n La sesión ha expirado \nInicie sesión nuevamente");

          //eliminando fade
          var loginFade = document.getElementsByClassName("modal-backdrop fade show");
          loginFade[0].parentNode.removeChild(loginFade[0]);
          var daBody = document.getElementsByTagName("body")[0];
				  daBody.removeAttribute("style"); daBody.removeAttribute("class");

          
        } else {
          this.importNews();
        }

        this.props.sessionUpdate(data.session);
      });
  }

  handleOnDelete(e) {
    var dato = { "id": this.state.selectedItem.id };

    e.preventDefault();

    fetch('http://localhost/backend/avisos/deletepost.php', {
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
          alert("No se ha podido eliminar el anuncio \nLa sesión ha expirado \nInicie sesión nuevamente ");
          
        } else {
          this.importNews();
        }
        
        this.props.sessionUpdate(data.session);
      })
  }

  importNews () {
    fetch('http://localhost/backend/avisos/importpost.php', {
      method: 'POST'
    })
    .then(res => res.json(), e => {
      console.log("Obtención fallida", e);
    })
    .then(data => {
      this.setState({ news: data});
    })
    .catch(() => {
      this.setState({loadFailed: true});
    });
  } 

  displayPostButton() {
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

  displayEditButtons(id) {
    if (this.props.loginState) {
      return (
        <div>
          <button type="button" id={id} className='bi-pencil xd-edit-button' data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={this.setSelectedItem} />
          <button type="button" id={id} className='bi-trash xd-edit-button' data-bs-toggle="modal" data-bs-target="#staticBackdropDelete" onClick={this.setSelectedItem} />
        </div>
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
            <h5 className="card-title">Publicar nuevo anuncio</h5>
            <form className="needs-validation text-start" id='formu' onSubmit={this.handleOnPublish}>

              <div className='mb-3'>
                <label htmlFor="validationCustom1" className="form-label mb-0">Título:</label>
                <input name="title" type="text" className="form-control" id="validationCustom11" placeholder='Escriba el titulo...' required />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea11" className="form-label mb-0" >Contenido:</label>
                <textarea name="content" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba el contenido...' required></textarea>
              </div>

              <div className="col-12 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary" >Publicar</button>
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

                    <div className='mb-3'>
                      <label htmlFor="validationCustom21" className="form-label mb-0">Título:</label>  
                      <input name="title" type="text" className="form-control" id="validationCustom21" placeholder='Escriba el titulo...' 
                        value= {this.state.selectedItem.title} onChange={e => {this.state.selectedItem.title = e.target.value; this.setState({})}} required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea11" className="form-label mb-0" >Contenido:</label>
                      <textarea name="content" className="form-control" id="exampleFormControlTextarea11" rows="6" placeholder='Escriba el contenido...' 
                        value={this.state.selectedItem.content} onChange={e => {this.state.selectedItem.content = e.target.value; this.setState({})}} requerid/>
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
                  <h5 className="modal-title" id="staticBackdropDeleteLabel">Eliminar anuncio</h5>
                </div>
                <div className="modal-body">
                  ¿Esta seguro que desea eliminar el anuncio?
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

  displayNews() {
    var editBts = (id) => this.displayEditButtons(id);
    var crEditMod = this.createEditModals();

    if (this.state.loadFailed) {
      return (
        <h5>Error al cargar anuncios.</h5>
      );
    } else {
      try {
        return (
          this.state.news.map(function (aNew, i) {
            return (
              <div key={i} className="card rounded-0 mb-3">
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{aNew.title}</h5>
                    {editBts(aNew.id)}
                    {crEditMod}

                  </div>
                  <h6 className="card-subtitle mb-2 text-muted">{aNew.date.substr(8, 2)} de {months[parseInt(aNew.date.substr(5, 2)) - 1]} de {aNew.date.substr(0, 4)}</h6>
                  <p className='card-text'>{aNew.content}</p>

                </div>
              </div>
            );
          })
        );
      } catch (error) {
        return (
          <h5>No hay anuncios que mostrar.</h5>
        );
      }
    }
  }

  render() {
    return (
      <div className='text-start'>
        <div className='d-flex justify-content-between mb-3'>
          <h3>Avisos generales</h3>
          {this.displayPostButton()}
        </div>

        {this.displayForm()}

        {this.displayNews()}

      </div>

    )
  }
}

export default Inicio