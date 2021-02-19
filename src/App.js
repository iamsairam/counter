import React from 'react';
import "./App.css";
import Counter from './Counter';

function App(props) {
  return (
    <div className='App'>
      <div style={{paddingTop:'10vh'}}>
      <div className='app-title'>React Counter</div>
      <Counter />
      </div>
    </div>
  );
}

export default App;