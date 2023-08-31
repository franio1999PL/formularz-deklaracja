import { useState, createContext } from 'react'

const AppContext = createContext()

export default function ContextProvider ({ children }) {
  const [privacy, setPrivacy] = useState(false)

  const togglePrivacy = () => {
    setPrivacy(!privacy)
  }
  return (
    <div>
      <AppContext.Provider value={{ privacy, togglePrivacy }}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

export { AppContext, ContextProvider }
