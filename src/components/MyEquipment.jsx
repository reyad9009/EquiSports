import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const { user } = useContext(AuthContext); // Access the logged-in user from context
  const userEmail = user?.email; // Get the logged-in user's email

  useEffect(() => {
    if (userEmail) {
      // Fetch data for the logged-in user's email
      fetch(`http://localhost:5000/equipments?.userEmail=${userEmail}`)
        .then((response) => response.json())
        .then((data) => setEquipment(data)) // Set data to state
        .catch((error) => console.error("Error fetching equipment:", error));
    }
  }, [userEmail]); // Re-fetch when userEmail changes

  return (
    <div>
      <h2>My Equipment</h2>
      <div>
        {equipment.length === 0 ? (
          <p>No equipment found</p>
        ) : (
          equipment.map((item) => (
            <div key={item._id}>
              <img src={item.image} alt={item.itemName} />
              <h3>{item.itemName}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyEquipment;
