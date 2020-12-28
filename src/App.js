import React from 'react';
import Footer from './components/Footer';
import Headers from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Headers />
      <Search/>
      <Footer />
    </div>
  );
}

export default App;
