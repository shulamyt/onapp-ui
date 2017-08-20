import React from 'react';
import * as RestService from './../res/rest-utilities';

class CreateNewSetup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
			// deployableOptionsItems: [
			// 	{name: 'Close Loop'},
			// 	{name: 'A&AI'},
			// 	{name: 'SO'},
			// 	{name: 'VID'},
			// 	{name: 'SDS'},
			// 	{name: 'SDNC'},
			// 	{name: 'APPC'}
			// ],
			deployableOptionsItems: [],
			selectedDeployableOptions: []
		};
	};

	componentDidMount(){
		this.fetchDeployableOptionsItems();
	};

	fetchDeployableOptionsItems(){
		RestService.get("/services/deployableOptionsItems").then(function(deployableOptionsItems) {
			this.setState({deployableOptionsItems});
		}.bind(this));
	};

	getSetupId(){
		
	};

	handleChange(field, event) {
		let obj = {};
		obj[field] = event.target.value;
		this.setState(obj);
	};

	openAddExternalComponentPopup(){

	};

	openAddTestButtonPopup(){

	};

	getDeployableOptionsItems(){
		return this.state.deployableOptionsItems;
	};

	createDeployableOptionItem(deployableOptionItem){
		return (
			<div key={deployableOptionItem.name} className="deployableOptionItem">
				<div className="name">{deployableOptionItem.name}</div>
			</div>
		);
	};

	setupDeployableOptions(){
		let deployableOptionsItems = this.getDeployableOptionsItems().map((deployableOptionItem) =>	
			this.createDeployableOptionItem(deployableOptionItem)
		);
		return(
			<div>{deployableOptionsItems}</div>
		);
	};

	render() {
		return (
			<div>
				<div>Create new Setup</div>
				<label>Setup Name:<input type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} /></label>
				<div className="addExternalComponentButton" onClick={this.openAddExternalComponentPopup.bind(this)}>Add External Component</div>
				<div className="addTestButton" onClick={this.openAddTestButtonPopup.bind(this)}>Add Test</div>
				{this.setupDeployableOptions()}
			</div>
		);
	};
}

export default CreateNewSetup;