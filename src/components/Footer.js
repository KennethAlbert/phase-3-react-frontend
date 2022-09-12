import { Link} from "react-router-dom";


function Footer() {
    const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper " >
    
    <div><footer style={{fontStyle:"italic"}}>{`Copyright © FindAMotel ${year}`};</footer></div>
    
   </div>
  )
}

export default Footer