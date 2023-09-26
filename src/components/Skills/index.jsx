
import { skills } from "../../service/db";
import "./style.scss";
import git from "../../assets/icons/skills/git.svg";
const index = () => {
    return (
        <section className="skills">
            <div className="container">
                <div className="skills__inner">
                    <h4 className="skills__title">Skills</h4>
                    <p className="skills__text">The skills, tools and technologies I am really good at:</p>
                    <div className="skills__cards">
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__card">
                            <img src={git} alt="git"/>
                            <p>Git</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default index;