import React, { Component } from 'react';
import _ from 'lodash';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

import tasks from '../../tasks';

class Dashboard extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			tasks: tasks
		};
	}
	
	onTaskIsDoneHendler = (id) => {
		const {tasks} = this.state;
		tasks.map((task) => {return(task.id === id)?task.status=true:null})
		
		this.setState({
			tasks: tasks
		})
	};
	
	onRemoveTaskHendler = (id) => {
		const {tasks} = this.state;
		_.remove(tasks, function (task) {
			return task.id === id;
		});
		
		this.setState({
			tasks: tasks
		})
	};
	
	render() {
		
		const {tasks} = this.state;
		
		const html = tasks.map( (task) => {
			const isTaskDoneClass = task.status?"TaskIsDone":"";
			return (
				<div key={task.id} className={`task__element col-12 col-md-8 col-lg-7 d-flex align-items-start py-2 ${isTaskDoneClass}`}>
					<div className=" col-2 task__title">
						{task.title}
					</div>
					<div className="col-8 task__desc">
						{task.desc}
					</div>
					<div className="col-2 task__controls d-flex justify-content-end">
						{task.status?"":<button className="btn btn-outline-success" onClick={() => {this.onTaskIsDoneHendler(task.id)}}><FontAwesomeIcon icon={faCheck}/></button>}
						
						<button className="btn btn-outline-danger" onClick={() => {this.onRemoveTaskHendler(task.id)}}><FontAwesomeIcon icon={faTrashAlt}/></button>
					</div>
				</div>
				)
		});
		
		return(
			<div className="row my-5">
				<div className="container">
					<div className="row flex-column align-items-center">
						{html}
					</div>
				</div>
			</div>
		);
	}
	
}

export default Dashboard;