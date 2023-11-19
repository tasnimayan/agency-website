import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    
    <header className="hero" style={{backgroundColor:"var(--bg-primary", fontFamily:"Poppins"}}>
      <div className="row text-lg-left">
        <div className="col-lg-6 pt-lg-5 pe-lg-5">
          <h2 className="display-3 fw-bold" style={{fontFamily:"Poppins"}}>Increase Your Customers Loyalty and Satisfaction</h2>
          <p className="fs-5 fw-medium mb-5 pe-4">We help businesses like yours earn more customers standout from competitors, make more money</p>
          <button className="fs-5 text-white px-4 py-2 rounded-3 border-0 lh-lg" style={{backgroundColor:"var(--color-accent-primary)"}}>Get Started</button>
        </div>
          <HeroImages />
      </div>
    </header>
  );
};

export default Hero;
