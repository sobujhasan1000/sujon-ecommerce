import CustomerFeedback from "../customer/CustomerFeedback";
import OfferProduct from "../products/OfferProduct";
import OurProducts from "../products/OurProducts";
import Carousel from "../shared/Carusol";
const Home = () => {
  return (
    <div className="bg-[#c9eef0]">
      <Carousel />
      <OfferProduct />
      <OurProducts />
      <CustomerFeedback />
    </div>
  );
};

export default Home;
