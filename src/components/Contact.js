import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="6"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="contact-info">
              <p>
                <i className="fa fa-map-marker"></i> 123 Main Street, Anytown USA
              </p>
              <p>
                <i className="fa fa-phone"></i> (123) 456-7890
              </p>
              <p>
                <i className="fa fa-envelope"></i>
              <p>
                <i className="fa fa-globe"></i> www.example.com
              </p>
              <p>
                <i className="fa fa-twitter"></i> @example
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
