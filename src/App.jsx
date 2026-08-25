import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import HuskyExpo from './pages/HuskyExpo'
import News from './pages/News'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Join from './pages/Join'
import Labs from './pages/Labs'
import Sponsors from './pages/Sponsors'
import './App.css'

export default function App() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    if (!loader) return
    loader.classList.add('loader--hidden')
    const tid = setTimeout(() => loader.remove(), 400)
    return () => clearTimeout(tid)
  }, [])

  return (
    <HashRouter>
      <div className="app-layout">
        <ScrollToTop />
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/huskyexpo" element={<HuskyExpo />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<Join />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
