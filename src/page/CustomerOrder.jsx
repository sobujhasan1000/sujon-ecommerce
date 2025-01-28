import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/admin/orders`);
        if (response.data.success) {
          setOrders(response.data.orders);
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

  const handleConfirmOrder = async (orderId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}api/orders/${orderId}/confirm`
      );
      if (response.data.success) {
        alert(response.data.message);
        // Update UI based on confirmation
      }
    } catch (error) {
      alert("Failed to confirm order.");
      console.error(error);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}api/orders/${orderId}` // Use DELETE instead of PATCH
      );

      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Failed to cancel order.");
      console.error("Error:", error);
    }
  };

  // Filter orders to exclude confirmed ones
  const unconfirmedOrders = orders.filter(
    (order) => order.status !== "confirmed"
  );

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Admin - All Orders
      </h1>
      {unconfirmedOrders.length === 0 ? (
        <p className="text-center text-gray-500">No orders available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {unconfirmedOrders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {order.product?.name || "Unknown Product"}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Price:</span>{" "}
                {order.product?.price ? `$${order.product.price}` : "N/A"}
              </p>
              {order.product?.image && (
                <div className="mb-2">
                  <img
                    src={order.product.image}
                    alt={order.product.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Quantity:</span>{" "}
                {order.quantity || 1}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Total price:</span>{" "}
                {order.totalPrice || 0}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Order Date:</span>{" "}
                {new Date(order.orderDate).toLocaleString()}
              </p>
              {order.customerDetails && (
                <div className="text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Name:</span>{" "}
                    {order.customerDetails.customerName}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {order.customerDetails.address}
                  </p>
                  <p>
                    <span className="font-semibold">Phone Number:</span>{" "}
                    {order.customerDetails.phoneNumber}
                  </p>
                </div>
              )}
              <div className="mt-4 flex gap-2 justify-center">
                <button
                  onClick={() => handleConfirmOrder(order._id)}
                  className="px-2  bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleCancelOrder(order._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrdersPage;
