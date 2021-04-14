
import React, {Component} from 'react';
import Students from './Students';
import Teachers from './Teachers';



class App extends Component{
 /*  constructor(){
    super()
    console.log(this, "from constructor")
    this.changeStatus= this.changeStatus.bind(this)
  } */
  state={
    status:true,
    color:"red"
  }

  //custom method
  changeStatus=()=>{
    //change state

    this.setState({
      status:!this.state.status
    })
  }

  changeColor=()=>{
    if(this.state.color==="red"){
      this.setState({
      color:"green"
    })
    }else{
      this.setState({
        color:"red"
      })
    }
    
  }

  render() {
   /*  console.log(this) */
  return (
    <div className="App" style={{backgroundColor:this.state.color}}>
      {this.state.status?<Students changeColor={this.changeColor}/>: <Teachers changeColor={this.changeColor}/>  }
      
     
  <button onClick= {this.changeStatus } >{this.state.status? "Teacher component":"Student comppnent"}</button>

    </div>
  );
}
}



export default App;