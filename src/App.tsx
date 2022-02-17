import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import MoviesList from 'components/MoviesList';
import MovieDescription from 'components/MovieDescription';
import { styled } from '@mui/material';
import FavoriteMoviesList from 'components/FavoriteMoviesList';

const StyledWrapper = styled('div')({
  minWidth: '450px',
  background: 'gray',
  width: '100%',
  padding: '10px',
  margin: '0 auto',
  boxSizing: 'border-box',
});

function App() {
  return (
    <StyledWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/favorite" element={<FavoriteMoviesList />} />
      </Routes>
      <MovieDescription />
    </StyledWrapper>
  );
}

export default App;
