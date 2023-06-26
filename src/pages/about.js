import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const about = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1> Welcome to the about page</h1>

      <div className="mt-[calc(100vh-315px)]">
        <Footer />
      </div>
    </>
  );
};

export default about;
