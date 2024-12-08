import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const { user } = useContext(AuthContext); // Access the logged-in user from context
  const userEmail = user?.email; 
  console.log(userEmail);
  console.log(equipment)

  useEffect(() => {
      // Fetch data for the logged-in user's email
      fetch(`http://localhost:5000/my-equipment/${user?.email}`)
        .then(res => res.json())
        .then(data => setEquipment(data)) // Set data to state
        .catch((error) => console.error("Error fetching equipment:", error));
    
  }, [user?.email]); // Re-fetch when userEmail changes

  return (
    <div>
      <h2>My Equipment</h2>
      <div>
        {
          equipment.map(equ => (<p key={equ._id}>{equ.name}</p>))
        }
      </div>
    </div>
  );
};

export default MyEquipment;
