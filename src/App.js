import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/counterSlice';
import { Button, Container, Typography, Box } from '@mui/material';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '2rem',
        }}
      >
        Redux Counter
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => dispatch(increment())}
          sx={{
            marginRight: '1rem',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
          }}
        >
          +
        </Button>
        <Typography
          variant="h4"
          sx={{
            margin: '0 2rem',
            fontWeight: 'bold',
            color: '#1976d2',
          }}
        >
          {count}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => dispatch(decrement())}
          sx={{
            marginLeft: '1rem',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
          }}
        >
          -
        </Button>
      </Box>

      <Button
        variant="outlined"
        color="error"
        size="large"
        onClick={() => dispatch(reset())}
        sx={{
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        Reset
      </Button>
    </Container>
  );
}

export default App;
