import { useLocation } from "react-router";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const location = useLocation();
  const { product } = location.state; // Access product data from state

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const orderData = {
      product: {
        name: product.name,
        price: product.price,
        details: product.details,
        image: product.image,
      },
      customerDetails: data,
    };

    // Log the order data to the console
    console.log("Order Confirmed:", orderData);
    alert("Order Confirmed! Check the console for details.");
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
            <p className="text-lg font-bold mt-4">{product.price}</p>
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
                      message: "Phone number must be 10 digits",
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

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="text-sm">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                  className="w-full border p-2 rounded-md mt-1"
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

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
