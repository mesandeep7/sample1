import React from 'react';
import AboutUsPic from '../Assests/images/WhatsApp-about.png';
import './AboutUsSection.css';

export default function AboutUsSection() {
    return (
        <>
            <div className="about-us-div">
                <div className="about-us-sec">
                    <div className="about-container-sec">
                        <div className="about-row-sec">
                            <div className="about-flex-sec ">
                                <h2>About Us</h2>
                                <h3>Discover Our Team's Story</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates fugit dolore autem quaerat
                                    culpa officiis totam ut, sapiente, sequi, ratione sed quod eum quibusdam excepturi harum
                                    similique? Ad, neque natus voluptatibus nostrum perspiciatis laudantium fuga porro. Voluptatum
                                    cum nesciunt est accusantium inventore dolorem!.

                                </p>

                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="home__about__item">
                                            <h4>Our Company</h4>
                                            <p>You could try by giving the viewer paper cut, but that’s not the kind of
                                                attention</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="home__about__item">
                                            <h4>Our Vision</h4>
                                            <p>The brochure must grab a viewer’s attention and hold it long enough to</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="about-social-links">
                                    <a href="#action"><i className="fab fa-facebook"></i></a>
                                    <a href="#action"><i className="fab fa-twitter"></i></a>
                                    <a href="#action"><i className="fab fa-instagram"></i></a>
                                </div>
                                <a href="#action" className="about-btn-sec">Learn More</a>
                            </div>
                            <div className="about-flex-sec">
                                <img src={AboutUsPic} alt="#action" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}














// import React from 'react';
// import AboutUsPic from '../Assests/images/WhatsApp-about.png';
// import './AboutUsSection.css';

// export default function AboutUsSection() {
//     return (
//         <>
//             <div className="about-us-div">
//                 <div className="about-us-sec">
//                     <div className="about-container-sec">
//                         <div className="about-row-sec">
//                             <div className="about-flex-sec ">
//                                 <h2>About Us</h2>
//                                 <h3>Discover Our Team's Story</h3>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates fugit dolore autem quaerat
//                                     culpa officiis totam ut, sapiente, sequi, ratione sed quod eum quibusdam excepturi harum
//                                     similique? Ad, neque natus voluptatibus nostrum perspiciatis laudantium fuga porro. Voluptatum
//                                     cum nesciunt est accusantium inventore dolorem!.

//                                 </p>
//                                 <div className="about-social-links">
//                                     <a href="#action"><i className="fab fa-facebook"></i></a>
//                                     <a href="#action"><i className="fab fa-twitter"></i></a>
//                                     <a href="#action"><i className="fab fa-instagram"></i></a>
//                                 </div>
//                                 <a href="#action" className="about-btn-sec">Learn More</a>
//                             </div>
//                             <div className="about-flex-sec">
//                                 <img src={AboutUsPic} alt="#action" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
