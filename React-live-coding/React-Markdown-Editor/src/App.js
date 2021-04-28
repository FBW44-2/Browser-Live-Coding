import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";
import MarkDown from "./MarkDown";
import Previewer from "./Previewer";

function App() {

  const [text,setText] = useState("")


  return (
    <div className="container">
      {/* //header */}
      <div className="jumbotron">
        <h1 className="text-center">
          <Badge variant="secondary">MarkDown Editor</Badge>
        </h1>
      </div>
      {/* ::::::::::::Closing Header::::::::::::::::::: */}

      <div className="row justify-content-center mt-5">

          <div className="col-md-5 text-center"  style={{position:"relative"}}>
             <h2><Badge variant="success">MarkDown</Badge></h2>
             <MarkDown text={text} setText={setText}/>
          </div>

          <div className="col-md-5">
             <h2 className="text-center"><Badge variant="warning">Previewer</Badge></h2>
             <Previewer text={text}/>
          </div>

      </div>
    </div>
  );
}

export default App;
