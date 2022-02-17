import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import { useRecoilState } from 'recoil';
import { moviesAtom } from 'recoil/atom';

const StyledHeaderWrapper = styled('div')({
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
  // const [moviesState, setMoviesState] = useRecoilState(moviesAtom);
  //
  // const onFavoriteClick = () => {};

  return (
    <StyledHeaderWrapper>
      <StyledItem>
        <Link to="/">Все фильмы</Link>
      </StyledItem>
      <StyledItem>
        <Link to="/favorite">Избранное</Link>
      </StyledItem>
    </StyledHeaderWrapper>
  );
};

export default Header;
