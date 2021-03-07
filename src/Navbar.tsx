import { Link } from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <div className="links">
                    <Link to="/">Aleš Veselý</Link>
                    <Link to="/about">O mně</Link>
                    <Link to="/skills">Dovednosti</Link>
                </div>
            </div>
        </nav>
    );
}

