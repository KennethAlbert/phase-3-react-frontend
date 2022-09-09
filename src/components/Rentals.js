import Rental from "./Rental"
import {Link} from "react-router-dom";

function Rentals({rentals}) {
  const rooms= rentals.map(motel=>{
    return <Rental key={motel.id}  rental={motel}/> 
   })

  return (
    <>
     <nav className="cartNav">
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/signup">Signup</Link></div>
        <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
       </nav>
    <div className="results">
    {rooms}
      
    </div>
    </>
  )
}

export default Rentals