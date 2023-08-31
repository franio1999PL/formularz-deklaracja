import { useContext } from 'react'
import { AppContext } from './context/ContextProvider'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App () {
  const { privacy } = useContext(AppContext)
  return (
    <div className='w-full'>
      {privacy ? (
        <>
          <PrivacyPolicy />
        </>
      ) : (
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSdnSuR2RhdFnVdxRQv76jv0ttCH7y-QJtzyrVFszdSLVmRi8g/viewform?embedded=true'
          width='100%'
          height='1080px'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
          className='w-full'
        >
          Ładuję…
        </iframe>
      )}
    </div>
  )
}
