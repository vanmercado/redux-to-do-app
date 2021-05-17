import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const ToDoTask = ({ tasks, doneTask, deleteTask }) => {
	return (
		<div className='items-inner'>
			<div className='itemList'>
				<div className='text'>
					<p>{tasks.name}</p>
				</div>
				<div className='buttons'>
					{tasks.status === 'pending' ? (
						<img
							onClick={() => doneTask(tasks.name)}
							src='https://image.flaticon.com/icons/png/128/845/845646.png'
							alt={uuidv4() + 'Check Button Icon'}
						/>
					) : null}
					<img
						onClick={() => deleteTask(tasks.name)}
						src='https://image.flaticon.com/icons/png/128/2236/2236752.png'
						alt={uuidv4() + ' delete Button Icon'}
					/>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		doneTask: (name) => dispatch({ type: 'DONE_TASK', payload: name }),
		deleteTask: (name) => dispatch({ type: 'DELETE_TASK', payload: name }),
	};
};
export default connect(null, mapDispatchToProps)(ToDoTask);
