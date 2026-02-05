import './NavBar.css';

function NavBar() {
    return (
      <nav className="nav-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#search">Search</a></li>
        </ul>
      </nav>
      )
}


export default NavBar;