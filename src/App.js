import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './containers/Home';
import DetailContainer from './containers/DetailContainer';
import './main.scss';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card/:id' element={<DetailContainer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
);

export default App;
