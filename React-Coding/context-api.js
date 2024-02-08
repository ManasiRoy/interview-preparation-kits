import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a provider component (can be a separate file)
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Step 3: Provide the values through the context provider
  const contextValues = {
    count,
    increment,
    decrement,
  };

  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
};

// Step 4: Use the context values with useContext hook
const MyComponent = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Step 5: Wrap the components with the provider
const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
