import './scss/main.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Partners from './pages/Partners';
import CardDetail from './components/CardDetail/CardDetails';
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars/:id' element={<CardDetail />} />
          <Route path='/partners' element={<Partners />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
