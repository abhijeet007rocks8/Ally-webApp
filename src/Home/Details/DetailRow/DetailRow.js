import React from "react";
import "./DetailRow.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
function Row(props) {
  return (
    <div className="detailRow">
      <div className="flex">
      <div className="text">
      <VerifiedUserIcon fontSize="small" id="verify"/>
      <h3>{props.shop}</h3>
      <p id="address">{props.address}</p>
      <p id="city">{props.city}</p>
      <p id="number">Contact No. -: {props.number}</p>
      </div>
      <div className="contacts">
         <div className="icon">
         <a  href={`tel:+91${ props.number}`}>
           <img src="https://th.bing.com/th/id/Reaa6b18a59023f1009b4e3bc2be606af?rik=vkKpQYVNPw5Mlw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f10%2ftelephone-phone-icon_213730.png&ehk=zYgdJMEBqViem8vrUsjehA5klWkLA5eIv07%2fV6O%2fDQ8%3d&risl=&pid=ImgRaw" width="50px" height="50px"></img>
         </a>
         </div>
         <div className="icon">
         <a
             href={`https://api.whatsapp.com/send?phone=${props.whatsapp}&text=Hello%2c%20I%20want%20to%20know%20about%20the%20${props.resource}%20.I%20need%20them..&source=&data=&app_absent=`}
            target='blank'
            style={{ textDecoration: 'none' }}
            >
           <img src="https://toppng.com/public/uploads/preview/free-logo-whatsapp-whatsapp-ico-11562848821ey7fdbom5f.png" width="50px" height="50px"></img>
         </a>
         </div>
      </div>
      </div>
    </div>
  );
}

export default Row;
