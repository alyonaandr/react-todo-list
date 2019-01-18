import React, { Component } from 'react';

class NoTask extends Component {
	render() {
		return (
			<div className="task__element col-12 col-md-8 col-lg-7 d-flex align-items-start py-2">
				<p> No task yet</p>
			</div>
		);
	}
}

export default NoTask;