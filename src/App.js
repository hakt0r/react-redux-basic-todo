import React from 'react';
import './App.css';

import List   from './component/list'
import Editor from './component/editor'

export default function App(props) { return (
  <div className="App">
    <Editor/>
    <List/>
  </div> )}
