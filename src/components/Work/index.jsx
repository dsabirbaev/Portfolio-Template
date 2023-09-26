
import { work } from "../../service/db";
import "./style.scss"

const index = () => {
    return (
        <section id="work" className="work">
            <div className="container">
                <div className="work__inner">
                    <h4 className="work__title">Work</h4>
                    <p className="work__text">Some of the noteworthy projects I have built:</p>

                    <div className="work__cards">
                        {
                            work?.map((item) => {
                                return <div key={item.id} className="work__card">
                                    <div className="work__card--img">
                                        <img src={item?.img} alt={item?.title} />
                                    </div>
                                    <div className="work__card--content">
                                        <h2 className="work__card--content-title">{item?.title}</h2>
                                        <p className="work__card--content-body">{item?.body}</p>
                                        <ul className="work__card--content-list">
                                            {
                                                item?.tools.map((item) => {
                                                    return <li>
                                                        {item}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                        <img className="work__card--content-link" src={item?.link} alt="link" />
                                    </div>
                                   
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;