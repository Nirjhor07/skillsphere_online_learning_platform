import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const Mainlayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Mainlayout;
