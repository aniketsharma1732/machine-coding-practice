import react, { useEffect, useEffectEvent, useState } from "react";
import axios from "axios";

function Fetching() {
    const [data, setData] = useState(' ');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((respone) => Response.json())  // converting datat into json manually
            .then((data) => setData(data))    // setting data in useState
            .catch((error) => console.error(error));  // printing the erorrs in the console
    }, []);

    useEffect(() => {

        axios
            .get("https://jsonplaceholder.typicode.com/posts") // data is automatically converted into json
            .then((data) => setData(data))    // setting data in useState
            .catch((error) => console.error(error));   // printing the errors in the console
    }, [])

    return (
        <ul>
            {data.slice(0, 5).map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}


/*

Fetch is built-in but requires more manual handling, while Axios is a feature-rich library that simplifies HTTP requests.


fetch is in-build and axios requires install. it is a third party system
json parsing is manual in fetch whereas in axios it is automated
Error Handling is Manual check needed in fetch and axios Auto rejects on error

*/