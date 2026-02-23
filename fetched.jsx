// 3.	Fetch data from an API and display it
// → loading + error handling

import { useEffect, useState } from "react";
import axios from "axios";

function FetchingBoth() {
  const [fetchData, setFetchData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);

  // Using Fetch API
  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((respone) => Response.json())  // converting data into json manually
            .then((data) => setData(data))    
            .catch((error) => console.error(error));  
    }, []);

  // Using Axios
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")// data is automatically converted into json
      .then((response) => setAxiosData(response.data))
      .catch((error) => console.error("Axios error:", error));
  }, []);

  return (
    <div>
      <h2>Data using Fetch</h2>
      <ul>
        {fetchData.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <h2>Data using Axios</h2>
      <ul>
        {axiosData.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchingBoth;


/*

Comparison between Fetch and Axios:

Fetch is a built-in browser API, but it requires more manual handling.

Axios is a third-party library that needs to be installed, but it simplifies HTTP requests.

In Fetch, JSON parsing must be done manually using response.json(), whereas Axios automatically parses JSON.

Error handling in Fetch requires manual checks, while Axios automatically rejects the promise on HTTP errors, making error handling easier.

*/