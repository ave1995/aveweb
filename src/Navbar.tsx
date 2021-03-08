import { Link } from 'react-router-dom'
import 'tailwindcss/tailwind.css';

export const Navbar = () => {
    return (
        <nav className="text-lg font-semibold">
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

