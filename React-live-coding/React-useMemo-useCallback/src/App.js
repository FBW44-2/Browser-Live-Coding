
import React,{useState,useCallback,useMemo} from 'react';
import Child from './Child';



function App() {
  const [localCounter,setLocalCounter]=useState(0)
  const [ChildCounter, setChildCounter]=useState(0) 

  const [array,setArray]=useState([2,3,4,7,9,30,40,60,90])


  const MaxNumberInArray=()=>{
    console.log("react is calling this function")
    return Math.max(...array)
  }

  const memorizeValue=useMemo(MaxNumberInArray, [array])



  const incrementChildCounter=()=>{
    setChildCounter(ChildCounter+1)
  }
  const incrementCallback = useCallback(incrementChildCounter , [])

  console.log("render Parent")
  return (
    <div className="App">
      <h1>useMemo and useCallback</h1>
      <div className="Parent">
      <h2>Local/Parent Counter:{localCounter} </h2>
      <button onClick={()=>setLocalCounter(localCounter+1)}>increment</button>
      </div>
      <Child ChildCounter={ChildCounter} incrementCallback={incrementCallback}/>

  <h2>Biggest number in my Array : {memorizeValue}</h2>
  <button onClick={()=>setArray([100,200,300,400])}>Change Array</button>
    </div>
  );
}



export default App