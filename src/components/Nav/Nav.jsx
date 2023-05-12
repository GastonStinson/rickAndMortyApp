import SearchBar from '../SearchBar/SearchBar' 
import { Link } from 'react-router-dom'

function Nav({onSearch}) {
    return (
        <div>
            <Link to='/about'>
                <button>About</button>
            </Link>    
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;