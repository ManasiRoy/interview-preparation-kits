import React, { useState } from 'react';

const ChildComponent = ({ onData }) => {
  const [childData, setChildData] = useState('');

  const handleInputChange = (e) => {
    setChildData(e.target.value);
  };

  const sendDataToParent = () => {
    onData(childData);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={childData} onChange={handleInputChange} />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
