import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './assets/common.css';

import WebView from './view/WebView'
import MobileView from './view/MobileView';

const App : FC = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/competition_detail" 
						component={document.body.clientWidth <= 750  ? MobileView : WebView}
					/>
					<Redirect from="/" to="/competition_detail" />
				</Switch>
			</div>
		</Router>
	)
}

export default App