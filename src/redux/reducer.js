import { v4 as uuidv4 } from 'uuid';

const initialState = {
	tasks: [
		{ name: 'Eat', status: 'pending', id: uuidv4() },
		{ name: 'Code', status: 'pending', id: uuidv4() },
		{ name: 'Sleep', status: 'done', id: uuidv4() },
	],
};

const reducer = (state = initialState, action) => {
	let tasksCopy;
	switch (action.type) {
		case 'ADD_TASK':
			tasksCopy = [...state.tasks, action.payload];
			return {
				...state,
				tasks: tasksCopy,
			};

		case 'DONE_TASK':
			tasksCopy = state.tasks.map((task) => {
				if (task.name === action.payload) {
					task.status = 'done';
				}
				return task;
			});

			return {
				...state,
				tasks: tasksCopy,
			};

		case 'DELETE_TASK':
			tasksCopy = state.tasks.filter((task) => task.name !== action.payload);
			return {
				...state,
				tasks: tasksCopy,
			};
		default:
			return state;
	}
};

export default reducer;
