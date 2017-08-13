import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import './index.scss';
import Login from './login';
import SetupList from './setup-list';
import SetupConfiguration from './setup-configuration';




const routes = [
	{
		path: '/',
		exact: true,
		component: Login
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/setupList',
		component: SetupList
	},
	{
		path: '/setupConfiguration/:setupId',
		component: SetupConfiguration
	}
]


const render = function(){
	ReactDOM.render(
		(<BrowserRouter>
			{renderRoutes(routes)}
		</BrowserRouter>),
		document.getElementById('root')
	)
};

render();
