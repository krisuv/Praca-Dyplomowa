import {Box} from '@mui/material';
import React from 'react';
import Post from '../../components/Post';

const Home = (): JSX.Element => {
  return (
    <Box>
      <h1>Home</h1>
      <Post />
    </Box>
  );
};

export default Home;