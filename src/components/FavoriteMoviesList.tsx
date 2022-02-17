import React from 'react';
import { Grid, styled } from '@mui/material';
import axios from 'axios';
import { getNumber } from 'helper';
import { useRecoilState } from 'recoil';
import { moviesAtom } from 'recoil/atom';

const StyledWrapperGrid = styled(Grid)({
  padding: '10px 30px',
  width: '100%',
  minHeight: '200px',
  background: 'black',
});

const StyledFilmWrapper = styled('div')`
  color: lightgray;
  margin: 10px 0;
  font-size: 18px;
  :hover {
    color: aqua;
    cursor: pointer;
  }
`;

const FavoriteMoviesList = () => {
  const [listFilms, setListFilms] = React.useState<{ [key: string]: string }[]>([]);
  const [moviesState, setMoviesState] = useRecoilState(moviesAtom);

  const getListMovies = async () => {
    try {
      const res = await axios('https://swapi.dev/api/films');
      const data = res.data.results;
      setListFilms(data);
      console.log('__data__', data);
    } catch (e) {
      console.log('__e__', e);
    }
  };
  console.log('__render__');

  React.useEffect(() => {
    getListMovies();
  }, []);

  const onFilmClick = (url: string) => () => {
    const num = getNumber(url);
    setMoviesState({ ...moviesState, selectedMovie: num });
  };

  const filteredList = React.useMemo(() => {
    return listFilms.filter((film) => {
      let number = getNumber(film.url);
      return moviesState.favoriteMovies.includes(number);
    });
  }, [moviesState.favoriteMovies.length]);

  console.log('__filteredList__', filteredList);

  return (
    <StyledWrapperGrid xs={12} sm={12}>
      {filteredList.map((film) => (
        <StyledFilmWrapper key={film.episode_id} onClick={onFilmClick(film.url)}>
          {film.title}
        </StyledFilmWrapper>
      ))}
    </StyledWrapperGrid>
  );
};

export default FavoriteMoviesList;
