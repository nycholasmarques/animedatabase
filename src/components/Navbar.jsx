import '../styles/Navbar.scss'

import { Link } from 'react-router-dom'

import SearchInput from './SearchInput'



function Navbar() {
  return (
    <nav id='nav'>
      <h1>
        <Link to={`/`}>
        The<strong>Anime</strong>Database
        </Link>
      </h1>
      <SearchInput />
    </nav>
  )
}

export default Navbar