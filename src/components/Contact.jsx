import React from "react";


const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>name</label>
            <input type="text" required placeholder="Enter Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              name=""
              required
              placeholder="Tell Us About Your Request"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
