
import React from 'react';
import Header from './components/Header';
import emojiList from "./json/emoji.json"
import EmojiContainer from './components/EmojiContainer';


class App extends React.Component{
    state={
      searchValue:"",
      emojiData:emojiList
    }
    //custom method
    grabValueFromInput=(e)=>{
     /*  console.log("user is typing") */
      //store input data into state

      let filteredEmoji = emojiList.filter(item=>{
        //input value 
        let inputvalue = e.target.value.toLowerCase()

        if(item.title.toLowerCase().includes(inputvalue)){
          return true
        }
        if(item.keywords.toLowerCase().includes(inputvalue))
        {
          return true
        }
        return false

      })

      this.setState({
        searchValue:e.target.value,
        emojiData:filteredEmoji
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
              <EmojiContainer emojiData={this.state.emojiData}/>
            </div>
          );
}
}




export default App;