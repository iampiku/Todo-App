import React, { useRef, useState } from 'react';
import './Forms.css';

const Forms = ({ setTodoItem, setTodos, todos, todoItem }) => {
	const [isButtonActive, setButtonActive] = useState(false);
	const inputElem = useRef();

	const inputHandle = (e) => {
		setTodoItem(e.target.value);
	};

	const todoHandle = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: todoItem, completed: false, id: Math.random() * 1000 },
		]);
		setTodoItem('');
	};

	return (
		<form>
			<input
				value={todoItem}
				type='text'
				className='todo-input'
				onChange={inputHandle}
			/>
			<button
				className='todo-button'
				disabled={isButtonActive}
				type='submit'
				onClick={todoHandle}>
				<strong>Add</strong>
			</button>
			<div className='select-option'>
				<select name='todos' className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='Uncomplete'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Forms;
