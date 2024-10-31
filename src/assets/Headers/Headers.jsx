import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Headers() {
  const setCart = () => {
    alert("This button will access future API. Thank You!");
  };

  return (
    <header className="bg-dark-brown lg:px-6 lg:py-5 md:px-3 md:py-3 xs:px-2 xs:py-3 xs:max-w-screen">
      <div className="container">
        <div className="flex justify-between items-center mx-auto">
          <div className="">
            <h4 className="font-bold italic font-cormorant lg:text-4xl text-gold md:text-xl xs:text-lg border-b-2 border-gold">
              <a href="/">Orwellian</a>
            </h4>
          </div>
          <div
            id="menu-bar"
            className="font-semibold text-base text-soft-ivory md:text-md xs:text-sm"
          >
            <a
              href="#"
              className="px-2 hover:text-gold transition duration-300 ease-in-out "
            >
              Home
            </a>
            <a
              href="#shop"
              className="px-2 hover:text-gold transition duration-300 ease-in-out"
            >
              Shop
            </a>
            <a
              href="#about"
              className="px-2 hover:text-gold transition duration-300 ease-in-out"
            >
              About
            </a>
            <button
              className="hover:text-gold transition duration-300 ease-in-out"
              onClick={setCart}
            >
              <a href="">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
