import { useState } from "react";
import "./style.scss";

const index = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <a className="nav__logo" href="#">D.S</a>

                    {
                        menu ? <i onClick={() => setMenu(true)} className='bx bx-x close-menu'></i> : <i className='bx bx-menu menu'></i>  
                    }
                    
                    <div className="nav__link">
                        <ul className="nav__list">
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">About</a></li>
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">Work</a></li>
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">Testimonials</a></li>
                            <li className="nav__list--item"><a className="nav__list--item-link" href="#">Contact</a></li>
                        </ul>
                        <span className="nav__line">|</span>
                        <div className="nav__btn">
                            <div className="nav__btn--list">
                                <span className="nav__btn--text">Switch Theme</span>
                                <i title="Switch to dark" className='bx bx-moon nav__btn--dark'></i>
                            </div>

                            <a className="nav__btn--download" href="#">Download CV</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;