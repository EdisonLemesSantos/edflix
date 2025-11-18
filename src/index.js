import React from 'react';
import ReactDOM from 'react-dom/client'; // em versões novas usa-se react-dom/client
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (<div>Página 404</div>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
);
