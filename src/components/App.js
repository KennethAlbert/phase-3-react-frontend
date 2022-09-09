import { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Rentals from "./Rentals";
import Login from "./Login";
import Signup from "./Signup";
import OwnerRental from "./OwnerRental";
import AddRentals from "./AddRentals";
import Update from "./Update";






function App() {
const [rentals, setRentals] = useState([]);

const url = 'http://127.0.0.1:9393/rentals'

useEffect(() => {
fetch(url)
.then(res=>res.json())
.then(data=>{
  console.log(data)
setRentals(data)
 })
},[])


function handleAdd(newrentals) {
  const newRentals = [newrentals,
    ...rentals]
  setRentals( newRentals)
}


function handUpdate(id,updates) {
const exist = rentals.find((x) => x.id === parseInt(id));
return (setRentals(rentals.map((x) =>x.id === parseInt(id)?{...exist ,name: updates.name,description: updates.description,image: updates.image,location: updates.location,price: updates.price}:x)))
}


function handleDelete(id) {
  setRentals(rentals.filter(r=>r.id!==parseInt(id)))
}

  
  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/" element={<Rentals rentals={rentals} />}/>
      <Route  path="/login" element={<Login />}/>
      <Route  path="/signup" element={<Signup />}/>
      <Route  path="/owner/:id/rentals" element={<OwnerRental handleDelete={handleDelete} rentals={rentals}/>}/>
      <Route  path="/addrentals/:owner_id" element={<AddRentals handleAdd={handleAdd}/>}/>
      <Route path="/rentals/update/:id" element={<Update rentals={rentals}  handUpdate={handUpdate}/>}/>
     </Routes>
     </Router>
    </>
  );
  }

export default App;
