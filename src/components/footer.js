import Logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <div>
      <div className="flex mt-10 mx-24 px-6 py-4 justify-center items-center lg:justify-between shadow">
        <div className="mr-12 hidden lg:block">
          <span className="text-3xl font-semibold">
            Join sekarang untuk <br /> mencoba Mufti Apps
          </span>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto px-24 py-6 mt-10 text-center">
            <button
              href="#"
              className="px-24 py-4 border border-orange-default rounded shadow-sm uppercase text-orange-light bg-orange-default font-medium drop-shadow-2xl shadow-2xl hover:bg-orange-default hover:text-orange-light"
            >
              <span className="text-orange-light"> Join </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="text-center lg:text-left bg-orange-default bg-opacity-10">
        <div className="mx-6 py-10 text-center md:text-left ">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6
                className="
            uppercase
            font-bold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                <img src={Logo} alt="Logo" className="h-16 w-16 mr-4" />
                mufti apps
              </h6>
              <p>
                Membantu dalam urusan memanage dan mendistribusi barang dengan
                teartur dan terstruktur
              </p>
            </div>
            <div className="ml-96">
              <h6 className="uppercase font-medium   mb-4 flex justify-center md:justify-start">
                Product
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Download
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Locations
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Servers
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Countries
                </a>
              </p>
              <p>
                <a href="#!" className="text-orange-grey">
                  Blog
                </a>
              </p>
            </div>
            <div className="ml-56">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                FAQ
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Tutorials
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  About Us
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-orange-grey">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-orange-grey">
                  Terms of Service
                </a>
              </p>
            </div>
            <div className="ml-24">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Earn Money
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                Affiliate
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                Become Partner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
