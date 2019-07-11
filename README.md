useState and useEffect

//declare state property count and make setCount function to manipulate the variable, providing initial state of 0
  const [count, setCount] = useState(0);
  
  //declare state property speed and make setSpeed function to manipulate the variable, providing initial state of 0
    const [speed, setSpeed] = useState(0);
  
  //some more example to use useState
  
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);


now call  useEffect function to render changes once the state is updated.

useEffect(()=>{
    //   document.getElementById('square').innerText=("meow");
      
  });
  
  
  //in return function, we are going to change the state using the setCount or setSpeed, etc setters and this change will //implicitly call the useEffect method.
  
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
  
  That's it !!!!
