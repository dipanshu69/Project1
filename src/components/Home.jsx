import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillAmazonCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>ESSENET TECHNOLOGIES</h1>
          <p>Top Software Development in Nashik</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            For each project we undertake, the first step we take is to define
            the project scope. On receipt of any order, a team is assigned to
            your project and they will first gather the necessary requirements
            based on the form you have filled in. The team will then prepare a
            functional design, specifications and delivery, as well as cost
            estimates. The next step is to begin the development process after
            which the software will be subjected to serious scrutiny before it
            is delivered.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Essenet Technologies is a leading software development team with
            years of experience of working on different packages for a variety
            of businesses. Whether you are after a simple software for
            collection results or a complex one for statistical analysis, we
            have you covered. We currently operate from Nashik, helping clients
            to grow their businesses. You can get in touch with us on 9158701488
            we look forward to hearing from you and can't wait to help you.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amezon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
