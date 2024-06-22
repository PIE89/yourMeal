import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Outlet } from "react-router-dom";
import { Basket } from "@/components/Basket";
import { Modal } from "@/components/Modal";
import { useContext } from "react";
import { LayoutContext } from "@/provider/LayoutContextProvider";

const MainLayout = () => {
  const { isOpen, setIsOpen, handleClick } = useContext(LayoutContext);

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <Navigation />

          <section className="sectionMenu">
            <div className="menuWrapper">
              <Basket />

              <Outlet />
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
    </>
  );
};

export { MainLayout };
