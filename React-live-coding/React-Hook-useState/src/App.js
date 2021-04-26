
//     Default  named
import React , {useState} from 'react';


function App() {

/* 
  console.log(useState("name")[0])
  console.log(useState("name")[1]) */

  const [count,setCount ] = useState(0) /* [0,function] */
  const [status,setStatus] = useState(true)
  const [items,setItems]=useState(["item1","item2"])
  const [value,setValue]=useState("")



  return (
    <div className="App">
      {status && <h1>Counter: {count}</h1> }
     
      <button onClick={()=>setCount(count+1)}>increment</button>


      <button onClick={()=> setCount(count-1)}>decrement</button>

      <button onClick={()=>setStatus(!status)}>show/hide counter</button>

      <ul>
        {items.map(item=>{
          return(
          <li key={item}>{item}</li>
          )
        })}
      </ul>
      <input type="text" onChange={(e)=>setValue(e.target.value)}/>

      <button onClick={()=>setItems([...items,value])}>Add Item</button>
    </div>
  );
}

export default App;