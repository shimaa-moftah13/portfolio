
import './hero.css'
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json"
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <>
    <section className='hero flex'>
    <div className="left-section">

      <div className="parent-avatar flex">
        <motion.img 
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1.1)" }}
        transition={{ damping: 6, type: "spring", stiffness: 100 }}
        src="/public/WhatsApp Image 2024-03-26 at 1.47.14 AM-modified.png" 
        className='avatar' alt="" />

        <div className='icon-verified'></div>
      </div>

      <motion.h1 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 2 }}
      className='name'>
        Shimaa Moftah
      </motion.h1>

     <h2 className='title'>Front-End Developer</h2>
      <p className='sub-title'>A passionate Frontend developer based in Egypt.
        I build pixel-perfect, engaging,
        and accessible digital experiences.
        I'll help you build beautiful websites,
        turning ideas into visually appealing and 
        functional web solutions.</p>

        <div className="icons flex">
        <a href='https://www.linkedin.com/in/shimaa-moftah/' target='_blank' className=" icon-linkedin">
          </a>

          <a href='https://github.com/shimaa-moftah13' target='_blank' className="icon icon-github">
          </a>

          <a href='https://wa.me/01004939704' target='_blank' className="icon icon-whatsapp">
          <span></span>
          </a>

          <a href='mailto:shimaamoftah13@outlook.com' target='_blank' className="icon icon-envelope">
          </a>
          
  </div>

    </div>







    <div className="right-section animation ">
    <Lottie
    lottieRef={lottieRef}
          className="contact-animation"
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
              // style={{height: 400}}
                // loop={false}
                animationData={devAnimation}
              />

    </div>

    </section>
    

    </>
  )
}

export default Hero