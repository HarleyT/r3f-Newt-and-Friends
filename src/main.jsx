import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CharacterAnimationsProvider } from './context/CharacterAnimations'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
  </React.StrictMode>,
)
