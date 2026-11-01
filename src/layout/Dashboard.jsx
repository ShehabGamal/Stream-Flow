import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import BottomBar from "../components/BottomBar";
import MiniHeader from "../components/MiniHeader";
import MoviePage from "./MoviePage";
import MovieModal from "../sub-components-movie-page/MovieModal";
import poster from "../movie-posters/300.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  background-image: ${(props) => {
    return `url(${props.$moviePoster})`;
  }};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 750px) {
    flex-flow: column wrap;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  gap: 100px;
  height: 100vh;
  width: calc(100vw - 80px);
  overflow: hidden;
  @media (max-width: 750px) {
    width: 375px;
    height: 368px;
    overflow: visible;
  }
  @media (max-width: 1024px) and (min-height: 600px) {
    gap: 30px;
  }
  @media (max-width: 1024px) and (min-height: 800px) {
    gap: 60px;
  }
`;

// Everything shown after login lives here so it is bundled into its own
// lazily-loaded chunk (see React.lazy in App.js).
export default function Dashboard() {
  const [moviePoster, setMoviePoster] = useState(poster);
  const [movieTrailer, setMovieTrailer] = useState(
    "https://www.youtube.com/embed/2zqy21Z29ps?si=IUuyzeTjUV6Ya_7w",
  );
  const [modalstate, setModalState] = useState(false);

  return (
    <Container $moviePoster={moviePoster}>
      <MovieModal
        modalstate={modalstate}
        setModalState={setModalState}
        movieTrailer={movieTrailer}
      />
      <SideBar />
      <MiniHeader />
      <Holder>
        <Header />
        <MoviePage
          setMoviePoster={setMoviePoster}
          setModalState={setModalState}
          setMovieTrailer={setMovieTrailer}
          modalstate={modalstate}
        />
      </Holder>
      <BottomBar />
    </Container>
  );
}
