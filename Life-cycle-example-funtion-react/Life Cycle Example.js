import React, { useState } from 'react';

// Higher Order Component
const withLoading = (WrappedComponent) => {
    return function WithLoading(props) {
        const [isLoading, setLoading] = useState(false);

        const startLoading = () => {
            setLoading(true);
            // Simulate an asynchronous action
            setTimeout(() => {
                setLoading(false);
            }, 2000); // Simulating a 2-second delay
        };

        return (
            <div>
                <WrappedComponent {...props} isLoading={isLoading} startLoading={startLoading} />
            </div>
        );
    };
};

// Component that uses the HOC
const MyComponent = ({ isLoading, startLoading }) => {
    return (
        <div>
            <button onClick={startLoading}>Start Loading</button>
            {isLoading ? <p>Loading...</p> : <p>Content Loaded</p>}
        </div>
    );
};

// Wrap the component with the HOC
const MyComponentWithLoading = withLoading(MyComponent);

// App component
function App() {
    return (
        <div>
            <h1>Higher Order Component Example</h1>
            <MyComponentWithLoading />
        </div>
    );
}

export default App;

//================== Life Cycle Example ========================//
// componentDidMount equivalent:
import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        // This code will run after the component mounts
        console.log('Component did mount');
        return () => {
            // This code will run when the component unmounts
            console.log('Component will unmount');
        };
    }, []); // Empty dependency array means it will only run on mount and unmount
}

// componentDidUpdate equivalent:
import React, { useEffect } from 'react';

function MyComponent({ propValue }) {
    useEffect(() => {
        // This code will run whenever 'propValue' changes
        console.log('Component did update');
    }, [propValue]);
}

// componentWillUnmount equivalent:
import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        console.log('Component did mount');
        return () => {
            // This code will run when the component unmounts
            console.log('Component will unmount');
        };
    }, []);
}
// componentDidCatch equivalent(for handling errors within components):

import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            // Handle the error here
            console.error('Component error:', error);
        }
    }, [error]);

    if (error) {
        // Return an error message or fallback UI
        return <div>Error occurred: {error.message}</div>;
    }

    return (
    // ...normal component rendering
  );
}

//==================== Implement one react component where you have to fetch data from some api and display it on page. (React JS code) ============================//
// useEffect is a hook used to manage side effects in functional components.Side effects can include data fetching,
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetchingComponent;

////////////////////// Define Example useState, context, useEffect //////////////////////////////////////////

/* useState is a React hook that allows functional components to manage their internal state.Prior to hooks, state management was primarily handled by class components.*/
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// useContext is another React hook that provides a way to access the context(global) state within components, without the need for prop drilling.Context is used when you want to share certain state or functionality across many components in your component tree.
import React, { useContext } from 'react';

const ThemeContext = React.createContext();

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme }}>
            <p>Current theme: {theme}</p>
        </div>
    );
}

// To fetch the first 10 users from the JSONPlaceholder API in a React application without using Axios
import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Make an API request to fetch user data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                // Limit the data to the first 10 users
                const firstTenUsers = data.slice(0, 10);
                setUsers(firstTenUsers);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>User Names</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
