import FAQ from "./FAQ";

export default function About() {
  return (
    <section id="about">
      <div id="container" className="bg-beige min-h-screen py-4">
        <div id="title-content" className="flex justify-center items-center">
          <div className="flex flex-col justify-start items-center mb-4">
            <h1 className="font-bold font-cormorant text-4xl text-maroon">
              About Us
            </h1>
            <div className="w-36 h-1 bg-gold mt-2 mb-2"></div>
          </div>
        </div>
        <div
          id="content-section"
          className="flex flex-col justify-center items-center "
        >
          <div className="flex justify-center font-libre font-semibold text-md text-charcoal-blacks">
            <p className="w-[350px] mx-4 xs:max-w-screen">
              Orwellian is an online bookstore that features various classic
              works of literature from world-renowned authors. Every book is
              Orwellian not just a read, but also an experience.
            </p>
            <p className="w-[350px] mx-4">
              Through the Orwellian, every reader has the opportunity to
              discover and has timeless, enriching literary works reading
              experience with a classy and full book collection meaning.
            </p>
          </div>
        </div>
        <FAQ />
      </div>
    </section>
  );
}
