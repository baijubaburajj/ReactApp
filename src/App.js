import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import List from './component/List';


class App extends React.Component {
	constructor() {
		super();
		this.state = { 
		users:[],
		filtered:[]
		};
	}
	
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(user => {
				this.setState({users:user, filtered: user})
			});
	}
	
	handleFilterUser = (e) => {
		let searchValue = e.target.value;
		let output = [];
		this.state.users.map(e => {
			if(e.name.includes(searchValue)) {
				output.push(e);
			}
		});
		this.setState({filtered: output});
		console.log('on change' + JSON.stringify(output));
	}
	
	render() {
		return (
  <div>
	<Header title="Header Title" subtitle="Sub Title" handler={this.handleFilterUser} />
	<List users = {this.state.filtered} />
	</div>
  )
	}
}

	//<div className="Sidemenu"><h1>SIDE MENU</h1></div>
	//<div className="MainContent"><h1>MAIN CONTENT</h1></div>
export default App;
