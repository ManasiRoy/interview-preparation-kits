import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = useCallback((data) => {
    setDataFromChild(data);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child: {dataFromChild}</p>
      <ChildComponent onData={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
