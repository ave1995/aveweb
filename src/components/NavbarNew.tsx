import { Link } from 'react-router-dom';
import * as GoIcons from 'react-icons/go'

export const NavbarNew = () => {
    return (
        <header>
            <div className="nbar">
                <Link to="/Activity" className="menu-bars">
                    <GoIcons.GoMarkGithub />
                </Link>
            </div>
        </header>
    )
}