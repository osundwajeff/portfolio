import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
