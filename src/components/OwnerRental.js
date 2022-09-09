import {useParams,Link,useNavigate} from 'react-router-dom'


function OwnerRental({rentals,handleDelete}) {
  

const {id}=useParams()
const navigate=useNavigate()

console.log("id",id)

function handleRemove(id) {
  fetch('http://127.0.0.1:9393/rentals/' + parseInt(id), {
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
         <h3 className="spacing">Owner's Name: {rental.owner.name}</h3>
         <p className="spacing">DESCRIPTION: {rental.description}</p>  
         <p>LOCATION: {rental.location}</p>
         <h4 >PRICE: ${rental.price} </h4><p className="spacing">per night</p>
         <p className="spacing">call: {rental.owner.tel}</p>
         <p >Email: {rental.owner.email}</p>
         <button className='update' onClick={() => navigate(`/rentals/update/${rental.id}`)}>Update</button>
         <button  className='delete' onClick={() => handleRemove(rental.id)}>Remove</button>
         </div>
    )
})

if (rental.length===0){
 return (
 <>
 
 <nav className="cartNav">
 
        <div><Link to="/login">Logout</Link></div>
        <div><Link to={`/addrentals/${id}`} >AddRentals</Link></div>
        <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
        
       </nav>
    <div className="results"> 
    
   <h3>You have no properties on lease</h3>
   
   </div>

 </>
 )
}


console.log(rental.id)


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