import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand h1">StarWars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites.length <= 0 ? "empty": 
								store.favorites.map((item) => {
									return(
										<li key={item._id}><a className="dropdown-item" href="#">{item.properties.name}</a></li>
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
