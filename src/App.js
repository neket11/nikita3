import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';

function NoMatch() {
  let location = useLocation();
  
  return (
    <>
    <h1>Oops!</h1>
    <h3>Sorry, an unexpected error has occurred</h3>
    <h5>Does not exist: {location.pathname}</h5>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container content'>
          <Routes>
          <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="category/:name" element={<Category />} />
            <Route path="meal/:id" element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

