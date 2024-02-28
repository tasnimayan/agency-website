import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faQrcode, faThumbsUp, faFaceSmile, faGlobe} from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core"

const StatCard = ({data}) => {
  let icon;
  switch(data.icon){
    case "faUsers":
      icon=faUsers;
      break;
    case "faFaceSmile":
      icon=faFaceSmile;
      break;
    case "faThumbsUp":
      icon=faThumbsUp;
      break;
    case "faQrcode":
      icon=faQrcode;
      break;
    default:
      icon=faGlobe;

  }

  return (
    <div className="col-6 col-md-3 text-center">
      <div className='stat-card d-flex flex-column justify-content-center align-items-center rounded-4 p-4' style={{boxShadow:"5px 5px 15px rgba(0, 0, 0, 0.05)"}}>
        <div className='icon group'>
          <FontAwesomeIcon icon={icon} />
        </div>
        <p className='counts'>{data.count}</p>
        <p className='count-title'>{data.title}</p>
      </div>
    </div>
  );
};

export default StatCard;