import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Home = lazy(() => import('../routes/Home'));
const Sobre = lazy(() => import('../routes/Sobre'));

const AppRotas = () => (
  <Router>
      <Suspense fallback={<div>Carregando...</div>}>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/sobre" element={<Sobre />} />
         </Routes>
      </Suspense>
  </Router>
);

export default AppRotas;