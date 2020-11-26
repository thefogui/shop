import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'


//CONTAINERS
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import ShoppingCart from './containers/ShoppingCart'
import Catalog from './containers/Catalog'
import CatalogSeason from './containers/CatalogSeason'
import Perfil from './containers/Perfil'


interface PropsType {

}

interface StateType {

}

class App extends Component<PropsType,StateType> {
	render() {
		return (
			<Router>
				<div className="App">
					<GlobalStyles />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={ Login } />
						<Route exact path="/register" component={ Register } />
						<Route exact path="/shoppingcart" component={ ShoppingCart } />
						<Route exact path="/catalog" component={ Catalog } />
						<Route exact path="/catalogseason" component={ CatalogSeason } />
						<Route exact path="/perfil" component={ Perfil } />
					</Switch>
				</div>
      		</Router>
		);
	}
}


export default App;
