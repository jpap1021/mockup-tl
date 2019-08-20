import React from 'react';
import Header from './app/header/header';
import Body from './app/body/body';
import './App.css';
import Search from './app/search/search';

function App() {
  return (
    <div className="app-component">
      <Search></Search>
      <div className="app-content">
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
