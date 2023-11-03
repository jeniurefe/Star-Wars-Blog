import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">

			<div className="container">
				<span className="navbar-brand ms-5 mb-0 h1">
					<a href="/"><img src="https://i.ibb.co/khNRBYC/star-wars-logo.png" alt="star-wars-logo" border="0" /></a>
				</span>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites.length <= 0 ? "empty" :
								store.favorites.map((item) => {
									return (
										<li key={item._id}><Link className="dropdown-item" to="/">{item.properties.name} <span onClick={() => actions.deleteFavorite(item)}><i class="fas fa-trash"></i></span></Link></li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
