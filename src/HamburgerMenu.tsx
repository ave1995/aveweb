import { useState, Suspense } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/HamburgerMenu.scss';

import routes from '../src/data/routes'

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="hamburger-container">
            {/* <nav className="main" id="hamburger-nav">
                <ul>
                    {open
                        ? (
                            <li className="menu close-menu">
                                <div onClick={() => { setOpen(!open); console.log(open); }} className="menu-hover">
                                </div>
                            </li>
                        )
                        : (
                            <li className="menu open-menu">
                                <div onClick={() => { setOpen(!open); console.log(open); }} className="menu-hover">
                                </div>
                            </li>
                        )
                    }
                </ul>
            </nav> */}
            <Suspense fallback={<h1>Loading profile...</h1>}>
                <Menu right isOpen={open}>
                    <ul className="hamburger-ul">
                        {routes
                            .filter(r => !(r.index))
                            .map(r => (
                                <li key={r.label}>
                                    <Link to={r.path} onClick={() => setOpen(!open)}>
                                        {r.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Menu>
            </Suspense>
        </div>
    );
};

export default HamburgerMenu;