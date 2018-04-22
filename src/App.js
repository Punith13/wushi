import React, { Component } from 'react';
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import './App.css';
import PermanentDrawer from './components/PermanentDrawer';

class App extends Component {
	render() {
		loadProgressBar();
		return (
			<div className="App">
				<PermanentDrawer />
			</div>
		);
	}
}

export default App;
