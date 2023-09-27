
import {experience} from "../../service/db";
import "./style.scss"

const index = () => {
    return (
        <section className="experience dark:bg-[#111827]">
            <div className="container">
                <div className="experience__inner">
                    <h4 className="experience__title">Experience</h4>
                    <p className="experience__text dark:text-white">Here is a quick summary of my most recent experiences:</p>
                    <div className="experience__cards">
                        {
                            experience?.map((item) => {
                                return <div key={item.id} className="experience__card dark:bg-[#1F2937]">
                                    <img src={item?.img} alt="img" />
                                    <div className="experience__card--body">
                                        <h2 className="experience__card--body-title dark:text-white">{item?.position}</h2>
                                        <ul>
                                            {
                                                item?.body.map((item, index) => {
                                                    return <li key={index} className="dark:text-white" >
                                                        {item}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <p className="experience__card--date dark:text-white">{item?.date}</p>
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