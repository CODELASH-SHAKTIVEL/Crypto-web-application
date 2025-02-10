import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading components
const Header = lazy(() => import('./component/Header'));
const Home = lazy(() => import('./component/Home'));
const Exchange = lazy(() => import('./component/Exchange'));
const Coins = lazy(() => import('./component/Coins'));
const CoinDetails = lazy(() => import('./component/CoinDetails'));
const Footer = lazy(() => import('./component/Footer'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
