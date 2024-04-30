import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import WeatherApp from './Components/WeatherApp'


function App() {
  

  return (
    <ChakraProvider>
      <WeatherApp/>
    </ChakraProvider>
  )
}

export default App
