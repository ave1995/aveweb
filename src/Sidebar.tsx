import { Link } from 'react-router-dom';

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