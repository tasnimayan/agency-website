import Hero from "../components/Hero";
import OurPartners from "../components/OurPartners";
import StatList from "../components/StatList";
import WorkList from "../components/work/WorkList";
import FeaturedProduct from "../components/featured/FeaturedProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <OurPartners />
      <WorkList />
      <StatList />
      <FeaturedProduct />
    </>
  );
};

export default Home;