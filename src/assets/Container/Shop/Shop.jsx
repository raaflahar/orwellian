import BestSelling from "./BestSelling";
import LimitedTimeOffers from "./LimitedTimeOffers";

export default function Shop() {
  return (
    <section id="shop">
      <div className="container bg-beige">
        <div id="title-content" className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center  mt-10">
            <h1 className="font-bold font-cormorant text-4xl text-maroon">
              Shop Our Collection
            </h1>
            <div className="w-36 h-1 bg-gold mt-2"></div>
            <BestSelling />
            <LimitedTimeOffers />
          </div>
        </div>
      </div>
    </section>
  );
}
