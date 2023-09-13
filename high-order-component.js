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