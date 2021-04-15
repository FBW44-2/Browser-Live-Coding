
import React from 'react';
import Header from './components/Header';

class App extends React.Component{
    state={
      searchValue:""
    }
    //custom method
    grabValueFromInput=(e)=>{
     /*  console.log("user is typing") */
      //store input data into state
      this.setState({
        searchValue:e.target.value 
      })
    }

  render() {
    console.log("render in App",this.state.searchValue)
          return (
            <div className="App" style={{backgroundColor:"#EAEDF0"}}>
              <Header/>
              <div style={{display:"flex",justifyContent:"center"}}>
                <input type="text" style={{fontSize:"20px",width:"400px",padding:"5px",outline:"none",borderRadius:"5px",border:"1px solid light-gray"}}      onChange={this.grabValueFromInput}   />
              </div>
            </div>
          );
}
}




export default App;