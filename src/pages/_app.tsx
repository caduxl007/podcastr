import { useState } from 'react';


import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { PlayerContent } from '../contexts/PlayerContent';

import '../styles/global.scss';
import  styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); 

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
   <PlayerContent.Provider value={{ episodeList, currentEpisodeIndex, isPlaying, play, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
   </PlayerContent.Provider>
  )
}

export default MyApp
