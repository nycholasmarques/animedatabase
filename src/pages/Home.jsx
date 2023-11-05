
import '../styles/pages/Home.scss'
import AnimeCards from '../components/AnimeCards'
import { useState, useEffect } from 'react'

const URL_API = 'https://kitsu.io/api/edge/trending/anime'

function Home() {

  const [topAnimes, setTopAnimes] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      const topRatedUrl = `${URL_API}?limit=${cardsToShow}`;
      const res = await fetch(topRatedUrl);
      const data = await res.json();
      setTopAnimes(data.data);
    };

    fetchData();
  }, [cardsToShow]);

  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + 9);
  };



  return (
    <section className="container">
      <h2 className="title">ANIME TRENDING</h2>
      <div className="animes-container">
        {topAnimes.length === 0 && <p>Carregando...</p>}
        {topAnimes.length > 0 &&
          topAnimes.map((anime) => <AnimeCards key={anime.id} movie={anime} />)}
      </div>
      {topAnimes.length > 0 && topAnimes.length <= cardsToShow && (
        <button onClick={handleLoadMore} className="load-more-button">
          Carregar Mais
        </button>
      )}
    </section>
  );
}

export default Home