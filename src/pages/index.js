import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const index = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Banner />
      <div className="mt-[calc(100vh-315px)]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
