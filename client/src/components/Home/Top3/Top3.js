// import React from "react";
// import { menu } from "../../../Data";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   return (
//     <>
//       <section className="menu" id="menu">
//         <h1 className="heading">
//           <span>Prepare yourself for the Interview</span>
//         </h1>

//         <div className="box-container">
//           {menu.map((item, index) => (
//             <div className="box" key={index * Math.random()}>
//               <img src={item.img} alt="" />
//               <h3>{item.title}</h3>
//               <p> {item.disc}</p>
//               <div className="trend">{item.trend}</div>
//               <Link to={item.link} className="btn">
//                 Start.
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Menu;

import React from "react";
import { menu } from "../../../Data";
import RQuestionsSet from "../../Questionset/RquestionsSet"; // import the FAQs component

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          <span>Prepare yourself for the Interview</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.disc}</p>
              <div className="trend">{item.trend}</div>
              <a
                href="#faqs"
                className="btn"
                onClick={() =>
                  document.getElementById("faqs").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                FAQs
              </a>
            </div>
          ))}
        </div>

        <section className="faqs" id="faqs">
          <h2 className="heading">Frequently Asked Questions</h2>
          <RQuestionsSet /> {/* render the FAQs component */}
        </section>
      </section>
    </>
  );
};

export default Menu;

