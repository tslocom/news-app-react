import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/userServices.js'

function NavBar() {
  const navigate = useNavigate();
  const navLinks = [
    {id: 'home', label: 'Home'},
    {id: 'profile', label: 'Profile'},
    {id: 'settings', label: 'Settings'},
    {id: 'search', label: 'Search'},
    {id: 'bookmarks', label: 'Bookmarks'}
  ]
    return (
      <nav className='nav-bar'>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button>
                <Link to={link.id}>{link.label}</Link>
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => {
                logout();
                navigate('/login')}}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
      )
}


export default NavBar;