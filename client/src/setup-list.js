import React from 'react';
import {Link} from 'react-router-dom';

class SetupList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			setupItems: [1, 2, 3]
		};
	};

	getSetupItems(){
		return this.state.setupItems;
	};

	setupList(){
		let setupItems = this.getSetupItems().map((setupItem) =>
			<li>{setupItem}</li>
		);
		return(
			<ul>{setupItems}</ul>
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