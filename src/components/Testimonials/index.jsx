
import { testimonials } from "../../service/db";
import "./style.scss";

const index = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className='container'>
                <div className="testimonials__inner">
                    <h4 className="testimonials__title">Testimonials</h4>
                    <p className="testimonials__text">Nice things people have said about me:</p>

                    <div className="testimonials__cards">
                        {
                            testimonials?.map((item) => {
                                return <div key={item.id} className="testimonials__card">
                                    <div className="testimonials__card--img">
                                        <img src={item?.img} alt={item?.fullName} />
                                    </div>
                                    <p className="testimonials__card--body">{item?.body}</p>
                                    <p className="testimonials__card--name">{item?.fullName}</p>
                                    <p className="testimonials__card--position">{item?.position}</p>
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