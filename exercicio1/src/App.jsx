import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './Nav'
import Card from './Card'

function App() {

return (
<div className="App">
  
  <Nav />

  <div class="row row-cols-4 row-cols-md-4 g-4">
        <div class="col">
          <Card/>
          <Card/>
        </div>
        <div class="col">
          <Card/>
          <Card/>
        </div>
        <div class="col">
          <Card/>
          <Card/>
        </div>
        <div class="col">
          <Card/>
          <Card/>
        </div>
      </div>
  </div>
)
}

export default App
