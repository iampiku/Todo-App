import React, { useState, useEffect } from 'react';
import Forms from './components/Forms';
import Todolist from './components/Todolist';

import './App.css';

function App() {
	const [todoItem, setTodoItem] = useState('');
	const [todos, setTodos] = useState([]);
	const [todoFilter, setTodoFilter] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	const handleFilter = () => {
		switch (todoFilter) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'Incomplete':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
		}
	};

	const storeTodoItems = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoFromLocal);
		}
	};

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		handleFilter();
		storeTodoItems();
	}, [todos, todoFilter]);

	return (
		<div className='App'>
			<h1 className='title'>Todo App</h1>
			<Forms
				todoItem={todoItem}
				todos={todos}
				setTodos={setTodos}
				setTodoItem={setTodoItem}
				setTodoFilter={setTodoFilter}
			/>
			<Todolist
				filteredTodos={filteredTodos}
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;
