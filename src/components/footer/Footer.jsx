import './footer.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='footer-container px-5 pb-3'>
      <div className='row mb-5 p-md-5 gy-5'>

        <div className='col-lg text-center text-lg-start'>
          <p className='logo-text'>Web Logo</p>
          <p>Some footer text about the agency. Just a little description to help people understand you bettrer</p>
          <div className="icon-container">
            <a href="" target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>        
            <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className='icon'/></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
          </div>
        </div>

        <div className='col-lg d-flex  justify-content-center text-center text-lg-start'>
          <div className='quick-links'>
            <p className='fs-4 fw-medium'>Quick Links</p>
            <div className='flex flex-column gy-2'>
              <a href="">Services</a>
              <a href="">PortFolio</a>
              <a href="">About Us</a>
              <a href="">Contact Us</a>
            </div>
            
          </div>
        </div>
        <div className='col-lg text-center text-lg-start'>
          <div>
            <p className='fs-4 fw-medium'>Address</p>
            <p>Design Agency Head Office.<br/>
              Airport Road <br/>
              United Arab Emirate
            </p>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <span>Copyright Designed Agency {new Date().getFullYear()}</span>
      </div>
      
    </footer>
  );
};

export default Footer;