import { Link } from 'react-router-dom';
import './css/Navbar.scss';
// import { MouseEvent } from 'react';
import { HamburgerMenu } from './HamburgerMenu'

import routes from '../src/data/routes'

export const Navbar = () => {

    // const handleClick = (e: MouseEvent) => {
    // }
    return (
        <header className="header">
            <div className="container">
                <h1 className="ave">
                    {routes.filter(r => r.index).map(r => (
                        <Link key={r.label} to={r.path}>
                            {r.label}
                        </Link>
                    ))}
                </h1>
                <HamburgerMenu />
                {/* <div className="burger" onClick={handleClick}>
                    <FontAwesomeIcon icon="bars" size="lg" />
                </div> */}
                {/* <nav className="links">
                    <FontAwesomeIcon icon="times" className="close" />
                    <ul className="primary-nav">
                        <li className="">
                            <Link to="/about">O mně</Link>
                        </li>
                        <li className="">
                            <Link to="/skills">Dovednosti</Link>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </header>
    );
}


// import 'tailwindcss/tailwind.css';

// export const Navbar = () => {
//     return (
//         <nav className="flex border-b-2 border-indigo-700 space-x-8 font-serif md:font-Times ">
//             <div className="font-black uppercase text-xl pl-2 pr-4">
//                 <Link to="/" className="tracking-widest" >Aleš Veselý</Link>
//             </div>
//             <div className="space-x-8">
//                 <ul className="inline-block">
//                     <li className="leading-none">
//                         <Link to="/about">O mně</Link>
//                     </li>
//                     <li className="leading-none">
//                         <Link to="/skills">Dovednosti</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

