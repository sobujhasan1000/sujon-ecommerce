import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useUser } from "../Context/useUser";

const CheckoutPage = () => {
  const location = useLocation();
  const { product } = location.state; // Access product data from state
  const { user } = useUser(); // Access user from context
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [quantity, setQuantity] = useState(1); // State for quantity

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Calculate total price
  const totalPrice = product.price * quantity;

  // Handle quantity increment
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle quantity decrement
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Handle form submission
  const onSubmit = async (data) => {
    // Prepare the order data
    const orderData = {
      email: user?.email || data.email || "guest", // Use user's email, input email, or default
      product: {
        name: product.name,
        price: product.price,
        details: product.details,
        image: product.image,
      },
      customerDetails: {
        customerName: data.customerName,
        address: data.address,
        phoneNumber: data.phoneNumber,
      },
      quantity: quantity,
      totalPrice: totalPrice, // Include total price in order data
    };

    // Validate mandatory fields
    if (!data.customerName || !data.address || !data.phoneNumber) {
      return alert("Please fill in all required fields.");
    }

    try {
      const response = await axios.post(`${apiUrl}api/orders/user`, orderData);

      if (response.data.success) {
        alert("Order placed successfully!");
        navigate("/");
      } else {
        alert(`Failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error placing order:", error);

      // Show backend error message or fallback message
      if (error.response?.data?.message) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("Something went wrong while placing the order.");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Checkout Page</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Details */}
          <div className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.details}</p>
            <p className="text-lg font-bold mt-4">Price: {product.price}</p>
          </div>

          {/* Customer Details Form */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Customer Name */}
              <div>
                <input
                  type="text"
                  placeholder="Customer Name"
                  {...register("customerName", {
                    required: "Name is required",
                  })}
                  className="w-full border p-2 rounded-md"
                />
                {errors.customerName && (
                  <p className="text-red-500 text-sm">
                    {errors.customerName.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <textarea
                  placeholder="Address"
                  {...register("address", { required: "Address is required" })}
                  className="w-full border p-2 rounded-md"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{8,15}$/,
                      message: "Phone number must be 8-15 digits",
                    },
                  })}
                  className="w-full border p-2 rounded-md"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              {/* Quantity Section */}
              <div className="flex items-center space-x-4 mt-4">
                <p className="text-lg p-2 font-semibold">Quantity</p>
                <button
                  type="button"
                  onClick={decrementQuantity}
                  className="bg-gray-200 px-2 py-1 rounded-md font-extrabold text-2xl"
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={incrementQuantity}
                  className="bg-gray-200 px-2 py-1 rounded-md font-extrabold text-2xl"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-bold mt-4">
                Total Price: {totalPrice}
              </p>
              <p className="text-red-400">
                {" "}
                n.t also add extra taka for delivery
              </p>

              {/* Confirm Order Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-md"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
