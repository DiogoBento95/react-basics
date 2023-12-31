import React from 'react';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes, //Switch
  Route,
} from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div className='relative min-h-screen'>
      <Router>

        <Header />

        <div className='p-3'>
          <Routes>
            <Route exact path="/" element={<Home />}> </Route> 
            <Route path="/about" element={<About />}> </Route>
            <Route path="/products/:id" element={<Product />}> </Route>
          </Routes>
        </div>

        <CounterExample />

        <Footer />

      </Router>

    </div>
  );
}

export default App;
