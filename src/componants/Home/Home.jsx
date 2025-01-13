import OfferProduct from "../products/OfferProduct";
import OurProducts from "../products/OurProducts";
import Carousel from "../shared/Carusol";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Home = () => {
  return (
    <div className="bg-[#c9eef0]">
      <Navbar></Navbar>
      <Carousel />
      <OfferProduct />
      <OurProducts />
      <Footer />
    </div>
  );
};

export default Home;
