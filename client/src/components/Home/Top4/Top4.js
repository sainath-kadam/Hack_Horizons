import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i emailjs-com

const Top4 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if1i5xw",
        "template_nket8n8",
        form.current,
        "335ejCTAEklXOQOUw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <h1 className="heading">
        <span>Contact With Us</span>
      </h1>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Top4;

// Styles
const StyledContactForm = styled.div`
  width: 93%;
  margin-left:2rem;
  margin-right:2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: calc(100vh - 200px);
  border: 2px solid black;
  background-color: #f0f0f0;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    font-size: 16px;

    input {
      margin-left: 4rem;
      align:center;
      width: 100%;
      height: 35px;
      padding: 0.5rem;
      outline: none;
      border-radius: 0.3rem;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      margin-left: 4rem;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      margin-left: 8rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      margin-left: 4rem;

      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }

  h1 {
    text-align: center;
  }
};


// import emailjs from "@emailjs/browser";
// import React, { useRef } from "react";

// import styled from "styled-components";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_if1i5xw",
//         "template_nket8n8",
//         form.current,
//         "user_335ejCTAEklXOQOUw"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//           e.target.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <StyledContactForm>
//       <h1>Contact Us</h1>
//       <form ref={form} onSubmit={sendEmail}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="user_name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="user_email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" required></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </StyledContactForm>
//   );
// };

// export default ContactForm;

// const StyledContactForm = styled.div`
//   background-color: gray;
//   color: white;
//   padding: 2rem;
//   border-radius: 10px;

//   h1 {
//     text-align: center;
//     margin-bottom: 2rem;
//   }

//   form {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;

//     .form-group {
//       width: 30%;
//       display: flex;
//       flex-direction: column;
//       margin-bottom: 1rem;

//       label {
//         font-size: 1.1rem;
//         margin-bottom: 0.5rem;
//       }

//       input,
//       textarea {
//         padding: 0.5rem;
//         border-radius: 5px;
//         border: none;
//         outline: none;
//         font-size: 1rem;
//       }

//       input {
//         height: 35px;
//         margin-right: 1rem;
//       }

//       textarea {
//         resize: none;
//         height: 100px;
//         margin-right: 1rem;
//       }
//     }

//     button {
//       width: 100px;
//       height: 35px;
//       border-radius: 5px;
//       border: none;
//       outline: none;
//       font-size: 1rem;
//       background-color: rgb(249, 105, 14);
//       color: white;
//       margin-top: 1rem;
//       align-self: flex-end;
//     }
//   }
// `;
