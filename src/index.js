import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'
import TaskComponent from './component/TaskPage'
import ProjectComponent from './component/ProjectPage'
import NavBar from './component/NavBar/NavBar'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<NavBar />
			<Route path='/project' component={ProjectComponent} />
			<Route path='/task' component={TaskComponent} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
