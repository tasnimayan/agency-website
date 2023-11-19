
// BReadcrumb For page navigation
const Navigator = ({path}) => {
  return (
    <div className="bread-crumb">
      <h4 className="display-5 fw-bold">
        Team
      </h4>
      <div className="fs-6 fw-normal d-block">
        <span>Home</span> <span>&nbsp;&gt;&nbsp;</span> <span className="current">{path}</span>
      </div>
      
    </div>
  );
};

export default Navigator;