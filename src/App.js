import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import './CU.css';
import './App.css';
import Home from './Home';
import ftp from './ftp';
import credit from './credit';
import document from './document';


class App extends Component {

/*	state ={
		greeting: 'Hello!'
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				greeting: 'Hello again!'
			})
		},5000)			//5초 후 헬로 어게인으로 바꿈. 이거 하게되면 <div className>밑에 {this.state.greeting}
	}
*/

  render() {
    return (
		<Router>	
			<div className="App">
				<Route exact path="/" component={Home}/>
				<Route path="/findthepath" component={ftp}/>
				<Route path="/credit" component={credit}/>
				<Route path="/document" component={document}/>
			</div>	
		</Router>	
    );
  }
}

export default App;
