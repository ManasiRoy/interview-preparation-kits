import React, { useEffect, useState } from "react";

const FetchApi = () => {
    const [data, setData ] = useState([])
    const fetchData = async () => {
        const apiUrl = "https://dummy.restapiexample.com/api/v1/employees";
        const list = await fetch(apiUrl)
        const json = await list.json();
        setData(json?.data)
      }
    
    useEffect(() => {
        // const apiUrl = "https://dummy.restapiexample.com/api/v1/employees";
        // fetch(apiUrl)
        // .then(res => res.json())
        // .then(data => setData(data?.data))
        fetchData()
    }, [])
    
    return (
        <div>
            {data.map((f) => {
                return <h1>
                    {f.employee_name}
                </h1>
            })}
        </div>
    )
}

export default FetchApi