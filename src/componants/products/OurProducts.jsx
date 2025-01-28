import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useUser } from "../../Context/useUser";

const apiUrl = import.meta.env.VITE_API_URL;

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useUser();

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/products`);
        setProducts(response.data); // Store the fetched products in state
      } catch (err) {
        setError("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${apiUrl}api/products/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Failed to delete product. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl font-bold text-center mb-4">Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image} // Ensure that the image URL is correct in your backend response
              alt={product.name}
              className="w-full h-20 lg:h-40 object-cover"
            />
            <div>
              <p className="text-lg font-semibold p-2">{product.name}</p>
            </div>
            <div className="p-2 flex justify-between">
              {user?.role === "adminrefat" ? (
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white p-1 rounded-md"
                >
                  Delete
                </button>
              ) : (
                <Link to="/checkOutPage" state={{ product }}>
                  <button className="bg-red-400 p-1 rounded-md">
                    Order Now
                  </button>
                </Link>
              )}
              <p className="text-gray-600 text-sm">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
