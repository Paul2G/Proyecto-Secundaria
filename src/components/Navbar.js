import React from "react";
import '../assets/css/App.css'
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

class Navbar extends React.Component {
	render(){
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-secondary bg-gradient bd-navbar border-bottom border-secondary ">
				<div className="container-md mx-auto">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="Inicio" width="60" height="60" />
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
		
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" exact strict to="/" replace>Inicio</Link>
							</li>
		
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Escuela
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item" to="/escuela/modelo">Modelo estrategico</Link></li>
									<li><Link className="dropdown-item" to="/escuela/organizacion">Organización</Link></li>
									<li><Link className="dropdown-item" to="/escuela/directorio">Directorio</Link></li>
									<li><Link className="dropdown-item" to="/escuela/ubicacion">Ubicación</Link></li>
									<li><Link className="dropdown-item" to="/escuela/galeria">Galería</Link></li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Alumnos
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item" to="/alumnos/reglamento">Reglamento escolar</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Trabajos de la cuarentena</Link></li>
									<li><Link className="dropdown-item" to="/alumnos/recursos">Recursos didacticos</Link></li>
									<li><Link className="dropdown-item" to="/alumnos/correo">Correo institucional</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Television educativa</Link></li>
									<li><Link className="dropdown-item disabled" to="/alumnos/correos_profesores">Correo de los profesores</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Aulas de classroom</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Asesores de grupos</Link></li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle disabled" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Docentes
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item disabled" to="/">Calendario de actividades</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Avisos para docentes</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Plan escolar de Mejora Continua</Link></li>
									<li><Link className="dropdown-item disabled" to="/">Lista de alumnos</Link></li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Padres de familia
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link className="dropdown-item disabled" to="/">Avisos</Link></li>
								<li><Link className="dropdown-item" to="/padres/calificaciones">Calificaciones</Link></li>
								<li><Link className="dropdown-item" to="/padres/requisitos">Requisitos de inscripcion</Link></li>
								<li><Link className="dropdown-item" to="/padres/uniforme">Uniforme escolar</Link></li>
								</ul>
							</li>
						</ul>

						<div>
							<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Iniciar sesión
							</button>

							<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div className="modal-dialog modal-dialog-centered">
									<div className="modal-content">
										
										<form class="needs-validation text-start">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLabel">Inicio de sesión para admin</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>

											<div className="modal-body">
												<div class="col-md-12">
													<label for="validationCustomEmail" class="form-label">Correo electronico</label>
													<input type="email" class="form-control" id="validationCustomEmail"/>
												</div>

												<div class="col-md-12">
													<label for="validationCustom01" class="form-label">Contraseña</label>
													<input type="password" class="form-control" id="validationCustom01" required/>
												</div>
												<div data-bs-dismiss="modal">
													<Link to="/signin">¿No tienes cuenta? Registrate</Link>
												</div>
											</div>
											
											<div class="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
												<button type="submit" className="btn btn-dark">Iniciar sesión</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;