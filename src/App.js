import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import MovieDisplay from "./Components/MovieDisplay";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
     <Form />
      <MovieDisplay />     
    </div>
  );
}

export default App;


