import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting'
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
