import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					{store.characters.map((item) => {
						return (
							<div className="my-card">
								<div>
									<img src="https://picsum.photos/200/300/" alt="" />
								</div>
								<div className="body-text">
									<p>Nombre</p>
									<p>Gender</p>
									<p>Hair Color</p>
									<p>Eye Color</p>
								</div>
								<div className="button-footer">
									<button className="btn btn-outline-primary">Learn More</button>
									<button className="btn btn-outline-warning">C</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="my-carousel">
					<div className="my-card">
						<div>
							<div>
								<img src="https://picsum.photos/200/300/" alt="" />
							</div>
							<div className="body-text">
								<p>Population</p>
								<p>Terraine:</p>
							</div>
							<div className="button-footer">
								<button className="btn btn-outline-primary">Learn More!</button>
								<button className="btn btn-outline-warning">C</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

