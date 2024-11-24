import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Links from './components/Links'
import Time from './components/Time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-800'>
      <Navbar />

      <div className="flex h-[93vh]">
        <div className="px-10 py-5 links w-1/2 h-full ">
          <Links />
        </div>
        
        <div className="px-10 py-5 links w-1/2 h-[60vh]">
          <Time />
        </div>
       
      </div>

    </div>
  )
}

export default App
