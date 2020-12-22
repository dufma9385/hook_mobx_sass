import React from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';
import WriteForm from './components/WriteForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <SuperMarket />
      <hr></hr>
      <WriteForm />
    </div>
  );
}

export default App;
