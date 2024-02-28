
import './subscribe.style.css'
const Subscribe = () => {
  return (
    <section>
      <div className="newsletter-container py-5">
        <div className="d-flex flex-column align-items-center text-center">
          <p className="section-title">SUBSCRIBE</p>
          <h5 className="section-slogan">Subscribe To Get The Latest News About Us</h5>
          <p className="text-secondary fs-6 mb-4">Please Drop Your Email Below To Get Daily Update About What We Do</p>

          <div className="w-100 d-flex flex-lg-row flex-column justify-content-center p-1  rounded-3">
            <input type="email" placeholder="Enter Your Email Address" className="form-control d-inline-block  border me-lg-2"/>
            <button className="btn px-4 mt-2 mt-lg-0 rounded-3">SUBSCRIBE</button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Subscribe;