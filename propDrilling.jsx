import Child from "./Child";

function propDrilling() {

  const receiveData = (data) => {
    alert(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child sendData={receiveData} />
    </div>
  );
}

export default propDrilling;


// function Child({ sendData }) {

//   return (
//     <button onClick={() => sendData("Hello Parent!")}>
//       Send Data to Parent
//     </button>
//   );
// }

// export default Child;