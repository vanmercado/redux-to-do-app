import ToDoTask from './ToDoTask';

const NewTasks = (props) => {
	return (
		<div>
			{props.tasksList.map((tasks) => {
				return <ToDoTask tasks={tasks} key={tasks.name} />;
			})}
		</div>
	);
};

export default NewTasks;
