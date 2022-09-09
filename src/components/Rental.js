import { useEffect,useState } from "react";


function Rental({rental}) {
const [available, setAvailable] = useState(rental.available);

function handleBooking(id) {
  setAvailable(false)
  fetch(`http://127.0.0.1:9393/rentals/${id}`, {
     method: 'PATCH',
     body: JSON.stringify({available: false}),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   })
  }


  return (
    <div className={available? "card": "card disable"}  >
      <img src={rental.image} alt={rental.name}/>
       <h3 className="spacing"> {rental.name}</h3>
       <h3 className="spacing"> {available?"Available":"Booked"}</h3>
       <h3 className="spacing">Owner's Name: {rental.owner.name}</h3>
       <p className="spacing">DESCRIPTION: {rental.description}</p>  
       <p>LOCATION: {rental.location}</p>
       <h4 >PRICE: ${rental.price} </h4><p className="spacing">per night</p>
       <p className="spacing">call: {rental.owner.tel}</p>
       <p >Email: {rental.owner.email}</p>
       <button style={{display:available? "": "none",fontStyle: "italic",fontSize:"14px",color:"green"}}  onClick={()=>handleBooking(rental.id)}>Book</button>
       </div>
  )
}

export default Rental