import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Usuarios from './pages/Usuarios'
import Listagem from './pages/Listagem'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="brand">Fortnite</div>
          <nav className="app-nav">
            <Link to="/listagem">Lobby</Link>
            <Link to="/usuarios">Cadastro</Link>
            <Link to="/">Login</Link>
          </nav>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/listagem" element={<Listagem />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
