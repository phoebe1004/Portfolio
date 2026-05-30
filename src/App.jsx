import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ResumeSection from './components/sections/ResumeSection'

// App is now only responsible for arranging the main page sections.
// Section-specific logic lives in each component, and editable content lives in src/data/portfolio.js.
function App() {
  return (
    <main className="min-h-screen bg-[#0c1a22] text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}

export default App
