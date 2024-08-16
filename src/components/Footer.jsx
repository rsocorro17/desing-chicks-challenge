import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faPaypal, faApplePay, faGooglePay, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="payment-methods">
        <div className='adjust-payment-methods'>
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcMastercard} />
          <FontAwesomeIcon icon={faPaypal} />
          <FontAwesomeIcon icon={faApplePay} />
          <FontAwesomeIcon icon={faGooglePay} />
        </div>         
      </div>
      <div className="footer-content">
        <div className="social-links">
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
        <hr className="footer-divider" />
        <div className="footer-links">
          <div className="footer-column logo-column">
            <img src="assets/images/chicksgold.png" className="footer-logo" />
            <a href="#" className="support-link">chicksgold@support.com</a>
          </div>
          <div className="footer-column">
            <h4>Chicks Gold</h4>
            <ul>
              <li><a href="#">Games</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Copyright Policy</a></li>
            </ul>
          </div>
          <div className="footer-column github-column">
            <FontAwesomeIcon className='github-icon' icon={faGithub} />
            <a href="#" className="github-link">GitHub</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2023 Chicks Gold. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;