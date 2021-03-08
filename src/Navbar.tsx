import { Link } from 'react-router-dom'
import 'tailwindcss/tailwind.css';

export const Navbar = () => {
    return (
        <nav className="flex border-b-2 border-indigo-700 space-x-8 font-serif md:font-Times ">
            <div className="uppercase text-xl pl-2 pr-4">
                <Link to="/" className="tracking-widest" >Aleš Veselý</Link>
            </div>
            <div className="space-x-8">
                <Link to="/about" className="">O mně</Link>
                <Link to="/skills" className="">Dovednosti</Link>
            </div>
        </nav>
    );
}

