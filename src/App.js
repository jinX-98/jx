import React from 'react';
import "./App.css"
// import { Carousel, WingBlank } from 'antd-mobile';
@decor
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>1234</h1>
      </div>
    )
  }
}

function decor(target){
  console.log(target)
}

export default App