import React from 'react';
import {Link} from 'react-router-dom';

class SetupList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			setupItems: [
				{id:"1", name: "ONAP Release 1.0.0", lastModified:"10.02.2017"},
				{id:"2", name: "ONAP last stable 1.1", lastModified:"10.02.2017"},
				{id:"3", name: "ONAP All Master", lastModified:"10.02.2017"},
				{id:"4", name: "AEE 1.1 SD-WAN", lastModified:"10.02.2017"}
			]
		};
	};

	getSetupItems(){
		return this.state.setupItems;
	};

	createSetupItem(setupItem){
		return (
			<div key={setupItem.name}>
				<div>+</div>
				<div>{setupItem.name}</div>
				<div>Last Modified</div>
				<div>{setupItem.lastModified}</div>
				<div onClick={this.handleDelete.bind(this, setupItem)}>Delete</div>
				<div onClick={this.handleConfigure.bind(this, setupItem)}>Configure</div>
				<div onClick={this.handleDeploy.bind(this, setupItem)}>Deploy</div>
			</div>
		);
	};

	handleDelete(setupItem){
		console.log("handleDelete:" + setupItem.name);
	};

	handleConfigure(setupItem){
		console.log("handleConfigure:" + setupItem.name);		
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
			<div>
				<div>Choose Setup:</div>
				{this.setupList()}
			</div>
		);
	};
}

export default SetupList;