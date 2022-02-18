import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import { useRecoilState } from 'recoil';
import { moviesAtom } from 'recoil/atom';
import { Grid } from '@mui/material';

const StyledHeaderWrapper = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledItem = styled('div')({
  margin: '10px 20px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  '&:hover': {
    color: 'yellow',
    cursor: 'pointer',
  },
});

const Header = () => {
  const [moviesState, setMoviesState] = useRecoilState(moviesAtom);

  const onChangeList = () => {
    setMoviesState({ ...moviesState, selectedMovie: 1 });
  };

  const onChangefavoriteList = () => {
    setMoviesState({ ...moviesState, selectedMovie: moviesState.favoriteMovies[0] });
  };

  return (
    <StyledHeaderWrapper xs={12} sm={12}>
      <StyledItem onClick={onChangeList}>
        <Link to="/">Все фильмы</Link>
      </StyledItem>
      <StyledItem onClick={onChangefavoriteList}>
        <Link to="/favorite">Избранное</Link>
      </StyledItem>
    </StyledHeaderWrapper>
  );
};

export default Header;
