const OfferProduct = () => {
  const products = [
    {
      id: 1,
      name: "Wireless ",
      price: "$99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAMLedZRk2kc2Gg7NC0jRaHIjxa1-vf-b_A&s",
      offer: "20% Off",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: "$199",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1PLkUyEP5q8XyUT8aDrK7LvEval2r_xp3w&s",
      offer: "30% Off",
    },
    {
      id: 3,
      name: "Bluetooth ",
      price: "$49",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
      offer: "15% Off",
    },
    {
      id: 4,
      name: "Gaming ",
      price: "$29",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqo_Ey-40Ccyz-dnFIv8CKAe8ePPYEqCQq5g&s",
      offer: "25% Off",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <h1 className="text-xl font-bold text-center mb-8">Special Offers</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-20 lg:h-40 object-cover"
            />
            <div className="p-2 flex justify-between">
              <p className="text-gray-600">{product.price}</p>
              <span className="inline-block  text-sm font-medium text-white bg-red-500 px-2 py-1 rounded">
                {product.offer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferProduct;
