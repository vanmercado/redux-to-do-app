import NewTasks from './component/NewTasks';
import './App.css';
import { connect } from 'react-redux';
import { useState } from 'react';

const App = ({ tasks, addTask }) => {
	const [newTask, setNewTask] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	let pendingTasks = tasks.filter((tasks) => tasks.status === 'pending');
	let doneTasks = tasks.filter((tasks) => tasks.status === 'done');

	const taskInputHandler = (e) => {
		setNewTask(e.target.value);
	};

	const addTaskBtn = () => {
		if (newTask.trim() === '') {
			setErrorMessage('* This Field Cannot Be Blank');
		} else if (
			tasks.filter((task) => task.name.toLowerCase() === newTask.toLowerCase())
				.length > 0
		) {
			setErrorMessage('*task name already exists');
		} else {
			let taskObject = {
				name: newTask,
				status: 'pending',
			};

			addTask(taskObject);

			setNewTask('');
			setErrorMessage('');
		}
	};
	return (
		<div className='outer-div'>
			<div className='create-div'>
				<div className='pinIcon'>
					<img
						className='pin'
						src='https://image.flaticon.com/icons/png/128/889/889668.png'
						alt='pin icon'
					/>
					<h1>To Do App</h1>
				</div>
				<h2>New Task</h2>
				<div>
					<input
						type='text'
						value={newTask}
						onChange={taskInputHandler}
						placeholder='Enter Task here'
					/>{' '}
					<br />
					<span className='errorMsg'>{errorMessage}</span>
				</div>
				<button onClick={addTaskBtn}>Add Task</button>
				<div className='penDoneTask'>
					<div className='PendingTask'>
						<h3>Pending Task:</h3>
						<div className='items-outer'>
							<NewTasks tasksList={pendingTasks} />
						</div>
					</div>
					<div className='DoneTask'>
						<h3>Done Task:</h3>
						<div className='items-outer'>
							<NewTasks tasksList={doneTasks} />
						</div>
					</div>
					<br />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ tasks }) => {
	return { tasks };
};
const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (newTask) => dispatch({ type: 'ADD_TASK', payload: newTask }),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
