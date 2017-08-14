import React from 'react';

class SetupConfiguration extends React.Component {

	constructor(props) {
		super(props);
	};

	getSetupId(){
		
	};


	render() {
		return (
			<div>
				<div>Setup Configuration:</div>
				<div>{this.props.match.params.setupId}</div>
			</div>
		);
	};
}

export default SetupConfiguration;