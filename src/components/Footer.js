import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span>
        Made with {" "}
        <i className="fa fa-heart" />
      </span>
      <div className="social-media fa-lg">
        <a href="https://github.com/builtwithluv/ZenFocus">
          <i className="fa fa-github" />
        </a>
        <a href="https://www.linkedin.com/company-beta/18127477/">
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://www.facebook.com/builtwithluv">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://www.instagram.com/builtwithluv">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://twitter.com/builtwithluv">
          <i className="fa fa-twitter" />
        </a>
        <a href="mailto:builtwithluv@gmail.com">
          <i className="fa fa-envelope-o" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
