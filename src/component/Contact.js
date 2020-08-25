import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "20%" }}>
      <h3>Contact</h3>
      <p>
        <i className="fa fa-envelope" aria-hidden="true"></i> {"  "}
        mahenmondal111@gmail.com
      </p>
      <p>
        {" "}
        <a href="https://www.facebook.com/mahen.1233/">
          {" "}
          <i className="fa fa-facebook-square" aria-hidden="true"></i> {"  "}
          Facebook
        </a>
      </p>
      <p>
        {" "}
        <a href="https://www.linkedin.com/in/mohen-mondal-735798157/">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          {"  "} Linkedin
        </a>{" "}
      </p>
      <p>
        {" "}
        <a href="https://github.com/kumohen">
          <i className="fa fa-github" aria-hidden="true"></i>
          {"  "}Github
        </a>
      </p>
      <p>
        {" "}
        <a href="https://www.instagram.com/mohen_mondal/">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          {"  "}instragram
        </a>
      </p>
    </div>
  );
};

export default Contact;
