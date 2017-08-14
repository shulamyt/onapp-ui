import React from 'react';
import './setup-list.scss';
import * as RestService from './../res/rest-utilities';

class SetupList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			setupItems: []
		};
	};

	componentDidMount(){
		let self = this;
		RestService.get("http://localhost:4000/setups").then(function(setupItems) {
			self.setState({setupItems});
		});
	};

	getSetupItems(){
		return this.state.setupItems;
	};

	createSetupItem(setupItem){
		return (
			<div key={setupItem.name} className="setupItem">
				<div>+</div>
				<div className="name">{setupItem.name}</div>
				<div>Last Modified {setupItem.lastModified}</div>
				<div className="buttons">
					<div className="button" onClick={this.handleDelete.bind(this, setupItem)}>Delete</div>
					<div className="button" onClick={this.handleConfigure.bind(this, setupItem)}>Configure</div>
					<div className="button" onClick={this.handleDeploy.bind(this, setupItem)}>Deploy</div>
				</div>
			</div>
		);
	};

	handleDelete(setupItem){
		console.log("handleDelete:" + setupItem.name);
	};

	handleConfigure(setupItem){
		console.log("handleConfigure:" + setupItem.name);
		this.props.history.push('/setupConfiguration/' + setupItem.id);		
	};

	handleDeploy(setupItem){
		console.log("handleDeploy:" + setupItem.name);
	};

	setupList(){
		let setupItems = this.getSetupItems().map((setupItem) =>	
			this.createSetupItem(setupItem)
		);
		return(
			<div>{setupItems}</div>
		);
	};

	render() {
		return (
			<div className="setupList">
				<div>Choose Setup:</div>
				{this.setupList()}
			</div>
		);
	};
}

export default SetupList;