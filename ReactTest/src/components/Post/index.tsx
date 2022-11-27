import React, {useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {Wrapper} from './Post.styles';

type TVote = 'up' | 'down';

const Post = () => {
  const [counter, setCounter] = useState<TVote>();
  
  const increaseCounter = () => {
    setCounter('up');
  };

  const decreaseCounter = () => {
    setCounter('down');
  };
  
  return (
    <Wrapper>
      <Button variant='contained' color='primary' onClick={increaseCounter} disabled={counter === 'up'}>
        <ArrowUp />
      </Button>
      <Typography>{counter}</Typography>
      <Button variant='contained' color='primary' onClick={decreaseCounter} disabled={counter === 'down'}>
        <ArrowDown />
      </Button>
    </Wrapper>
  );
};

export default Post;