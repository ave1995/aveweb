import { Link } from 'react-router-dom';
import './css/Sidebar.scss';

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <section id="intro">
                <Link to="/" className="logo">
                    <img src="/img/transmeme.png" alt="" className="portrait"/>
                </Link>
                <h3>Aleš Veselý</h3>
            </section>
        </section>
    );
}