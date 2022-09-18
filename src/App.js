import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { CounterContextProvider } from './countContext';
function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='yeshtery' element={<Home />} />
          <Route path='cart' element={<Cart/>}/>
        </Routes>
        <Footer/>


      </CounterContextProvider>
    </div>

  );
}

export default App;
