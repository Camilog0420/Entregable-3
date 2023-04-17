import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './assets/helpers/random'
import axios from 'axios'
import Location from './assets/components/Location'
import ResidentList from './assets/components/ResidentList'
import Portal from './assets/components/Portal'



function App() {
  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  },[])

  
  return (
    <div className="App bg-black text-[#8EFF8B]">
      <Portal />
      <form className='flex  items-center gap-10 pb-20 flex-col' onSubmit={handleSubmit}>
        <div className='border border-[#8EFF8B]
        pl-4'>
          <input className='bg-black border-0' id='locationId' type="text" placeholder='Type a location Id ...' />
          <button className='outline-none border-r-[#8EFF8B] border-[#8EFF8B] bg-[#8EFF8B]/30 text-white p-3'>Search <i className='bx bx-search'></i></button>
        </div>

        <h2>Welcome to the crazy universe!</h2>
      </form >
      <Location location={location}/>
      <ResidentList location={location}/>
    </div>
  )
}

export default App
