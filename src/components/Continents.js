import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import './Continents.css'

/**
 * Component to list down all the continents name fetched from the given API.
 * Only defined attributes of continents are asked in ```Query``` i.e. ```code, name```.
 * A link has been created on every continent's name, which leads to 
 * continent detail interface. e.g (http://localhost:3333/continent/AF)
 */
class Continents extends React.Component {
	render() {
		return (
			<div className="continents-container">
				<h1>Continents</h1>
				<Query
					query={gql`
						{
							continents {
								code
								name
							}
						}
					`}
				>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
					return (
						<ul className="continents-ul">
							{data.continents.map(({ name, code }) => (
								<li className="continents-li" key={code}>
									<Link to={`/continent/${code}`}>{name}</Link>
								</li>
							))}
						</ul>
					);
				}}
				</Query>
			</div>
		);
	}
}

export default Continents;