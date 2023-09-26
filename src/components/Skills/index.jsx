
import { skills } from "../../service/db";
import "./style.scss";

const index = () => {
    return (
        <section className="skills dark:bg-[#030712]">
            <div className="container">
                <div className="skills__inner">
                    <h4 className="skills__title">Skills</h4>
                    <p className="skills__text dark:text-white">The skills, tools and technologies I am really good at:</p>
                    <div className="skills__cards">
                       {
                        skills?.map((item) => {
                            return <div key={item.id} className="skills__card">
                                <img src={item?.img} alt={item?.title} />
                                <p className="dark:text-white">{item?.title}</p>
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