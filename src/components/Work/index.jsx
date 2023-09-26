
import { work } from "../../service/db";
import "./style.scss"

const index = () => {
    return (
        <section id="work" className="work dark:bg-[#030712]">
            <div className="container">
                <div className="work__inner">
                    <h4 className="work__title">Work</h4>
                    <p className="work__text dark:text-white">Some of the noteworthy projects I have built:</p>

                    <div className="work__cards">
                        {
                            work?.map((item) => {
                                return <div key={item.id} className="work__card dark:bg-[#1F2937]">
                                    <div className="work__card--img">
                                        <img src={item?.img} alt={item?.title} />
                                    </div>
                                    <div className="work__card--content">
                                        <h2 className="work__card--content-title dark:text-white">{item?.title}</h2>
                                        <p className="work__card--content-body dark:text-white">{item?.body}</p>
                                        <ul className="work__card--content-list">
                                            {
                                                item?.tools.map((item, index) => {
                                                    return <li key={index}>
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