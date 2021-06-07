import { Link, NavLink } from 'react-router-dom'
import './navigation.css'
const Navigation = ()=>{
    return (
            <nav className="navbar">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" activeClassName="btn btn-primary">Movies</NavLink>
                    </li>
                </ul>
            </nav>
        )
}
export { Navigation } 