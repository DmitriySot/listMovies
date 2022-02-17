import React from 'react';
import { Grid, styled } from '@mui/material';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { moviesAtom } from 'recoil/atom';

const StyledWrapperGrid = styled(Grid)({
  padding: '10px 30px',
  width: '100%',
  minHeight: '200px',
  background: 'lightgray',
});

const StyledTitle = styled('div')({
  marginRight: '100px',
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const StyledwrapperTitle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledwrapperBlock = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
});

const StyledAnnotation = styled('div')({
  minWidth: '120px',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

const StyledFavorite = styled('div')`
  height: 32px;
  :hover {
    cursor: pointer;
  }
`;

const StyledDescription = styled('div')({});

const MovieDescription = () => {
  const [film, setFilm] = React.useState<{ [key: string]: string }>({});
  const [movieState, setMovieState] = useRecoilState(moviesAtom);

  const getDescription = async () => {
    console.log('__movieState__', movieState);
    try {
      const res = await axios(`https://swapi.dev/api/films/${movieState.selectedMovie}`);
      console.log('__res__', res.data);
      setFilm(res.data);
    } catch (e) {
      console.log('__e__', e);
    }
  };

  React.useEffect(() => {
    getDescription();
  }, [movieState.selectedMovie]);

  const data = [
    { title: 'Episod:', description: film.episode_id },
    { title: 'Director:', description: film.director },
    {
      title: 'Created date:',
      description: new Date(film.release_date).getFullYear(),
    },
    { title: 'Description:', description: film.opening_crawl },
  ];

  const onToggleFavorite = () => {
    const favorites = [...movieState.favoriteMovies];
    console.log('__favoriteMovies__', favorites);
    const selected = movieState.selectedMovie;
    if (favorites.includes(selected)) {
      const index = favorites.findIndex((item) => item === selected);
      favorites.splice(index, 1);
    } else {
      favorites.push(selected);
    }
    setMovieState({ ...movieState, favoriteMovies: favorites });
  };

  const isFavorite = React.useMemo(() => {
    const favorites = [...movieState.favoriteMovies];
    const selected = movieState.selectedMovie;
    return favorites.includes(selected);
  }, [movieState.favoriteMovies.length, movieState.selectedMovie]);

  return (
    <StyledWrapperGrid xs={12} sm={12}>
      <StyledwrapperTitle>
        <StyledTitle>{film.title}</StyledTitle>
        <StyledFavorite onClick={onToggleFavorite}>
          {isFavorite ? <img src="/favorite.png" /> : <img src="/not_favorite.png" />}
        </StyledFavorite>
      </StyledwrapperTitle>

      {data.map((item) => {
        return (
          <StyledwrapperBlock key={item.title}>
            <StyledAnnotation>{item.title} </StyledAnnotation>
            <StyledDescription>{item.description}</StyledDescription>
          </StyledwrapperBlock>
        );
      })}
    </StyledWrapperGrid>
  );
};

export default MovieDescription;
