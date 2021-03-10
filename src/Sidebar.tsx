
import { Link } from 'react-router-dom';


export const Sidebar = () => {
    return (
        <section className="sidebar">
            <section id="intro">
                <Link to="/" className="logo">
                    <img src="/img/meme.jpg" alt="" />
                </Link>
                <header>
                    <h2>Michael D&apos;Angelo</h2>
                    <p><a href="mailto:michael.l.dangelo@gmail.com">michael.l.dangelo@gmail.com</a></p>
                </header>
            </section>
        </section>
    );
}