import React from 'react';
import TodoItem from './TodoItem';

import './Todolist.css';

const Todolist = ({ todos, setTodos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-itmes'>
				{todos.map((todo) => (
					<TodoItem
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						key={todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default Todolist;