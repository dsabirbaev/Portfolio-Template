
import icon from "../../assets/icons/contact.svg";
import "./style.scss";

const index = () => {
    return (
        <section id="contact" className='contact dark:bg-[#030712]'>
            <div className='container'>
                <div className="contact__inner">
                    <h4 className="contact__title">Get in touch</h4>
                    <p className="contact__text dark:text-white">Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng birinchi hadisi shu hadis bilan boshlangan: “Innamal a’malu bin niyyati” ya’ni, “Barcha amallar niyatga bog’liq”.</p>
                    <div className="contact__info">
                        <div className="contact__info--email dark:text-white">
                            <i className='bx bx-envelope'></i> <span className="dark:text-white">davran9559@gmail.com</span> <img src={icon} alt="icon" />
                        </div>
                        <div className="contact__info--phone dark:text-white">
                            <i className='bx bx-phone'></i> <span className="dark:text-white">+998 93 361 94 47</span> <img src={icon} alt="icon" />
                        </div>
                    </div>
                    <div className="contact__socials dark:text-white">
                        <p className="contact__socials--text dark:text-white">You may also find me on these platforms!</p>
                        <div className="contact__socials--media">
                            <a href="https://github.com/dsabirbaev"><i className='bx bxl-github github'></i></a>
                            <a href="https://twitter.com/sabirbaevD"><i className='bx bxl-twitter twitter'></i></a>
                            <a href="https://www.figma.com/@davran"><i className='bx bxl-figma figma'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;