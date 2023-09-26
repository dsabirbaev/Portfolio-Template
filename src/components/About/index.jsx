

import user from "../../assets/images/user.png";
import "./style.scss";

const index = () => {
    return (
        <section id="about" className="about dark:bg-[#111827]">
            <div className='container'>
                <div className="about__inner">
                    <h4 className="about__title">About me</h4>
                    <div className="about__content">
                        <div className="about__content--img">
                            <img className="a" src={user} alt="avatar" />
                        </div>
                        <div className="about__content--body">
                            <h2 className="about__content--body-title dark:text-white">Curious about me? Here you have it:</h2>
                            <p className="about__content--body-text dark:text-white">I'm a passionate, software engineer who specializes in full stack development (Vue.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;