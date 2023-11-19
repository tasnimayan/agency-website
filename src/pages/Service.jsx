import ServiceList from "../components/services/ServiceList";
import Navigator from "../components/Navigator";

const Service = () => {
  return (
    <>
      <Navigator path={"Service"}/>
      <ServiceList />
    </>
  );
};

export default Service;