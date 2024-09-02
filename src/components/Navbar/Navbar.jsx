import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav>
            <div>
                <Link to="/">
                    <h1 className='logo'>LOGO</h1>
                </Link>
            </div>
            <div>
                <ul className='menu-items'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;