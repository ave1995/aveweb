import { Link } from 'react-router-dom';
import './css/Navbar.css';

export const Navbar = () => {
    return (
            <header>
                <div className="">
                    <Link to="/" className="" >Aleš Veselý</Link>
                </div>
                <nav className="">
                    <div className="links">
                        <ul className="">
                            <li className="">
                                <Link to="/about">O mně</Link>
                            </li>
                            <li className="">
                                <Link to="/skills">Dovednosti</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
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

