import React, { useEffect, useState } from 'react';
import './HowSection2.css';
import img1 from '../Assests/images/business-communication-icon.svg';
import img2 from '../Assests/images/diary-icon.svg';
import img3 from '../Assests/images/calendar-blank-line-icon.svg';

export default function HowSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop - windowHeight + 100 < 0) {
          element.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='how-sec'>
        <div className='how-heading-sec'>
          <h2> How Zizmu Works</h2>
          <p>Zizmu connects personal loans borrowers with investors</p>
        </div>
        <div className="how-flex-sec" >
          <div className={`fade-up ${visible ? 'show' : ''}`}>
            <img src={img1} alt="#action" />
            <p>Digitally Connect Borrowers <br/>and investors</p>
          </div>
          <div className={`fade-up ${visible ? 'show' : ''}`}>
            <img src={img2} alt="#action" />
            <p>Doccumentation &<br/> Disbursement of Loans</p>
          </div>
          <div className={`fade-up ${visible ? 'show' : ''}`}>
            <img src={img3} alt="#action" />
            <p>Automated monthly EMI<br/>collection & transfer</p>
          </div>
        </div>
      </div>
    </>
  )
}






// import React from 'react';
// import './HowSection.css';
// import img1 from '../Assests/images/business-communication-icon.svg';
// import img2 from '../Assests/images/diary-icon.svg';
// import img3 from '../Assests/images/calendar-blank-line-icon.svg';


// export default function HowSection() {
//   return (
//     <>
//         <div className='how-sec'>
//             <div className='how-heading-sec'>
//                 <h2> How Zizmu Works</h2>
//                 <p>Zizmu connects personal loans borrowers with investors</p>
//             </div>
//             <div className="how-flex-sec" >
//                 <div>
//                     <img src={img1} alt="#action" />
//                     <p>Digitally Connect Borrowers <br/>and investors</p>
//                 </div>
//                 <div>
//                     <img src={img2} alt="#action" />
//                     <p>Doccumentation &<br/> Disbursement of Loans</p>
//                 </div>
//                 <div>
//                     <img src={img3} alt="#action" />
//                     <p>Automated monthly EMI<br/>collection & transfer</p>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }
