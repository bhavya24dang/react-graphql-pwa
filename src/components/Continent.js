import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import './Continent.css'

/**
 * Component showing the continent detail interface.
 * Makes a call to the API with ```Query``` defined in ```render()``` function
 * All the countries in the continent with their details are shown in a list.
 */
class Continent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Query
				query={gql`
					{
						continent(code: "${this.props.match.params.code}") {
							code
							name
							countries {
								code
								name
								native
								phone
								currency
								languages {
									code
									name
									native
									rtl
								}
								emoji
								emojiU
							}
						}
					}
				`}
			>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                const continent = data.continent;
				return (
                    <div className='continent-container'>
					<h1>{`Continent Details: ${continent.name}`}</h1>
					<ul className='continent-ul'>
						{continent.countries.map(country => {
							return (
                                <li className='continent-li'>
                                    <div>
                                        <p>{`Country: ${country.name}`}</p>
                                        <span>
                                            {`${country.code}: `}
                                        </span>
                                        <span>
                                            {`${country.emoji}`}
                                        </span>
                                        <span>
                                            {`${country.native}`}
                                        </span>
                                        <p> {`Languages: `}
                                            {country.languages.map(language => {
                                                if (language.name && language.native)
                                                    return <span>{`${language.name} (${language.native})`}</span>
                                            })}
                                        </p>
                                    </div>
                                </li>
                            );
						})}
					</ul>
					</div>
                );
			}}
			</Query>
        );
    }
}

export default Continent;