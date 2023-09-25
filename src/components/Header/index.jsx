
import "./style.scss";

const index = () => {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <a className="nav__logo" href="#">D.S</a>

                    <div className="nav__link">
                        <ul className="nav__list">
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">About</a></li>
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">Work</a></li>
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">Testimonials</a></li>
                        </ul>
                        <div className="nav__btn">
                            <i title="Switch to dark" className='bx bx-moon nav__btn--dark'></i>
                            <a className="nav__btn--download" href="#">Download CV</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;