import React from 'react';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="text-center col py-3">
            Copyright &copy; {year}, Farmers Plant
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
