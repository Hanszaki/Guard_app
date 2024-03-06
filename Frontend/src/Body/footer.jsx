// Footer.js
import React from "react";

const Footer = () => {
  return (
    <div style={pageContainerStyle}>
      {/* Content of your page goes here */}
      
      <footer style={footerContainerStyle}>
        <div id="footer" className="container text-center">
          <p>&copy; Guard Management System </p>
        </div>
      </footer>
    </div>
  );
};

const pageContainerStyle = {
  display: "flex",
  marginTop: "12vh",
  flexDirection: "column",
};

const footerContainerStyle = {
  backgroundColor: "#007BA7",
  color: "#fff",
  padding: "65px",
  width: "100%",
};

export default Footer;
