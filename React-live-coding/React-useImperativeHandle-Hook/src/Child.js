import React, { forwardRef, useImperativeHandle, useState } from "react";

 function Child(props,ref) {
     console.log(ref)
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref,()=>{
      return(
          {focus:()=>ref.current.focus(),
            ChildCounterIncrement:()=>{
                setCounter(counter+1)
            }
        }
      )
  }, [counter])
  return (
    <div>
      <h2>Child component</h2>
      <h2>Counter: {counter}</h2>
      <input ref={ref} type="text"/>
    </div>
  );
}
export default forwardRef(Child)