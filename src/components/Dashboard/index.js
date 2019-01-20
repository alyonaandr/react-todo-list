import React, { Component } from 'react';
import _ from 'lodash';

import '../Form/style.css';

import tasks from '../../tasks';
import TaskElement from "../TaskElement";
import NoTask from "../NoTask";
import Form from "../Form";

class Dashboard extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			tasks: tasks,
			title: "",
			desc: "",
			inputTextError: ""
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
	
	onSubmitHandler = (e) => {
		e.preventDefault();
		
		e.target.reset();

		const {tasks} = this.state;
		const {title} = this.state;
		const {desc} = this.state;

		let newTask = {id: tasks[tasks.length-1].id+1, title: this.state.title, desc: this.state.desc, status: false};
		
		if (title.length > 2 && desc.length > 2) {
			tasks.push(newTask);
			this.setState({
				tasks: tasks,
				inputTextError: ''
			});
		} else {
			console.log("validator Error");
			this.setState(() => ({
				inputTextError: 'Validator Error. Please fill 2 inputs and they must be more than 3 symbols'
			}));
		}
		
		this.setState({
			title: "",
			desc: ""
		});
	};
	
	onChangeTitle = (e) => {
		this.setState({
			title: e.target.value
		})
	};
	
	onChangeDesc = (e) => {
		this.setState({
			desc: e.target.value
		})
	};
	
	render() {
		
		const {tasks} = this.state;
		
		let html = null;
		
		if(tasks.length === 0) {
			html = <NoTask/>
		} else {
			html = tasks.map( (task) =>
				<TaskElement
					key={task.id}
					task={task}
					onTaskIsDoneHandler={this.onTaskIsDoneHandler}
					onRemoveTaskHandler={this.onRemoveTaskHandler}
				/>);
		}
		
		const htmlForm = <Form
			onSubmitHandler={this.onSubmitHandler}
			onChangeTitle={this.onChangeTitle}
			onChangeDesc={this.onChangeDesc}
			inputTextError={this.state.inputTextError}
		/>;
		
		return(
			<div className="row my-5">
				<div className="container">
					<div className="row flex-column align-items-center">
						{html}
					</div>
					<div className="row flex-column align-items-center">
						{htmlForm}
					</div>
				</div>
			</div>
		);
	}
	
}

export default Dashboard;