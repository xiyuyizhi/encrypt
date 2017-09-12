import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom"
import Generate from "./compoents/gene/generate"
import Encode from "./compoents/encode/encode"
import Decode from "./compoents/decode/decode"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <ul className="nav">
              <li><NavLink to="generate">生成</NavLink></li>
              <li><NavLink to="encode">加密</NavLink></li>
              <li><NavLink to="decode">解密</NavLink></li>
            </ul>
          </div>
          <div className="Main">
            <Route exact path="/" render={()=>{
              return <Redirect to="/generate"></Redirect>
            }}></Route>
            <Route path="/generate" component={Generate}></Route>
            <Route path="/encode" component={Encode}></Route>
            <Route path="/decode" component={Decode}></Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
