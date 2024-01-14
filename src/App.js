import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Exchange from './component/Exchange'
import Coins from './component/Coins'
import CoinDetails from './component/CoinCard';

function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/exchange' element={<Exchange/>}></Route>
      <Route path='/coins' element={<Coins/>}></Route>
      <Route path='/coins/:id' element={<CoinDetails/>}></Route>
    </Routes>
   </Router>
    </>
  );
}

export default App;
