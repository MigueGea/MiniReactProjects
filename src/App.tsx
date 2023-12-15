import { FC, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = ()=> {
  const [count, setCount] = useState(0)

  return (
    <><div id="mainDiv" style={{backgroundColor:'DarkSlateGrey', border: "2px solid #F0E68C", borderRadius:"25px"}}>
        <div>
          <h1>Clicker</h1>
        </div>
        <h2>The counter is {count}</h2>
        <div className="card">
        <button onClick={() => setCount((count) => count -1)}>
          <i className="fa fa-2x fa-minus" style={{color:'red'}}/>
          </button>
          <button onClick={() => setCount((count) => count = 0)}>
          <i className="fa fa-2x fa-refresh" style={{color:'orange'}}/>
          </button>
          
          <button onClick={() => setCount((count) => count + 1)}>
          <i className="fa fa-2x fa-plus" style={{color:'green'}}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
