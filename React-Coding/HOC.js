import React from 'react';

// Define a functional Higher Order Component
const withUpperCase = (WrappedComponent) => {
  // Return a new functional component
  return (props) => {
    // Transform the 'text' prop to uppercase
    const uppercasedText = props.text.toUpperCase();

    // Render the WrappedComponent with the modified props
    return <WrappedComponent {...props} text={uppercasedText} />;
  };
};

// Define a simple component
const MyComponent = ({ text }) => {
  return <div>{text}</div>;
};

// Wrap MyComponent with the withUpperCase HOC
const MyComponentWithUpperCase = withUpperCase(MyComponent);

// Usage of the wrapped component
const App = () => {
  return <MyComponentWithUpperCase text="Hello World!" />;
};

export default App;