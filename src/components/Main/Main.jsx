import { useState } from "react";
import "./Main.css";
import { myProjects } from "./myProject";
import { AnimatePresence, motion } from "framer-motion";



const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects)

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <>
      <main className="flex ">
        <section className="left-section flex">

          <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
            All Projects
          </button>

          <button
            onClick={() => {
              handleClick("css$html");
            }}
            className={currentActive === "css$html" ? "active" : null}
          >
            HTML & CSS
          </button>

          <button
             onClick={() => {
              handleClick("javascript");
            }}
            className={currentActive === "javascript" ? "active" : null}
          >  
            JavaScript
            </button>



          <button
            onClick={() => {
              handleClick("react.js");
            }}
            className={currentActive === "react.js" ? "active" : null}
          >
            React.JS
            </button>



          <button
             onClick={() => {
              handleClick("next.js");
            }}
            className={currentActive === "next.js" ? "active" : null}
          >
            
            Next.JS
            </button>
        </section>

        <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <>
                <motion.article 
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}

                key={item.imgPath} 
                className="card">
                  <img width={266} src={item.imgPath} alt="" />

                  <div style={{ width: "266px" }} className="box ">
                    <h2 className="title">{item.title}</h2>
                    <p className="sub-title">{item.description}</p>
                    <div className="icons flex">
                      <a
                        href={item.githubLink}
                        target="_blank"
                        className="icon icon-github"
                      >
                        <span>GitHub</span>
                      </a>
                      <a
                        href={item.demo}
                        target="_blank"
                        className="icon icon-link"
                      >
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              </>
            );
          })}
           </AnimatePresence>
        </section>
      </main>
    </>
  );
};

export default Main;
