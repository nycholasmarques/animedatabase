import '../styles/components/AnimeCards.scss'

import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function AnimeCards(anime, showLink = true) {
  function wordLimit (text, limit) {
    const words = text.split(' ')

    if (words.length <= limit) {
        return text
    } 
    else {
        const textLimit = words.slice(0, limit).join(' ')
        return `${textLimit}...`
    }
  }

  const { attributes, id } = anime.movie || anime.anime //verifica se tem um ou outro
  const canonicalTitle = attributes?.canonicalTitle
  const posterImage = attributes?.posterImage
  const averageRating = attributes?.averageRating



  return (
      <div className="card">
        <img src={posterImage.small} alt={canonicalTitle} id='imgCard' />
        <h2 className='title'>{wordLimit(canonicalTitle, 10)}</h2>
        <div className='rating'>
            <FaStar />
            {averageRating !== null && averageRating !== "" ? (
                <p>Rating: {averageRating}</p>
              ) : (
                <p>No scorer available</p>
              )}
        </div>
        {showLink && <Link to={`/${id}`}>Detalhes</Link>}
    </div>
  )
}

export default AnimeCards