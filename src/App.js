import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Continents from './components/Continents';
import Continent from './components/Continent';

class App extends React.Component {
  	render () {
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
