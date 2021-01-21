import React from 'react';

import Check from '../images/checked.png';
import Tick from '../images/tick.png';
import Delete from '../images/trash.png';

const TodoItem = ({ todo, todos, setTodos }) => {
	const handleDelete = (id) => {
		setTodos(todos.filter((i) => i.id !== id));
	};

	// handling complete todo items;
	const handleComplete = (id) => {
		setTodos(
			todos.map((i) => {
				if (i.id === id) {
					return {
						...i,
						completed: !i.completed,
					};
				}
				return i;
			})
		);
	};

	return (
		<div className='flex justify-between bg-white rounded-md p-1 m-2'>
			<button className='' onClick={() => handleComplete(todo.id)}>
				<img
					className='h-6 w-6'
					src={todo.completed ? Check : Tick}
					alt='tick-img'
				/>
			</button>
			<li className='text-lg'>{todo.text}</li>
			<button className='' onClick={() => handleDelete(todo.id)}>
				<img className='h-6 w-6' src={Delete} alt='delete-img' />
			</button>
		</div>
	);
};

export default TodoItem;
