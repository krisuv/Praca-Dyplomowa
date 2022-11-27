import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {About, Home, Sources} from './pages';

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sources' element={<Sources />} />
      </Routes>
    </Box>
  );
};

export default App;
