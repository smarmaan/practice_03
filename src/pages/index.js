import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const index = () => {
  return (
    <div>
      <Navbar></Navbar>

      <h1> Welcome to the Home page</h1>

      <div className="mt-[calc(100vh-315px)]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
