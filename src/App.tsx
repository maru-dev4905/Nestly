import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Layout/Sidebar.tsx'
import TopBar from './components/Layout/TopBar.tsx'
import Home from './pages/Home.tsx'
import Focus from './pages/Focus.tsx'
import Tasks from './pages/Tasks.tsx'
import Films from './pages/Films.tsx'
import Memo from './pages/Memo.tsx'
import Plans from './pages/Plans.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="app-main">
          <TopBar />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/focus" element={<Focus />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/films" element={<Films />} />
              <Route path="/memo" element={<Memo />} />
              <Route path="/plans" element={<Plans />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
