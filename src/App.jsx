import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

import Index from '@/routes/index';
import About from '@/routes/about';
import Contact from '@/routes/contact';
import Global from '@/routes/global';
import Products from '@/routes/products';
import Quality from '@/routes/quality';

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-2xl font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/global" element={<Global />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
