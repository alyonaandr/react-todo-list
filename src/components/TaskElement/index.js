import React, { Component } from 'react';

import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

class TaskElement extends Component {
	render() {
		
		const {task} = this.props;
		const isTaskDoneClass = task.status?"TaskIsDone":"";
		
		return (
			<div className={`task__element col-12 col-md-8 col-lg-7 d-flex align-items-start py-2 border border-dark ${isTaskDoneClass}`}>
				<div className=" col-3 task__title">
					{task.title}
				</div>
				<div className="col-7 task__desc">
					{task.desc}
				</div>
				<div className="col-2 task__controls d-flex justify-content-end">
					{task.status?"":<button className="btn btn-outline-success mr-1" onClick={() => {this.props.onTaskIsDoneHandler(task.id)}}>
						<FontAwesomeIcon icon={faCheck}/>
					</button>}
					<button className="btn btn-outline-danger" onClick={() => {this.props.onRemoveTaskHandler(task.id)}}>
						<FontAwesomeIcon icon={faTrashAlt}/>
					</button>
				</div>
			</div>
		);
	}
}

export default TaskElement;
