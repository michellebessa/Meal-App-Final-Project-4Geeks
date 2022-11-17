import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer bg-light">
    <div className="container-fluid align-content-around justify-content-around">
      <a className="navbar-brand" href="#" style={{ marginTop: "0.25rem" }}>
          <span>Copyright © Meal it! 2022</span>
          <button className="buttonfooter">Subscribe</button>
          <button className="buttonfooter">Contact</button>
          <button className="buttonfooter">About us</button>
      </a>
    </div>
  </footer>
);
