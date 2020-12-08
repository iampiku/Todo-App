import React, { useRef } from 'react';
import './Forms.css';

const Forms = ({ setTodoItem, setTodos, todos, todoItem, setTodoFilter }) => {
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
		inputElem.current.value = '';
		setTodoItem('');
	};

	const handleFilterOption = (e) => {
		setTodoFilter(e.target.value);
	};

	return (
		<form>
			<input
				value={todoItem}
				type='text'
				placeholder='Just do it !'
				className='todo-input'
				onChange={inputHandle}
				ref={inputElem}
			/>
			<button
				className='todo-button'
				type='submit'
				onClick={todoHandle}
				disabled={
					inputElem.current !== undefined &&
					inputElem.current.value.length === 0
						? true
						: false
				}>
				<strong>Add</strong>
			</button>
			<div className='select-option'>
				<select
					onChange={handleFilterOption}
					name='todos'
					className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='Incomplete'>Incompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Forms;
