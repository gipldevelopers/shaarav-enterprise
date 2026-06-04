import { useEffect, useMemo, useState } from 'react'
import './App.css'

// Common Components
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'

// Pages
import { HomePage } from './pages/Home/HomePage'
import { AboutPage } from './pages/About/AboutPage'
import { ServicesPage } from './pages/Services/ServicesPage'
import { FounderPage } from './pages/Founder/FounderPage'
import { BlogPage } from './pages/Blog/BlogPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { ServiceDetailPage } from './pages/ServiceDetail/ServiceDetailPage'
import { BlogDetailPage } from './pages/BlogDetail/BlogDetailPage'
import { PrivacyPage } from './pages/Privacy/PrivacyPage'
import { TermsPage } from './pages/Terms/TermsPage'

// Data
import { navItems, serviceCards, blogCards } from './constants/data'

function getRouteFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim()
  const route = raw || 'home'
  const detailRoutes = [
    ...serviceCards.map((item) => `service/${item.id}`),
    ...blogCards.map((item) => `blog/${item.id}`),
  ]
  const validRoutes = [...navItems.map((item) => item.route), ...detailRoutes, 'privacy', 'terms']
  return validRoutes.includes(route) ? route : 'home'
}

function App() {
  const [route, setRoute] = useState(() => getRouteFromHash())

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (nextRoute) => {
    window.location.hash = nextRoute === 'home' ? '#/' : `#/${nextRoute}`
  }

  const currentPage = useMemo(() => {
    const matchedService = serviceCards.find((item) => `service/${item.id}` === route)
    if (matchedService) {
      return <ServiceDetailPage service={matchedService} onNavigate={handleNavigate} />
    }

    const matchedBlog = blogCards.find((item) => `blog/${item.id}` === route)
    if (matchedBlog) {
      return <BlogDetailPage post={matchedBlog} onNavigate={handleNavigate} />
    }

    switch (route) {
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />
      case 'founder':
        return <FounderPage />
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage />
      case 'privacy':
        return <PrivacyPage />
      case 'terms':
        return <TermsPage />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }, [route])

  return (
    <div className="site-shell">
      <Header route={route} onNavigate={handleNavigate} />
      <main>{currentPage}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
