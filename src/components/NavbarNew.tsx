import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as GoIcons from 'react-icons/go'

import * as SidebarData from '../data/SidebarData.json'

export const NavbarNew = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header>
            <div className="nbar">
                <Link to="/Activity" className="menu-bars">
                    <GoIcons.GoMarkGithub onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="/Activity" className="menu-bars">
                            <GoIcons.GoX />
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}