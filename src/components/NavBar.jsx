import './NavBar.css';

function NavBar({ setCurrentPage }) {
  const navLinks = [
    {id: 'home', label: 'Home'},
    {id: 'profile', label: 'Profile'},
    {id: 'settings', label: 'Settings'},
    {id: 'search', label: 'Search'},
    {id: 'saved', label: 'Bookmarks'}
  ]
    return (
      <nav className='nav-bar'>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => setCurrentPage(link.id)}
                    >{link.label}</button>
            </li>
          ))}
        </ul>
      </nav>
      )
}


export default NavBar;