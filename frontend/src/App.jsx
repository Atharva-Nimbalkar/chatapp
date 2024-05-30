// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route index path="/connectnow/login" element={<Login/>}/>
          <Route path="/connectnow/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
