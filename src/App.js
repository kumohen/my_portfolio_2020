import React, { useState } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./component/Main";
import Skill from "./component/Skill";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import { colorList } from "./component/utills";

const App = () => {
  const [color, setColor] = useState("#4EC8C5");
  const [cardShow, setCardShow] = useState("none");
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setColor(item);
  };
  const disPlayCard = () => {
    if (!show) {
      setCardShow("block");
    }
  };

  return (
    <>
      <i
        className="fa fa-2x fa-th"
        aria-hidden="true"
        onClick={() => disPlayCard()}
        style={{
          float: "right",
          marginTop: "-4%",
          marginRight: "18%",
          opacity: "0.6",
        }}
      ></i>
      <div className="container" style={{ backgroundColor: `${color}` }}>
        <BrowserRouter>
          <div className="left">
            <Main />
          </div>
          <div className="right">
            <Switch>
              <Route exact path="/skill" component={Skill} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/project" component={Project} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>

      <div
        style={{
          display: `${cardShow} `,
          height: "200px",
          width: "245px",
          marginTop: "-39%",
          marginLeft: "83%",
          overflow: "scroll",
          border: "2px solid red",
        }}
        className="color_con"
      >
        <i
          className="fa fa-window-close "
          aria-hidden="true"
          onClick={() => setCardShow("none")}
          style={{ float: "right" }}
        ></i>
        <br />
        {colorList.map((item) => (
          <div
            key={item}
            onClick={() => handleShow(item)}
            style={{
              height: "40px",
              width: "33%",
              float: "left",
              backgroundColor: `${item}`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
