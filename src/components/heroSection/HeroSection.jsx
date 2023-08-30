// import React from 'react';
// import './HeroSection.css';

// export default function HeroSection() {
//     return (
//         <div>
//             <div class="hero">
//                 <div class="background-image"></div>
//                 <div class="hero-content">
//                     <h1>Empowering Your Dreams, <br/>One Loan at a Time.</h1>
//                     <h2>Seamless Loans for Every Step of Your Journey.</h2>
//                 </div>
//             </div>

//         </div>
//     )
// }


import React from "react";
import './HeroSection.css';

export default function HeroSection() {

    return (
        <>
            <div className="heroSection">
                <div className="secondContent">
                    <div className="cardDivSec">

                        {/* <h1>Small Business
                        <br />
                        <span>Loan for Daily expensive</span>
                        </h1> */}
                        
                        <h1>Get Loan for your
                            <br />
                            <span className="san">Business growth or</span>
                            <br />
                            <span className="san" >startup</span> 
                        </h1>

                        <button className="btnClass">Get Loan</button>

                    </div>
                </div>
            </div>
        </>
    )
}