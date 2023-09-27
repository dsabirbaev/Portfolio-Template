
import { testimonials } from "../../service/db";
import "./style.scss";



const index = () => {

    return (
        <section id="testimonials" className="testimonials dark:bg-[#111827]">
            <div className='container'>
                <div className="testimonials__inner">
                    <h4 className="testimonials__title">Testimonials</h4>
                    <p className="testimonials__text dark:text-white">Nice things people have said about me:</p>

                    <div className="testimonials__cards">
                        
                       
                            {
                                testimonials?.map((item) => (

                                        <div key={item.id} className="testimonials__card dark:bg-[#1F2937]">
                                            <div className="testimonials__card--img">
                                                <img src={item?.img} alt={item?.fullName} />
                                            </div>
                                            <p className="testimonials__card--body dark:text-white">{item?.body}</p>
                                            <p className="testimonials__card--name dark:text-white">{item?.fullName}</p>
                                            <p className="testimonials__card--position dark:text-white">{item?.position}</p>
                                        </div>
                                ))
                            }

                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default index;