import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import AnimeCards from '../components/AnimeCards'

import '../styles/pages/Search.scss'

const URL_API = 'https://kitsu.io/api/edge'

function Search() {
    const [SearchParams] = useSearchParams()
    const filter = SearchParams.get('filter[text]')

    const [anime, setAnimes] = useState([])

    const getSearchAnime = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setAnimes(data.data)
    }

    useEffect(() => {
        const searchWithParams = `${URL_API}/anime?filter[text]=${filter}&page[limit]=15`
        getSearchAnime(searchWithParams)
    }, [filter])


  return (
    <div className='container'>
        <h2>Resultados para: <span>{filter}</span></h2>
        <div className="anime-container">
            {anime.length === 0 && <p>Carregand...</p>}
            {anime.length > 0 && anime.map((anime) => <AnimeCards key={anime.id} anime={anime} />)}
        </div>
    </div>
  )
}

export default Search