const Marque = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-2">
      <marquee
        // eslint-disable-next-line react/no-unknown-property
        behavior="scroll"
        direction="left"
        className="text-lg font-medium text-blue-600"
      >
        <span className="mx-4">
          Welcome to our website! For any inquiries, please contact our members.
        </span>
        <span className="mx-4">Phone Number: 123456789</span>
        <span className="mx-4">We are here to help!</span>
      </marquee>
    </div>
  );
};

export default Marque;
