import React from 'react';
import TodoItem from './TodoItem';

const Todolist = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div>
			<ul>
				{filteredTodos.map((todo) => (
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
