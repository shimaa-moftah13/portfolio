// import React from 'react'
import { useForm, ValidationError } from "@formspree/react";
import "./contactus.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1714637478432.json"
import contactAnimation from "../../animation/contact us.json"
import { motion } from "framer-motion"
const ContactUs = () => {
  const [state, handleSubmit] = useForm("xqkrnlgz");
 
  return (
    <>
      <section className="contact-us">
        <h2 className="title">
          <span className="icon-envelope"></span>
          Get in touch
        </h2>
        <p className="sub-title">
          I am available for fulltime jop. Got a question or proposal, or
          just want to say hello? Don't be shy and message me now.
        </p>

        <div style={{justifyContent: "space-between"}} className="flex ">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <label htmlFor="text">Your Name:</label>
              <input required type="text" id="text" />
            </div>

            <div className="flex" style={{ marginTop: "26px" }}>
              <label htmlFor="email">Your Email:</label>
              <input required type="email" id="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex" style={{ marginTop: "26px" }}>
              <label htmlFor="message">Your Message:</label>
              <textarea required name="message" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Send message"}
              
              </button>

              {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
              style={{height: 55}}
                loop={false}
                // style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully, Thank you!
            </p>
          )}
   
          </form>


          <div  className="animation">
          <Lottie
          className="contact-animation"
              style={{height: 350}}
                // loop={false}
                animationData={contactAnimation}
              />

          
            </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
