import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ValentinesPage from './Pages/ValentinesPage/ValentinesPage';
import CauseEffectPage from './Pages/CauseEffect/CauseEffectPage';

import Cpage from './Pages/CauseEffect/Cpage';
import TailwindPractice from './Pages/TailwindPractice/TailwindPractice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    // Main Route
   <Route path='/' element={<App />} />

   // Tailwind Practice Page Routes
   <Route path='/practiceTailWind' element={<TailwindPractice />} />

   // Cause Effect Page Routes
   <Route path='/causeEffectApp' element={<CauseEffectPage />} />
   <Route path='/causeEffectApp/:name' element={<Cpage />} />

   
    </Routes>
  </BrowserRouter>
);


