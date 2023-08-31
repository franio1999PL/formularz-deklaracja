import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppWrapper from './layouts/AppWrapper.jsx'
import './index.css'
import ContextProvider from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ContextProvider>
  </React.StrictMode>
)
