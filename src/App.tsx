import React, { FC, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './assets/common.css';

import WebView from './view/WebView'
import MobileView from './view/MobileView';

const App: FC = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/ai2022"
						component={document.body.clientWidth <= 750 ? MobileView : WebView}
					/>
					<Redirect from="/" to="/" />
				</Switch>
			</div>
		</Router>
	)
}

export default App