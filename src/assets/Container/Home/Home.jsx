import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate("/shop");
  };

  return (
    <section
      id="home"
      className="bg-fixed bg-repeat bg-cover bg-blend-lighten opacity-90"
      style={{
        backgroundImage:
          "url('https://r4.wallpaperflare.com/wallpaper/432/474/495/pens-paper-ink-wallpaper-2344a61633c110b6b1a16351adf0d968.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="container">
        <div className="flex flex-col justify-start items-center w-full min-h-screen py-4">
          <div
            id="title"
            className="font-bold font-libre text-maroon text-3xl "
          >
            <h1>Orwellian</h1>
          </div>
          <div
            id="text"
            className="font-semibold font-dancing text-gold text-lg"
          >
            <p>
              <Typewriter
                words={["Rediscover the timeless words"]}
                loop={10}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={30}
              />
            </p>
          </div>
          <div id="button-cta">
            <button
              className="font-semibold font-libre text-soft-ivory text-sm bg-burnt-orange my-3 px-3 py-1 w-full rounded-full hover:text-charcoal-black transition ease-in-out duration-300"
              onClick={handleCtaClick}
            >
              Shop Now!
            </button>
          </div>
          <div
            id="books"
            className="py-6 flex flex-wrap justify-center items-center px-4"
          >
            <div
              id="books-container"
              className="flex flex-col justify-center items-center mt-6 px-6"
            >
              <img
                src="https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg"
                alt="1984"
                className="w-[200px] rounded-lg hover:scale-105 transition ease-in-out duration-300"
              />
              <h4 className="font-bold font-cormorant text-maroon text-lg mt-2">
                George Orwell
              </h4>
              <p className="font-semibold font-libre text-dark-gray text-base italic">
                1984
              </p>
            </div>
            <div
              id="books-container"
              className="flex flex-col justify-center items-center mt-6 px-6"
            >
              <img
                src="https://m.media-amazon.com/images/I/91PBkjTNJhL._AC_UF1000,1000_QL80_.jpg"
                alt="Moby Dick"
                className="w-[200px] rounded-lg hover:scale-105 transition ease-in-out duration-300"
              />
              <h4 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Herman Melville
              </h4>
              <p className="font-semibold font-libre text-dark-gray text-base italic">
                Moby Dick
              </p>
            </div>
            <div
              id="books-container"
              className="flex flex-col justify-center items-center mt-6 px-6"
            >
              <img
                src="https://m.media-amazon.com/images/I/71CQFGiPA+L._AC_UF894,1000_QL80_.jpg"
                alt="A Tale of Two Cities"
                className="w-[200px] rounded-lg hover:scale-105 transition ease-in-out duration-300"
              />
              <h4 className="font-bold font-cormorant text-maroon text-lg mt-2">
                Charles Dickens
              </h4>
              <p className="font-semibold font-libre text-dark-gray text-base italic">
                A Tale of Two Cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
