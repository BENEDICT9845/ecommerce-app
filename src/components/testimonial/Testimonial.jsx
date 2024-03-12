/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-600">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/sachin.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-600 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Mukesh Ambani
                </h2>
                <p className="text-gray-500">Investor Relations</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-600 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Prajwal Benedict A
                </h2>
                <p className="text-gray-500">Chief Executive Officer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/gawri.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-600 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Sudha Murthy{" "}
                </h2>
                <p className="text-gray-500">Vice President</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
