import React from 'react';
import './create-new-setup.scss';
import * as RestService from './../res/rest-utilities';
import remove from 'lodash/remove';
import find from 'lodash/find';

class CreateNewSetup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
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
		let className = "deployableOptionItem";
		if(this.isSelected(deployableOptionItem)){
			className = className + " selected";
		}
		return (
			<div key={deployableOptionItem.id} className={className} onClick={this.onClickDeployableOptionItem.bind(this, deployableOptionItem)}>
				<div className="name">{deployableOptionItem.name}</div>
			</div>
		);
	};

	isSelected(deployableOptionItem){
		let selectedDeployableOptions = this.state.selectedDeployableOptions;
		let findedItem = find(selectedDeployableOptions, function(item){
			return deployableOptionItem.id == item.id;
		});
		return findedItem != undefined;
	};

	onClickDeployableOptionItem(deployableOptionItem){
		let selectedDeployableOptions = this.state.selectedDeployableOptions;
		let removedItem = remove(selectedDeployableOptions, function(item){
			return item.id == deployableOptionItem.id;
		});
		if(removedItem.length == 0){
			selectedDeployableOptions.push(deployableOptionItem);
		}
		this.setState({selectedDeployableOptions});
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
			<div className="createNewSetup">
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