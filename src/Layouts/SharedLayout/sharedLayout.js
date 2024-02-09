import { Footer } from "./Components/footer";
import { Navbar } from "./Components/navbar";

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
