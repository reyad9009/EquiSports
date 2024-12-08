import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyEquipmentCard from "./MyEquipmentCard";

const MyEquipment = () => {
  const [equipments, setEquipment] = useState([]);
  const { user } = useContext(AuthContext); // Access the logged-in user from context
  const userEmail = user?.email; 
  console.log(userEmail);
  console.log(equipments)

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {
          equipments.map(equipment => (<MyEquipmentCard key={equipment._id} equipment={equipment}></MyEquipmentCard>))
        }
      </div>
    </div>
  );
};

export default MyEquipment;
