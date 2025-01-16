const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless ",
      price: "$99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIBrz_uGeC0jGOIwMoCVhr2LutTBCFOdLqg&s",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: "$199",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT331bpfOaWQ4HrpIOtM2g8M8N8a83-eh9uTQ&s",
    },
    {
      id: 3,
      name: "Bluetooth ",
      price: "$49",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZJB6h1Wfx2EQHSvzZ_C2qyvSUodMadSj6w&s",
    },
    {
      id: 4,
      name: "Gaming ",
      price: "$29",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5nb74k6FZiVcAZLzcciYySSF6_wqd-RBDw&s",
    },
    {
      id: 5,
      name: "Laptop ",
      price: "$39",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RHRPMQt6Ee3vLQsreHUQcCUSJWqvZfAtVQ&s",
    },
    {
      id: 6,
      name: "Mechanical ",
      price: "$79",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJRlBXKMMz413G5Qm2FbgN5MDjtV5tWaliw&s",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl font-bold text-center mb-4">Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-20 lg:h-40 object-cover"
            />
            <div className="p-2 flex justify-between">
              <button className="bg-red-400 p-1 rounded-md">order Now</button>

              <p className="text-gray-600 text-sm ">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
