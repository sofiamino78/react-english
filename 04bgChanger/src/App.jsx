import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function setColor(color) {
  //   setColor(color)
  // }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              style={{backgroundColor: 'red'}}
              onClick={() => setColor('red')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Red
            </button>
            <button
              style={{backgroundColor: 'green'}}
              onClick={() => setColor('green')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Green
            </button>
            <button
              style={{backgroundColor: 'blue'}}
              onClick={() => setColor('blue')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Blue
            </button>
            <button
              style={{backgroundColor: 'pink'}}
              onClick={() => setColor('pink')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Pink
            </button>
            <button
              style={{backgroundColor: 'orange'}}
              onClick={() => setColor('orange')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Orange
            </button>
            <button
              style={{backgroundColor: 'yellow'}}
              onClick={() => setColor('yellow')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Yellow
            </button>
            <button
              style={{backgroundColor: 'magenta'}}
              onClick={() => setColor('magenta')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Magenta
            </button>
            <button
              style={{backgroundColor: 'black'}}
              onClick={() => setColor('black')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            >
              Black
            </button>
            <button
              style={{backgroundColor: 'white'}}
              onClick={() => setColor('white')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            >
              White
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
