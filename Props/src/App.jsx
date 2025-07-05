import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Student from './student.jsx'

function App() {
  return (
    <>
     {/* <Student name="Ayesha Nadeem" age={20} course="Software Engineering" isStudent={true} />
    <Student name="Irtiza Ali" age={20} course="Information Technology" isStudent={false} />
    <Student course="Information Technology" isStudent={false} />
    <Student name="Irtiza Ali" isStudent={false} />  */}

    <Student />
    </>
  )
}

export default App
