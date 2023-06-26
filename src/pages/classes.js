import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const classes = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <h1> Welcome to the classes page</h1>

      <div className="mt-[calc(100vh-315px)]">
        <Footer />
      </div>
    </div>
  );
};

export default classes;
