import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Continents from './components/Continents';
import Continent from './components/Continent';

/**
 * Entry point from index.js has the URL to fetch the details of
 * continents with nested details.
 * Dependencies have been installed for fetching the content like react-apollo
 */
class App extends React.Component {
  	render () {
		/** ApolloClient is a method of react-apollo library */
    	const client = new ApolloClient({
      		uri: "https://countries.trevorblades.com/"
    	});
    	return (
			<ApolloProvider client={client}>
				<Router>
					<Route path="/" exact component={Continents} />
					<Route path={`/continent/:code`} component={Continent}/>
				</Router>
			</ApolloProvider>
    	);
  	}
}

export default App;
