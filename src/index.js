import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ValentinesPage from './Pages/ValentinesPage';
import CauseEffectPage from './Pages/CauseEffect/CauseEffectPage';

import Cpage from './Pages/CauseEffect/Cpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<ValentinesPage />} />
   <Route path='/practiceTailWind' element={<App />} />
   <Route path='/causeEffectApp' element={<CauseEffectPage />} />
   <Route path='/causeEffectApp/:name' element={<Cpage />} />
    </Routes>
  </BrowserRouter>
);


