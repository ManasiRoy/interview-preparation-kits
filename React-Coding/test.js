import React, { useState, useEffect } from "react";

const FetchApiComp = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const APIurl = await "https://dummyApi.com/posts";
        const FetchIn = await fetch(APIurl);
        const jsonFetch = await FetchIn.json();
        setData(jsonFetch?.data)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div> Fetch
            {data.map(people => {
                return (<div>{people.postname}</div>)
            })}
        </div>
    )

}
export default FetchApiComp;