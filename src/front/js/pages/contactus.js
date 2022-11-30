import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const ContactUs = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="contactus">
      <h2 className="contactustittle text-center">Contact us</h2>

      <p className="contactus2">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="row">
        <div className="col-md-8 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label for="name" className="contactus3">
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label for="email" className="contactus3">
                    Your email
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label for="subject" className="contactus3">
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="contactusrow row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="5"
                    className="form-control"
                  ></textarea>
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="">
            <a
              className="contactusbtn btn"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div className="status"></div>
        </div>

        <div className="contactusinfo col-md-3 text-center">
          <ul className="list-unstyled">
            <li>
              <i className="contactus4 fas fa-map-marker-alt fa-2x" />
              <p>Miami Beach, FL 33139, USA</p>
              <p>Homestead, FL 33032, USA</p>
              <p>Burleson, TX 76028, USA</p>
              <p>West Palm Beach, FL 33401, USA</p>
            </li>

            <li>
              <i className="contactus4 fas fa-envelope mt-4 fa-2x" />
              <p>mealplanner@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
