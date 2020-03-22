import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './containers/Body';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
