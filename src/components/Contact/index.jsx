

import "./style.scss";

const index = () => {
    return (
        <section id="contact" className='contact'>
            <div className='container'>
                <div className="contact__inner">
                    <h4 className="contact__title">Skills</h4>
                    <p className="contact__text">Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng birinchi hadisi shu hadis bilan boshlangan: “Innamal a’malu bin niyyati” ya’ni, “Barcha amallar niyatga bog’liq”.</p>
                    <div className="contact__info">
                        <div className="contact__info--email">
                            <i class='bx bx-envelope'></i> <span>davran9559@gmail.com</span> <i class='bx bx-message-square'></i>
                        </div>
                        <div className="contact__info--phone">
                            <i class='bx bx-phone'></i> <span>+998 93 361 94 47</span> <i class='bx bx-message-square'></i>
                        </div>
                    </div>
                    <div className="contact__socials">
                        <p className="contact__socials--text">You may also find me on these platforms!</p>
                        <div className="contact__socials--media">
                            <a href="#"><i className='bx bxl-github github'></i></a>
                            <a href="#"><i className='bx bxl-twitter twitter'></i></a>
                            <a href="#"><i className='bx bxl-figma figma'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;