import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import '../styles/components/SearchInput.scss'


function SearchInput() {
    const [search, setSearch] = useState('')
     const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (!search) return
        navigate(`/search/anime?filter[text]=${search}`)
        setSearch('')
      }    

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Buscar anime' onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button type='submit'>
        <BiSearchAlt2 />
        </button>
      </form>
  )
}

export default SearchInput