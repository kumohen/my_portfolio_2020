import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { motion } from "framer-motion";
import { project } from "./utills";
import Image1 from "./twitter_clone.PNG";
import Image2 from "./online_e.PNG";
import Image3 from "./3.PNG";
import Image4 from "./4.PNG";

const Project = () => {
  const [show, setShow] = useState(false);
  const [init, setInit] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setInit(item);
  };
  return (
    <div style={{ padding: "3%", display: "flex", flexDirection: "column" }}>
      <div>
        {project.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="project_card"
            key={item}
          >
            <h4 className="project_title">{item}</h4>
            <p>
              <b>Type</b>:Mern Stack
            </p>
            <Button
              variant="outline-info"
              onClick={() => handleShow(item)}
              className="project_btn"
            >
              Detail
            </Button>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          border: "2px solid white",
          marginTop: "2%",
          marginRight: "5%",
          marginLeft: "1%",
          padding: "5%",
        }}
      >
        <p>
          Also I had made couples of project in react ,redux , firebase and
          Express.{" "}
        </p>
        <p>
          <b>1.Node_BLOG_APP</b>(MERN)
        </p>
        <p>
          <b>2.COVID_19_WEB_APP</b>(React)
        </p>
        <p>
          <b>3.Devtalk</b>(React,Redux and Firebase)
        </p>
        <p>
          <b>4.photowall</b>(React,Redux and Firebase)
        </p>
        <p>
          <b>5.Restaurant-Search-App</b>(React Native)
        </p>
        <p>
          <b>6.Budget_App</b>(React and Redux)
        </p>
        <p>
          <b>7.shooter_game</b>(Pure javascript)
        </p>
        <p>
          <b>8.taskApp</b>(Express,Mondodb and Ejs)
        </p>
        <p>
          <b>9.book_shelf</b>(MERN)
        </p>
        <p>
          <b>10.movie_search</b>(React and Redux)
        </p>
        <p>
          <b>11.Youtube</b>(React)
        </p>
        <p>
          <b>12.Node Rest_API</b>(Express ,mongodb and Ejs)
        </p>
      </div>
      <Modal show={show} onHide={handleClose} className="modal_style">
        <div style={{ margin: "20px" }} className="con_modal">
          <motion.p transition={{ rotate: 360, delay: 1 }}>
            <b>Project:</b> {init}
          </motion.p>
          <p>Type:Mern Stack</p>
          <p>
            <b>Technology</b>
          </p>
          <p>React</p>
          <p>Redux</p>
          <p>Express</p>
          <p>Mongodb</p>
          {init === "twitter_clone" && (
            <>
              <p>React bootstrap</p>
              <p>CSS3</p>
              <img
                src={Image1}
                alt="mohen"
                style={{ width: "100%", height: "40%" }}
              />
              <b>
                <a href="https://github.com/kumohen/Twitter_clone_MERN">
                  {" "}
                  github link:
                </a>
              </b>
            </>
          )}
          {init === "E_commerce" && (
            <>
              <p>React bootstrap</p>
              <p>stripe</p>
              <p>CSS3</p>
              <img
                src={Image2}
                alt="mohen"
                style={{ width: "100%", height: "40%" }}
              />
              <b>
                <a href="https://github.com/kumohen/E-commerce-">
                  {" "}
                  github link:
                </a>
              </b>
            </>
          )}
          {init === "Stroy_book" && (
            <>
              <p>meterialize_css</p>

              <p>CSS3</p>
              <img
                src={Image4}
                alt="mohen"
                style={{ width: "100%", height: "40%" }}
              />
              <b>
                <a href="https://github.com/kumohen/E-commerce-">
                  {" "}
                  github link:
                </a>
              </b>
            </>
          )}
          {init === "Online_voting" && (
            <>
              <img
                src={Image3}
                alt="mohen"
                style={{ width: "100%", height: "40%" }}
              />
              <b>
                <a href="https://github.com/kumohen/E-commerce-">
                  {" "}
                  github link:
                </a>
              </b>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Project;
