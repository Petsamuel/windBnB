import React, { useState } from "react";



function Counter({childToParent}) {
  const [count, setcount] = useState(0);
  
  function Plus(){
    count <5 ? setcount(count+1): "";
    childToParent(count)

  }
  function Minus(){
    count >0 ? setcount(count-1): "";
    childToParent(count)
  }
  return (
    <span className="counter">
      <div>
        <button
          className="plus"
          onClick={Plus}
        >
          +
        </button>
      </div>
      <div>{count}</div>
      <div>
        <button
          className="minus"
          onClick={Minus}
        >
          -
        </button>
      </div>
    </span>
  );
}



export default Counter;
