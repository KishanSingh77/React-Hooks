import React, { useState, useEffect } from 'react';

export function Example() {
  const [count, setCount] = useState(0);

  const [speed, setSpeed] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    if(speed==4) document.getElementById('square').innerText="hey you squre"

    // Update the document title using the browser API
    document.title = `You clicked ${count} times , ${speed} speed`;
  });

  useEffect(()=>{
    //   document.getElementById('square').innerText=("meow");
      
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p id='square'></p>
      <button 
      onClick={
          () => 
          {setCount(count + 1);
          setSpeed((count+1)*(count+1));
          }}>
        Click me
      </button>
    </div>
  );
}