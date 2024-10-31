export default function LimitedTimeOffers() {
  const discoverMore = () => {
    alert("This button will access future API. Thank You!");
  };
  return (
    <section id="limited-time-offers">
      <div className="container">
        <div
          id="title-content"
          className="flex flex-col justify-center items-center mb-10 mt-20"
        >
          <h1 className="font-bold font-cormorant text-3xl text-maroon mt-4 ">
            Limited Time Offers
          </h1>
          <div className="w-24 h-1 bg-gold mt-2"></div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex flex-wrap justify-center items-center mb-6 mt-2">
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://m.media-amazon.com/images/I/71auePo1a8L._AC_UF1000,1000_QL80_.jpg"
                alt="The Odyssey"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                The Odyssey
              </h1>
              <p className="font-base text-black line-through">$6.99</p>
              <p className="font-base text-forest-green">$4.99</p>
            </div>
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://m.media-amazon.com/images/I/711iLkqXpVL._AC_UF1000,1000_QL80_.jpg"
                alt="Alice's Adventures in Wonderland"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Alice's Adventures in Wonderland
              </h1>
              <p className="font-base text-black line-through">$6.99</p>
              <p className="font-base text-forest-green">$4.99</p>
            </div>
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Dracula_1st_ed_cover_reproduction.jpg"
                alt="Dracula"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Dracula
              </h1>
              <p className="font-base text-black line-through">$6.99</p>
              <p className="font-base text-forest-green">$4.99</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            className="font-bold bg-burnt-orange rounded-full px-4 py-1 text-soft-ivory hover:text-charcoal-black"
            onClick={discoverMore}
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
