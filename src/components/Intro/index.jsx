

import user from "../../assets/images/user.png";
import "./style.scss";

const index = () => {
    return (
        <section className='intro dark:bg-[#030712]'>
            <div className='container'>
                <div className="intro__inner">
                    <div className="intro__right">
                        <h1 className="intro__right--title dark:text-white">Hi, I'm Davranbek 👋</h1>
                        <p className="intro__right--text dark:text-white">I'm a frontend developer (JavaScript & TypeScript and React.js & Next.js ) with a focus on creating  exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 1 years, I still love it as if it was something new.</p>
                        <div className="intro__right--location dark:text-white">
                             <i className='bx bx-map'></i> <p>Uzbekistan, Tashkent</p>
                        </div>
                        <div className="intro__right--status">
                            <i className='bx bxs-circle'></i> <p className="dark:text-white">Available for new projects</p>
                        </div>
                        <div className="intro__right--socials dark:text-white">
                            <a href="https://github.com/dsabirbaev"><i className='bx bxl-github github'></i></a>
                            <a href="https://twitter.com/sabirbaevD"><i className='bx bxl-twitter twitter'></i></a>
                            <a href="https://www.figma.com/@davran"><i className='bx bxl-figma figma'></i></a>
                        </div>
                    </div>
                    <div className="intro__left">
                        <img className="intro__left--img" src={user} alt="user" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;