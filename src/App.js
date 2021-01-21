import React, { useState, useEffect } from 'react';
import Forms from './components/Forms';
import Todolist from './components/Todolist';

import './App.css';

function App() {
	const [todoItem, setTodoItem] = useState('');
	const [todos, setTodos] = useState([]);
	const [todoFilter, setTodoFilter] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		// getting localy stored todos in browser;
		const getLocalTodos = () => {
			if (localStorage.getItem('todos') === null) {
				localStorage.setItem('todos', JSON.stringify([]));
			} else {
				let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
				setTodos(todoFromLocal);
			}
		};

		getLocalTodos();
	}, []);

	useEffect(() => {
		// filtering todoitems based on completed or no;
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
		handleFilter();

		// storing the todo items into local browser storage;
		const storeTodoItems = () => {
			localStorage.setItem('todos', JSON.stringify(todos));
		};
		storeTodoItems();
	}, [todos, todoFilter]);

	return (
		<div className='App bg-gray-200 h-screen w-screen flex justify-center'>
			<div className='bg-yellow-400 w-2/3 shadow-xl h-2/3 rounded-lg p-8 mt-20'>
				<h1 className='text-5xl font-bold text-center'>TODO</h1>
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
		</div>
	);
}

export default App;
