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
		this.fetchSetupItems();
	};

	fetchSetupItems(){
		RestService.get("/services/setups").then(function(setupItems) {
			this.setState({setupItems});
		}.bind(this));
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
		RestService.delete1("/services/setups/" + setupItem.id).then(function(setupItems) {
			this.fetchSetupItems();
		}.bind(this));
	};

	handleConfigure(setupItem){
		console.log("handleConfigure:" + setupItem.name);
		this.props.history.push('/setupConfiguration/' + setupItem.id);		
	};

	handleDeploy(setupItem){
		console.log("handleDeploy:" + setupItem.name);
	};


	handleCreateNew(){
		this.props.history.push('/createNewSetup');
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
				<div className="header">
					<div className="title">Choose Setup</div>
					<div className="createNew" onClick={this.handleCreateNew.bind(this)}>Create new</div>
				</div>
				{this.setupList()}
			</div>
		);
	};
}

export default SetupList;