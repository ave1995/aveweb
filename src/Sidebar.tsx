
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <section id="intro">
                <Link to="/" className="logo">
                    <img src="/img/meme.jpg" alt="" />
                </Link>
                <h3>Aleš Veselý</h3>
            </section>
        </section>
    );
}