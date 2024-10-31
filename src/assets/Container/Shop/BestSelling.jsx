export default function BestSelling() {
  return (
    <section id="best-selling">
      <div className="container">
        <div id="title-content">
          <div className="flex flex-col justify-center items-center mb-10 mt-20">
            <h1 className="font-bold font-cormorant text-3xl text-maroon mt-4 ">
              Best Selling Books
            </h1>
            <div className="w-24 h-1 bg-gold mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex flex-wrap justify-center items-center mb-6 mt-2">
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://m.media-amazon.com/images/I/81unikMK30L._AC_UF1000,1000_QL80_.jpg"
                alt="Wuthering Heights"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Wuthering Heights
              </h1>
              <p className="font-base text-black">$6.99</p>
            </div>
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://m.media-amazon.com/images/I/71OZJsgZzQL._AC_UF1000,1000_QL80_.jpg"
                alt="The Brother Karamazov"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                The Brother Karamazov
              </h1>
              <p className="font-base text-black">$6.99</p>
            </div>
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cover_%28Hound_of_Baskervilles%2C_1902%29.jpg"
                alt="The Hound of the Baskervilles"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                The Hound of the Baskervilles
              </h1>
              <p className="font-base text-black">$6.99</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center mb-6 mt-2">
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146160/frankenstein-9781982146160_hr.jpg"
                alt="Frankenstein"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Frankenstein
              </h1>
              <p className="font-base text-black">$6.99</p>
            </div>
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
                alt="The Great Gatsby"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                The Great Gatsby
              </h1>
              <p className="font-base text-black">$6.99</p>
            </div>
            <div
              id="books-shelves"
              className="flex flex-col justify-center items-center mx-8 my-4"
            >
              <img
                src="https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg"
                alt="Pride and Prejudice"
                className="w-[200px] rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <h1 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Pride and Prejudice
              </h1>
              <p className="font-base text-black">$6.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
