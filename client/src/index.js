import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import Login from './login';
import SetupList from './setup-list';



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
