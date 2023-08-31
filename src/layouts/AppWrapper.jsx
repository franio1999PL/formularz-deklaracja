import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import CookieConsent from 'react-cookie-consent'

export default function AppWrapper ({ children }) {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-slate-200'>
      <Navbar />
      {children}
      <CookieConsent buttonText='Rozumiem i przechodzę dalej..'>
        Ta strona korzysta z plików cookies więcej informacji na ten temat jest
        w menu strony Polityka Prywatności. Wchodząc na stronę akceptujesz pliki
        cookies.
      </CookieConsent>
    </div>
  )
}
