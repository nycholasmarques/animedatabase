import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import '../styles/pages/Anime.scss'

import { FaStar } from 'react-icons/fa'

const URL_API = 'https://kitsu.io/api/edge/anime'

function Anime() {

    const {id} = useParams()
    const [anime, setAnime] = useState(null) //ate finalizar, vai ser nulo


    const getAnime = async (url) => {
      try {
      const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`Erro na requisição: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json()
        setAnime(data)
      } catch (error) {
        console.error(error);
      }
    }

    

    useEffect(() => {
        const searchWithParams = `${URL_API}/${id}?include=categories`
        getAnime(searchWithParams)
    }, [id])

   
    
    if (!anime) { //caso não tenha condição, código não funcionaria por estarmos fazendo uma requição a api de maneira async
      return <div>Carregando...</div>;
    }

    const {canonicalTitle, posterImage, synopsis, averageRating, status, youtubeVideoId} = anime.data.attributes

    
  return (
    <section>
      <div className="anime-grid">
          <div className="anime-side">
            <h2 id="title-responsive">{canonicalTitle}</h2>
          <img src={posterImage.small} alt={canonicalTitle} id='imgCard' />
          <div className="anime-detail">
            <div className='rating'>
              <FaStar />
              {averageRating !== null && averageRating !== "" ? (
                <p>Rating: {averageRating}</p>
              ) : (
                <p>No scorer available</p>
              )}
            </div>
            <div className="status">
              <p><strong>Status:</strong> {status}</p>
            </div>         
            <div id="trailer">
              <a href={`https://www.youtube.com/watch?v=${youtubeVideoId}`} target="_blank" rel="noreferrer">Trailer</a></div>
          </div>
          </div>

          <div className="anime-info">
            <h2>{canonicalTitle}</h2>
            <div className="genres">
              <ul>
                  {anime.included.slice(0, 7).map((genre) => {
                    return (
                      <li key={genre.id}>{genre.attributes.slug}</li>
                    )
                  })}
              </ul>
            </div>
            <div className="description">
              <h3>Synopsis</h3>
              <p>{synopsis}</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Anime