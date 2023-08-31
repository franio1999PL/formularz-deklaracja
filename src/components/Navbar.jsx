import { useContext } from 'react'
import { AppContext } from '../context/ContextProvider'

export default function Navbar ({ privacy, setPrivacy }) {
  const { togglePrivacy } = useContext(AppContext)
  return (
    <header className='w-full bg-slate-50 p-4 text-center'>
      <nav>
        <ul>
          <li className='text-2xl font-bold hover:cursor-pointer hover:underline'>
            {privacy ? (
              <span className='selection:bg-inherit' onClick={togglePrivacy}>
                Formularz
              </span>
            ) : (
              <span className='selection:bg-inherit' onClick={togglePrivacy}>
                Polityka Prywatności
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
