import axios from "axios";
import { useEffect, useState } from "react";

const DeliveryProducts = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_url}api/admin/orders`
        );
        if (response.data.success) {
          // Filter orders with status === "confirmed"
          const confirmedOrders = response.data.orders.filter(
            (order) => order.status === "confirmed"
          );
          setOrders(confirmedOrders);
        } else {
          setError("Failed to fetch orders.");
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handler for marking delivery status as OK
  const handleDeliveryOk = async (orderId) => {
    setUpdating(true);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_url}api/orders/deliver/${orderId}`
      );
      if (response.data.success) {
        // Update the delivery status locally
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, deliveryStatus: true } : order
          )
        );
      } else {
        console.error("Failed to update delivery status on the server.");
      }
    } catch (err) {
      console.error("Error updating delivery status:", err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Delivery Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 lg:w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S. No</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Customer Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">
                Delivery Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.customerDetails.customerName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.customerDetails.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.customerDetails.phoneNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.deliveryStatus ? (
                    <button
                      className="bg-green-400 text-white px-4 py-1 rounded cursor-not-allowed"
                      disabled
                    >
                      Delivered
                    </button>
                  ) : (
                    <button
                      className={`bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 ${
                        updating && "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => handleDeliveryOk(order._id)}
                      disabled={updating}
                    >
                      Mark as Delivered
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryProducts;
