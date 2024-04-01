import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	
	const {store, actions} = useContext(Context)
	console.log(store.favorites)

	return (
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/details">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
		<nav className="navbar navbar-expand-lg bg-black">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="#"><img src="https://static.vecteezy.com/system/resources/previews/027/127/457/original/star-wars-logo-star-wars-icon-transparent-free-png.png" width="100" height="100" className="card-img-top" alt="..."/></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown btn btn-primary">
							<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</a>
							<ul className="dropdown-menu dropdown-menu-end">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><hr className="dropdown-divider"/></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
