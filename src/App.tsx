import React from 'react';
// import logo from './logo.svg';
import Home from "pages/home"
import About from "pages/about"
import ListPage from "pages/ListPage"
import AutoAdd from "pages/autoAdd"
import './App.css';
import { Route, BrowserRouter, Link } from "react-router-dom"

class App extends React.Component<any,any,any>{
	// public state = {
	// 	MenuArr: [
	// 		{ "name": "首页", "path": "/", "component": Home, "active": true, "id": 1 },
	// 		{ "name": "关于", "path": "/about", "component": About, "id": 2 },
	// 		{ "name": "列表", "path": "/list", "component": ListPage, "id": 3 },
	// 		{ "name": "autoAdd", "path": "/add", "component": AutoAdd, "id": 4 }
	// 	]
	// }
	// public render(){
	// 	return(
	// 		<div className = "App" >
	// 				<header className="App-header">
	// 					<BrowserRouter>
	// 						<ul>
	// 							{this.state.MenuArr.map((menu) => {
	// 								return (<li key={menu.id}><Link to={menu.path}>{menu.name}</Link></li>)
	// 							})}
	// 							{/* <li><Link to="/">home</Link></li>
	// 						<li><Link to="/about">about</Link></li> */}
	// 						</ul>
	// 						<Route exact={true} path="/" component={Home} />
	// 						<Route exact={true} path="/about" component={About} />
	// 						<Route exact={true} path="/list" component={ListPage} />
	// 						<Route exact={true} path="/add" component={AutoAdd} />
	// 					</BrowserRouter>

	// 				</header>
	// 		</div>
	// 	)
	// };
	public render(){
		return(
			<Home/>
		)
	}
}

export default App;
