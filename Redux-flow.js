// React Redux flow Example

/*The React Redux library builds on top of the core Redux library to provide a seamless integration of Redux with React applications.It simplifies the process of connecting React components to the Redux store, allowing you to manage state and actions more efficiently.The React Redux flow includes components, actions, reducers, selectors, and the Redux store.

Here's an overview of the React Redux flow:

Actions:
Actions are the same as in regular Redux.They are plain JavaScript objects that describe an event in your application.React Redux components dispatch actions to signal state changes.

Reducers:
Reducers are also the same as in regular Redux.They are pure functions that update the state based on the dispatched actions.

Redux Store:
The Redux store is the same store from the core Redux library.It holds the complete state of the application.However, in React Redux, you need to provide this store to the React components in a specific way.

Connect Function:
The connect function provided by React Redux is used to connect React components to the Redux store. It's a higher-order component that wraps your component, allowing it to access the store's state and dispatch actions.

Provider Component:
The Provider component from React Redux is used to wrap the top - level component of your React application. It ensures that the Redux store is available to all components in the component tree, allowing you to connect any component to the store.

Selectors:
Selectors are functions that retrieve specific pieces of data from the Redux store's state. They help keep the components decoupled from the store's structure.

Here's a simplified example to illustrate the React Redux flow:*/

// actions.js
const incrementCounter = () => {
    return {
        type: 'INCREMENT_COUNTER'
    };
};

// reducers.js
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        default:
            return state;
    }
};

// store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

// App.js
import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from './actions';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Counter: {this.props.counter}</p>
                <button onClick={this.props.incrementCounter}>Increment</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state
    };
};

const mapDispatchToProps = {
    incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
