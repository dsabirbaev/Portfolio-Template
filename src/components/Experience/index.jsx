
import {experience} from "../../service/db";
import "./style.scss"

const index = () => {
    return (
        <section className="experience">
            <div className="container">
                <div className="experience__inner">
                    <h4 className="experience__title">Experience</h4>
                    <p className="experience__text">Here is a quick summary of my most recent experiences:</p>
                    <div className="experience__cards">
                        {
                            experience?.map((item) => {
                                return <div key={item.id} className="experience__card">
                                    <img src={item?.img} alt="img" />
                                    <div className="experience__card--body">
                                        <h2 className="experience__card--body-title">{item?.position}</h2>
                                        <ul>
                                            {
                                                item?.body.map((item) => {
                                                    return <li>
                                                        {item}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <p className="experience__card--date">{item?.date}</p>
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