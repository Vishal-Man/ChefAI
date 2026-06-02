import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import Header from './components/Header.jsx'
//import Card from './SoundPad/SoundPad'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/*<Card darkMode={false}/>*/}
    <App/>
  </StrictMode>
)
