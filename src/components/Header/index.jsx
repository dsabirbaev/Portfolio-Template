import { useState, useEffect } from "react";
import "./style.scss";

const index = () => {
    const [menu, setMenu] = useState(false);
    const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true' || false);
    const navLinkStyle = menu ? { right: 0 } : {};

    const toggleDarkMode = () => {
        setDark(!dark);
    }
    useEffect(() => {
       
        localStorage.setItem('darkMode', dark);
        dark ?  document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
        
      }, [dark]);

    return (
        <header className="dark:bg-[#030712]">
            <div className="container">
                <nav className="nav">
                    <a className="nav__logo dark:text-white" href="#">D.S</a>
                    <span className="dark:text-white" onClick={() => setMenu(!menu)} >
                        {
                            menu ?
                                <i className='bx bx-x close-menu'></i>
                                : <i className='bx bx-menu menu'></i>
                        }
                    </span>
                    <div className="nav__link dark:bg-[#030712]" style={navLinkStyle}>
                        <ul className="nav__list dark:text-white">
                            <li onClick={() => setMenu(!menu)} className="nav__list--item"><a className="nav__list--item-link" href="#about">About</a></li>
                            <li onClick={() => setMenu(!menu)} className="nav__list--item"><a className="nav__list--item-link" href="#work">Work</a></li>
                            <li onClick={() => setMenu(!menu)} className="nav__list--item"><a className="nav__list--item-link" href="#testimonials">Testimonials</a></li>
                            <li onClick={() => setMenu(!menu)} className="nav__list--item"><a className="nav__list--item-link" href="#contact">Contact</a></li>
                        </ul>
                        <span className="nav__line">|</span>
                        <div className="nav__btn dark:text-white">
                            <div className="nav__btn--list">
                                <span className="nav__btn--text">Switch Theme</span>
                                <span onClick={toggleDarkMode}>
                                    {
                                        dark ? <i title="Switch to light" className='bx bx-sun nav__btn--dark'></i> :
                                            <i title="Switch to dark" className='bx bx-moon nav__btn--dark'></i>

                                    }
                                </span>

                            </div>

                            <a className="nav__btn--download dark:bg-gray-700 dark:hover:text-white" href="https://docs.google.com/document/d/e/2PACX-1vTzG74q3SORduUDem127U23VhVcl3dCGPnPtn6W91roLSZ997H5PdRFnqlFo-og5-YNh3WPOLngQggc/pub">Download CV</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;