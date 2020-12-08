import React from 'react';

const TodoItem = ({ todo, todos, setTodos }) => {
	const handleDelete = (id) => {
		setTodos(todos.filter((i) => i.id !== id));
	};

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
		<div className='todo'>
			<li className='todo-item'>{todo.text}</li>
			<button
				className={`incomplete ${todo.completed ? 'completed' : ''}`}
				onClick={() => handleComplete(todo.id)}>
				Done
			</button>
			<button className='delete-btn' onClick={() => handleDelete(todo.id)}>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
