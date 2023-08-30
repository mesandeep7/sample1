// import React from 'react';

// const MyNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-dark fixed-top navProperty">
//       <div className="container-fluid">
//         <a className="navbar-brand text-white" href="#action">Navbar scroll</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
//           aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="navbarScroll"
//           aria-labelledby="offcanvasNavbarLabel">
//           <div className="offcanvas-header">
//             <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Offcanvas</h5>
//             {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
//             <button className="btn-close" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
//               aria-controls="navbarScroll" aria-expanded="false" aria-label="Close">
//               {/* <span className="navbar-toggler-icon"></span> */}
//             </button>
//           </div>
//           <div className="offcanvas-body">
//             <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//               <li className="nav-item">
//                 <a className="nav-link active text-white" aria-current="page" href="#action">Home</a>
//               </li>
//               <li className="nav-item ">
//                 <a className="nav-link text-white" href="#action">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle text-white " href="#action" role="button" data-bs-toggle="dropdown"
//                   aria-expanded="false">
//                   service
//                 </a>
//                 <ul className="dropdown-menu ">
//                   <li><a className="dropdown-item" href="#action">Action</a></li>
//                   <li><a className="dropdown-item" href="#action">Another action</a></li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li><a className="dropdown-item" href="#action">Something else here</a></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default MyNavbar;

import React, { useState } from 'react';

const MyNavbar = () => {
  const [linkDropdownOpen, setLinkDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const toggleLinkDropdown = () => {
    setLinkDropdownOpen((prev) => !prev);
  };

  const toggleServiceDropdown = () => {
    setServiceDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top navProperty text-white">
      <div className="container">
        <a className="navbar-brand text-white" href="#action">Zizmu</a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end bg-dark text-white" tabIndex="-1" id="navbarScroll"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button className="btn-close" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
              aria-controls="navbarScroll" aria-expanded="false" aria-label="Close">
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#action">Home</a>
              </li>
              <li className="nav-item dropdown" onMouseEnter={toggleLinkDropdown} onMouseLeave={toggleLinkDropdown}>
                <a className="nav-link dropdown-toggle text-white" href="#action" role="button" data-bs-toggle="dropdown"
                  aria-expanded={linkDropdownOpen}>
                  Link
                </a>
                <ul className={`dropdown-menu ${linkDropdownOpen ? 'show' : ''}`} onMouseEnter={toggleLinkDropdown} onMouseLeave={toggleLinkDropdown}>
                  <li><a className="dropdown-item" href="#action">Dropdown Link 1</a></li>
                  <li><a className="dropdown-item" href="#action">Dropdown Link 2</a></li>
                  {/* Add more dropdown items here */}
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseEnter={toggleServiceDropdown} onMouseLeave={toggleServiceDropdown}>
                <a className="nav-link dropdown-toggle text-white" href="#action" role="button" data-bs-toggle="dropdown"
                  aria-expanded={serviceDropdownOpen}>
                  service
                </a>
                <ul className={`dropdown-menu ${serviceDropdownOpen ? 'show' : ''}`} onMouseEnter={toggleServiceDropdown} onMouseLeave={toggleServiceDropdown}>
                  <li><a className="dropdown-item" href="#action">Action</a></li>
                  <li><a className="dropdown-item" href="#action">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#action">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
