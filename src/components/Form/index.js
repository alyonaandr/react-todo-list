import React, { Component } from 'react';

import './style.css';

class Form extends Component {
	
	render() {
		
		return(
			<form className="form__container flex-column align-items-center col-12 col-md-8 col-lg-7 py-2 d-flex" onSubmit={this.props.onSubmitHandler}>
				<div className="col-12 d-flex justify-content-between flex-wrap align-items-center">
					<input name="title" type="text" className="col-12 col-md-6 mb-1 py-1" placeholder="Title" onChange={this.props.onChangeTitle}/>
					<input name="desc" type="text" className="col-12 col-md-6 mb-1 py-1" placeholder="Description" onChange={this.props.onChangeDesc}/>
				</div>
				<div className="col-12 text-light">{
					this.props.inputTextError
						? <p>{this.props.inputTextError}</p>
						: null
				}</div>
				<button className="btn btn-outline-light">Add Task</button>
			</form>
		);
	}
	
}

export default Form;