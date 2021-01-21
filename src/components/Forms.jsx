import React, { useRef } from 'react';
import AddButton from '../images/add-button.png';

const Forms = ({ setTodoItem, setTodos, todos, todoItem, setTodoFilter }) => {
	const inputElem = useRef();

	// setting input query as todo item;
	const inputHandle = (e) => {
		setTodoItem(e.target.value);
	};

	// handleing todo item creations;
	const todoHandle = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			// giving random id to todo items;
			{ text: todoItem, completed: false, id: Math.random() * 1000 },
		]);
		inputElem.current.value = '';
		setTodoItem('');
	};

	const handleFilterOption = (e) => {
		setTodoFilter(e.target.value);
	};

	return (
		<div className=''>
			<form className='flex flex-wrap justify-center'>
				<input
					value={todoItem}
					type='text'
					placeholder='Just do it !'
					className='w-52 p-1 rounded-lg my-2 mx-1'
					onChange={inputHandle}
					ref={inputElem}
				/>
				<button
					className=''
					type='submit'
					onClick={todoHandle}
					disabled={
						inputElem.current !== undefined &&
						inputElem.current.value.length === 0
							? true
							: false
					}>
					<img
						className='h-8 w-8 bg-white rounded-full p-1'
						src={AddButton}
						alt='add button'
					/>
				</button>
				<select
					onChange={handleFilterOption}
					name='todos'
					className='p-1 m-1 rounded-lg bg-yellow-100 text-base'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='Incomplete'>Incompleted</option>
				</select>
			</form>
		</div>
	);
};

export default Forms;
