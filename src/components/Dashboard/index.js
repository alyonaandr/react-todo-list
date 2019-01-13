import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
	render() {
		return(
			<div className="row my-5">
				<div className="container">
					<div className="row flex-column align-items-center">
						<div className="task__element col-12 col-md-8 col-lg-7 d-flex align-items-start py-2">
							<div className=" col-2 task__title">
								task__title
							</div>
							<div className="col-8 task__desc">
								task__desc
							</div>
							<div className="col-2 task__controls d-flex justify-content-end">
								<button className="btn btn-outline-success"><FontAwesomeIcon icon={faCheck}/></button>
								<button className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrashAlt}/></button>
							</div>
						</div>
						<div className="task__element col-12 col-md-8 col-lg-7 d-flex align-items-start py-2">
							<div className=" col-2 task__title">
								task__title
							</div>
							<div className="col-8 task__desc">
								task__desc task__desctask __desctask__ desctask__desctask__
								desctask__desctask __desctask__ desctask__desc task__desctask__
								desctask__desctask__desctask__desc task__desc  task__desc task__desc task__desc
							</div>
							<div className="col-2 task__controls d-flex justify-content-end">
								<button className="btn btn-outline-success"><FontAwesomeIcon icon={faCheck}/></button>
								<button className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrashAlt}/></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Dashboard;