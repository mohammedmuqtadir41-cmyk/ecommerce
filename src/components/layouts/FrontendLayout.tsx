import { Footer } from "../home/Footer";
import { Navbar } from "../navbar/Navbar";

export const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mx-width-7xl w-full px-4 sm:px-6 lg:px-8">
        {children}
        <Footer />
      </div>
    </>
  );
};
