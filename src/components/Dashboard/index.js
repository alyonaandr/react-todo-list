import React, { Component } from 'react';
import _ from 'lodash';

import './style.css';

import tasks from '../../tasks';
import TaskElement from "../TaskElement";

class Dashboard extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			tasks: tasks
		};
	}
	
	onTaskIsDoneHandler = (id) => {
		const {tasks} = this.state;
		tasks.map((task) => {return (task.id === id)?task.status=true:null});
		
		this.setState({
			tasks: tasks
		})
	};
	
	onRemoveTaskHandler = (id) => {
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
		
		const html = tasks.map( (task) =>
			<TaskElement
				key={task.id}
				task={task}
				onTaskIsDoneHandler={this.onTaskIsDoneHandler}
				onRemoveTaskHandler={this.onRemoveTaskHandler}
			/>);
		
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