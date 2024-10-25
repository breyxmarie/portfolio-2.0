import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Routes>
      <Route
                  path="/"
                  element={
                    <>
                      <Home/>
                    </>
                  }
                />
        </Routes>
        </BrowserRouter>
   
  )
}

export default App
