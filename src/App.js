import React, { useState } from 'react';
import Forms from './components/Forms';
import Todolist from './components/Todolist';

import './App.css';

function App() {
	const [todoItem, setTodoItem] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<h1 className='title'>Todo App</h1>
			<Forms
				todoItem={todoItem}
				todos={todos}
				setTodos={setTodos}
				setTodoItem={setTodoItem}
			/>
			<Todolist todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
