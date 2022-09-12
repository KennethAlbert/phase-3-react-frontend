import {useParams,Link,useNavigate} from 'react-router-dom'


function OwnerRental({rentals,handleDelete}) {
  

const {id}=useParams()
const navigate=useNavigate()



function handleRemove(id) {
  fetch('https://find-a-motel.herokuapp.com/rentals/' + parseInt(id), {
    method: 'DELETE',
})
.then((r) => r.json())
.then((deleted) =>handleDelete(id) )

}




const rental=rentals.filter((rental)=>rental.owner_id ===parseInt(id)).map(rental=>{
    return (
        <div className= "card"  key={rental.id}>
        <img src={rental.image} alt={rental.name}/>
         <h3 className="spacing"> {rental.name}</h3>
         <h3 className="spacing">Your Name: {rental.owner.name}</h3>
         <p className="spacing">DESCRIPTION: {rental.description}</p> 
         <h4 className="spacing">STATUS: {rental.available?"Available":"Booked"}</h4> 
         <p>LOCATION: {rental.location}</p>
         <h4 >PRICE: ${rental.price} </h4><p className="spacing">per night</p>
         <p className="spacing">call: {rental.owner.tel}</p>
         <p >Email: {rental.owner.email}</p>
         <button className='update' onClick={() => navigate(`/rentals/update/${parseInt(rental.id)}`)}>Update</button>
         <button  className='delete' onClick={() => handleRemove(rental.id)}>Remove</button>
         </div>
    )
})

if (rental.length===0){
 return (
 <>
 
 <nav className="cartNav">
 
        <div><Link to="/login">Logout</Link></div>
        <div><Link to={`/addrentals/${parseInt(id)}`} >AddRentals</Link></div>
        <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
        
       </nav>
    <div className="results"> 
    
   <h3>You have no properties on lease</h3>
   
   </div>

 </>
 )
}





  return (
    <>
    
     <nav className="cartNav">
        <div><Link to="/login">Logout</Link></div>
        <div><Link to={`/addrentals/${id}`} >Add Properties</Link></div>

        <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
       </nav>
    
   
    <div className="results"> 
      {rental}
   
     </div>

     </>
  )
}

export default OwnerRental