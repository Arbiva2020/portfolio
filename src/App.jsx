// import { useState } from 'react';
import Sidenav from './components/Sidenav'
import Main from "./components/Main"
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

//https://www.youtube.com/watch?v=22CxRxryQFE

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
