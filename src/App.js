import React from 'react'

import { CTA, Brand , Navbar} from './components/index';
import { Footer , Features , Blog, Header , Possibility , WhatGPT3} from './containers/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
