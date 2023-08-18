import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/shared/Header'
import AboutPage from './pages/AboutPage'
import PortafolioPage from './pages/PortafolioPage'

function App() {
  return (
    <div className='principal__main'>
      <Header />
      <div className='secondary__main'>
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/portafolio' element={<PortafolioPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
