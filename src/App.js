
import React from 'react';
import List   from './component/list'
import Editor from './component/editor'

import logo from './logo.svg'

export default function App(props) { return (
  <div className="App">
    <img src={logo} alt="todoReduction logo"/>
    <Editor/>
    <List/>
  </div> )}
