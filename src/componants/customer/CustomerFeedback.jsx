const feedbackData = [
  {
    id: 1,
    name: "Alice ",
    feedback: "Amazing experience! Highly recommend it.",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    feedback: "Great service and quality products!",
    rating: "⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    feedback: "Fast delivery and excellent support.",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Michael ",
    feedback: "The website is easy to use, and the discounts are fantastic!",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 5,
    name: "Sophia Lee",
    feedback: "Loved the variety of products and the fast delivery!",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 6,
    name: "William ",
    feedback: "Good experience overall, but delivery could be faster.",
    rating: "⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="bg-[#ddf1f0] py-8">
      <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
        What Our Customers Say
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 max-w-6xl mx-auto">
        {feedbackData.map((customer) => (
          <div
            key={customer.id}
            className="flex flex-col items-center text-center bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Customer Image */}
            <img
              src={customer.image}
              alt={customer.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            {/* Customer Name */}
            <h2 className="text-base font-bold text-gray-800">
              {customer.name}
            </h2>
            {/* Feedback Rating */}
            <p className="text-gray-600 mt-2 text-sm">{customer.rating}</p>
            {/* Customer Feedback */}
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {customer.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
