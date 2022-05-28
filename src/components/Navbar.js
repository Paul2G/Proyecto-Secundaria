import React from "react";
import { Link } from 'react-router-dom';

import '../assets/css/App.css'
import '../assets/css/navbar.css'

import logo from '../assets/images/logo.png';
import admin from '../assets/images/admin.png';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogin(e) {
		e.preventDefault();

		//Jalando el Login
		var formulario = document.getElementById("login");
		var datos = new FormData(formulario);

		formulario.reset();

		fetch('http://localhost/backend/login.php', {
			method: 'POST',
			body: datos
		})
		.then(res => res.json(), e => {
			console.log("Obtención fallida", e);
		})
		.then(data => {
			console.log(data);

			if(!data.session){
				alert("Usuario y/o contraseña incorrectos, intente de nuevo");
			} else {
				var loginFade = document.getElementsByClassName("modal-backdrop fade show");
				loginFade[0].parentNode.removeChild(loginFade[0]);

				var daBody = document.getElementsByTagName("body")[0];
				daBody.removeAttribute("style"); daBody.removeAttribute("class");
			}

			this.props.sessionUpdate(data.session);
		});
	}

	handleLogout(e){
		e.preventDefault();

		fetch('http://localhost/backend/logout.php', {
			method: 'POST'
		})
		.then(res => res.json(), e => {
			console.log("Obtención fallida", e);
		})
		.then(data => {
			console.log(data);
			this.props.sessionUpdate(data.session);
		});
	}

	displayLoginOption() {
		if (!this.props.loginState) {
			return (
				<div key="1">
					<div className="xd-user guest" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
						<p className="text-white m-0">
							<i className="bi-person-x me-2"></i>
							Iniciar sesión
						</p>
					</div>
				</div>
			);
		} else {
			return (
				<div key="2">
					<div className="xd-user admin" type="button" data-bs-toggle="modal" data-bs-target="#userInfoModal">
						<p className="text-white m-0">
							<i className="bi-person-check me-2"></i>
							Administrador
						</p>
					</div>
				</div>
			);
		}
	}

	displayModalOption() {
		if(!this.props.loginState){
			return(
				<div key="1" className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content rounded-0">

							<form className="needs-validation text-start" id="login" onSubmit={this.handleLogin}>
								<div className="modal-header">
									<h5 className="modal-title" id="loginModalLabel">Inicio de sesión para admin</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>

								<div className="modal-body">
									<div className="col-md-12">
										<label htmlFor="validationCustom12" className="form-label mb-0">Usuario:</label>
										<input name="user" type="text" className="form-control mb-2" id="validationCustom12" placeholder="Ingrese usuario..." required />
									</div>

									<div className="col-md-12">
										<label htmlFor="validationCustom01" className="form-label mb-0">Contraseña:</label>
										<input name="password" type="password" className="form-control" id="validationCustom01" placeholder="Ingrese contraseña..." required />
									</div>
									<div className="d-none" data-bs-dismiss="modal">
										<Link to="/signin">¿No tienes cuenta? Registrate</Link>
									</div>
								</div>

								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
									<button type="submit" className="btn btn-primary">Iniciar sesión</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			);
		} else {
			return(
				<div key="2" className="modal fade" id="userInfoModal" tabindex="-1" aria-labelledby="userInfoModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content rounded-0">
							<div className="modal-header">
								<h5 className="modal-title" id="userInfoModalLabel">Perfil de usuario</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-4">
										<img src={admin} className="w-100" alt="administrador"/>
									</div>
									
									<div className="col text-start">
										<h5>Administrador</h5>
										<h6 className="mb-0">Permisos:</h6>
										<ul>
											<li>Publicar anuncios</li>
											<li>Editar anuncios</li>
											<li>Eliminar anuncios</li>
											<li>Añadir personal</li>
											<li>Editar el personal</li>
											<li>Eliminar personal</li>
										</ul>
										<button className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.handleLogout}>
											<i className="bi-box-arrow-right me-2"></i>
											Cerrar sesión
										</button>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<>
			<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-primary p-0">
				<div className="container-xl d-flex">
					<Link className="d-flex align-items-center nav-link text-light xd-brand" to="/">
						<img className="xd-brand-logo me-2" src={logo} alt="" />
						<p className="text-start m-0 xd-brand-name">
							Esc. Sec. Gral. # 14 <br />
							Enrique Beltrán
						</p>
					</Link>

					<button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
						<ul className="navbar-nav btn-group">
							<Link className="btn btn-primary" to="/">Inicio</Link>
							<div className="dropdown">
								<button className="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
									Escuela
								</button>
								<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
									<li><Link className="dropdown-item" to="/escuela/modelo">Modelo estrategico</Link></li>
									<li><Link className="dropdown-item" to="/escuela/organizacion">Organización</Link></li>
									<li><Link className="dropdown-item" to="/escuela/directorio">Directorio</Link></li>
									<li><Link className="dropdown-item" to="/escuela/ubicacion">Ubicación</Link></li>
								</ul>
							</div>
							<div className="dropdown">
								<button className="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
									Alumnos
								</button>
								<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
									<li><Link className="dropdown-item" to="/alumnos/reglamento">Reglamento escolar</Link></li>
									<li><Link className="dropdown-item" to="/alumnos/recursos">Recursos didacticos</Link></li>
									<li><Link className="dropdown-item" to="/alumnos/correo">Correo institucional</Link></li>
								</ul>
							</div>
							<div className="dropdown">
								<button className="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
									Padres de familia
								</button>
								<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
									<li><Link className="dropdown-item" to="/padres/calificaciones">Calificaciones</Link></li>
									<li><Link className="dropdown-item" to="/padres/requisitos">Requisitos de inscripcion</Link></li>
									<li><Link className="dropdown-item" to="/padres/uniforme">Uniforme escolar</Link></li>
								</ul>
							</div>
						</ul>
						{this.displayLoginOption()}
					</div>
				</div>
			</nav>
			{this.displayModalOption()}
			</>
		);
	}
}

export default Navbar;