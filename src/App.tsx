import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Todoapp from './Component/Todoapp/Todoapp'

function App() {
  return (
    <div className="App">
              <Todoapp />
    </div>
  );
}

export default App;
