import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Promise.all to make multiple API requests concurrently
        const [response1, response2] = await Promise.all([
          axios.get('https://api.example.com/data1'),
          axios.get('https://api.example.com/data2'),
        ]);

        // Handle the responses
        setData1(response1.data);
        setData2(response2.data);
      } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h1>Data from API 1:</h1>
      <pre>{JSON.stringify(data1, null, 2)}</pre>

      <h1>Data from API 2:</h1>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;