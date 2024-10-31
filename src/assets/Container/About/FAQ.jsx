export default function FAQ() {
  return (
    <section id="faq">
      <div id="container" className="bg-beige">
        <div
          id="title-content"
          className="flex flex-col justify-center items-center mb-10 mt-20"
        >
          <h1 className="font-bold font-cormorant text-3xl text-maroon mt-4 ">
            Frequently Asked Question
          </h1>
          <div className="w-24 h-1 bg-gold mt-2"></div>
        </div>
        <div
          id="content-section"
          className="flex flex-col justify-center items-center"
        >
          <div id="question" className="flex justify-center mx-4 my-4">
            <div id="img">
              <img
                src="https://github.com/raaflahar/orwellian/blob/master/src/assets/img/face-picture-removebg-preview.png?raw=true"
                alt="Faces"
                className="w-[150px] rounded-full mx-4 border-2 border-burnt-orange shadow-lg"
              />
            </div>
            <div className="flex flex-col w-[400px] font-libre text-charcoal-black text-sm">
              <p className="mx-4 font-bold text-md mb-1">
                Question: Do Orwellian offers international shipment?
              </p>
              <p className="mx-4 mb-2">
                Answer: "Yes, Orwellian offers international shipping to various
                countries. To check if we ship to your country and for more
                details about the shipping cost and delivery time, please review
                the information at checkout or contact our customer service
                team."
              </p>
            </div>
          </div>
          <div id="question" className="flex justify-center mx-4 my-4">
            <div id="img">
              <img
                src="https://github.com/raaflahar/orwellian/blob/master/src/assets/img/face-picture-removebg-preview.png?raw=true"
                alt="Faces"
                className="w-[150px] rounded-full mx-4 border-2 border-burnt-orange shadow-lg"
              />
            </div>
            <div className="flex flex-col w-[400px] font-libre text-charcoal-black text-sm">
              <p className="mx-4 font-bold text-md mb-1">
                Question: What payment methods are accepted by Orwellian?
              </p>
              <p className="mx-4 mb-2">
                Answer: Orwellian accepts a variety of payment methods to make
                your shopping experience convenient and secure. We accept credit
                cards (Visa, MasterCard, American Express), debit cards, and
                popular digital wallets like PayPal and Apple Pay
              </p>
            </div>
          </div>
          <div id="question" className="flex justify-center mx-4 my-4">
            <div id="img">
              <img
                src="https://github.com/raaflahar/orwellian/blob/master/src/assets/img/face-picture-removebg-preview.png?raw=true"
                alt="Faces"
                className="w-[150px] rounded-full mx-4 border-2 border-burnt-orange shadow-lg"
              />
            </div>
            <div className="flex flex-col w-[400px] font-libre text-charcoal-black text-sm">
              <p className="mx-4 font-bold text-md mb-1">
                Question: Are there any additional fees or taxes when making a
                payment?
              </p>
              <p className="mx-4 mb-2">
                Answer: "Depending on your location and the applicable laws,
                there may be additional fees or taxes added to your order total
                at checkout. All charges, including any taxes, will be clearly
                displayed before you finalize your purchase. We strive to ensure
                full transparency, so there are no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
