// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;


// actions.js
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export function addTask(task) {
    return { type: ADD_TASK, task };
}

export function removeTask(taskId) {
    return { type: REMOVE_TASK, taskId };
}


// reducers.js
import { combineReducers } from 'redux';
import { ADD_TASK, REMOVE_TASK } from './actions';

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.task];
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.taskId);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export default rootReducer;


// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from './actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleRemoveTask = taskId => {
        dispatch(removeTask(taskId));
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;


// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const AddTask = () => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask({ id: Date.now(), text: taskText }));
        setTaskText('');
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;


// App.js
import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
    return (
        <div>
            <h1>To-Do List</h1>
            <AddTask />
            <TaskList />
        </div>
    );
}

export default App;


// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
