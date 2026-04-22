import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import HuskyExpo from './pages/HuskyExpo'
import News from './pages/News'
import Events from './pages/Events'
import Team from './pages/Team'
import './App.css'

export default function App() {
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
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
