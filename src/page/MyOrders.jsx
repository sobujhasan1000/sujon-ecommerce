import { useUser } from "../Context/useUser";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
const apiUrl = import.meta.env.VITE_API_URL;

const MyOrders = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [externalData, setExternalData] = useState(null);
  const [loadingState, setLoadingState] = useState("loading");

  useEffect(() => {
    if (user && user.email) {
      const fetchOrders = async () => {
        try {
          // Use axios to fetch the orders and external data
          const response = await axios.get(`${apiUrl}api/orders/${user.email}`);

          setOrders(response.data); // Set orders from the backend
          setExternalData(response.data.externalData); // Set external API data
          setLoadingState("loaded");
        } catch (error) {
          console.error("Error fetching orders:", error);
          setLoadingState("error");
        }
      };
      fetchOrders();
    } else {
      setLoadingState("error");
    }
  }, [user]);

  if (loadingState === "loading") {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-center text-red-400 font-bold">
        <h1>Please log in to view your orders.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={order.product.image}
                alt={order.product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {order.product.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  Price:{order.product.price}
                </p>
                <p className="text-gray-600">Quantity: {order.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">You have no orders.</p>
      )}
      {externalData && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-bold">External Data</h2>
          <p className="text-gray-700">{JSON.stringify(externalData)}</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
