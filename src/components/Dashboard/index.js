import React, { Component } from 'react';
import './style.css';

class Dashboard extends Component {
	render() {
		return(
			<div className="row my-5">
				<div className="container">
					<div className="row flex-column align-items-center">
						<div className="task__element col-12 col-md-8 col-lg-7 d-flex">
							<div className=" col-2 task__title">
								task__title
							</div>
							<div className="col-8 task__desc">
								task__desc
							</div>
							<div className="col-2 task__controls">
								<button>Done</button>
								<button>Remove</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Dashboard;