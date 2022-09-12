import {useNavigate,useParams} from "react-router-dom";
import { useState,useEffect } from "react";



function Update({rentals,handUpdate}) {


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location,setLocation]=useState("")
  const [price, setPrice] = useState("");
  const [available, setAvailability] = useState("")


const navigate=useNavigate()
const {id}=useParams()

useEffect(() => {
  updateRentals()

}, [rentals])




function updateRentals(){ 
  const rental=rentals.filter((rental)=>rental.id ===parseInt(id)).map(rental=>{
    setName(rental.name) 
    setDescription(rental.description)
    setImage(rental.image)
    setLocation(rental.location)
    setPrice(rental.price)
    setAvailability(rental.available)

  })
}
     

console.log(available)

function handleSubmit(e){
  e.preventDefault()
  let update={name,description,image,location,price,available}
  
  handUpdate(id,update)

  fetch(`https://find-a-motel.herokuapp.com/rentals/update/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(
      update
    ),
    headers: {
      'Accept':'application/json',
        'Content-Type':'application/json'
    },
    })
    
   
    navigate(-1)
  
  }



  const newStyles={
  marginTop:"2rem",
  padding:"15px",
  border:"none",

  }


  return (
    <div>
    <nav className="cartNav" >
         <div><button className="submit" onClick={() => navigate(-1)}>Home</button></div>
         <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
     </nav>

    <form  className="signupform" style={{paddingTop:"6rem"}} onSubmit={handleSubmit}>

    <label htmlFor="name"   value="name">Name:</label>
    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>

    <label htmlFor="description" value="description">Description: </label>
    <textarea name="description" value={description} rows="5" cols="50" onChange={(e)=>{setDescription(e.target.value)}}>
    </textarea><br/><br/>

    <label htmlFor="image" value="image">Image:</label>
    <input type="text" name="image" value={image} onChange={(e)=>{setImage(e.target.value)}}/><br/><br/>

    <label htmlFor="location" value="location">Location: </label>
    <input type="text" value={location} name="location" onChange={(e)=>{setLocation(e.target.value)}}/><br/><br/>

    <label htmlFor="price" value="price" >Price:</label>
    <input type="interger" value={price} name="price" onChange={(e)=>{setPrice(e.target.value)}}/><br/><br/><br/>


    <input type="radio" onChange={(e)=>{setAvailability(Boolean(e.target.value))}} checked={available===true} name="Available" value="true"/>
    <label htmlFor="Available">Available</label><br/><br/>

    <input type="radio" onChange={(e)=>{setAvailability (Boolean(e.target.value))}} checked={available===false}  value="" name="booked" />
    <label htmlFor="booked">Booked</label><br/>

    <input type="submit" style={newStyles} className="update"   value="Update"/>
  </form>
  
  </div>
  )
}

export default Update