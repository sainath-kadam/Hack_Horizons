import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";



const Contact = () => {
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

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 97.5%;
  margin-left:2rem;
  margin-right:2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: calc(75vh - 100px);
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
};`
