import People from "../assets/people.png";

export default function Cards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h3 className="text-4xl text-orange-default text-center font-bold mt-16">
        Pilih Sesuai Kebutuhanmu
      </h3>
      <div className="flex flex-wrap mt-10 items-center h-screen">
        <div className=" w-full md:w-1/2 h-screen">
          <div className="max-w-sm rounded border border-orange-default mx-auto overflow-hidden shadow-lg">
            <div className="px-6 py-4 text-center">
              <h3 className="font-bold text-xl mb-2">Individual</h3>
              <p className="text-gray-700 text-base">FREE</p>
            </div>

            <a
              href="#!"
              className="mx-auto px-4 py-2 mt-10 border border-orange-default rounded-full shadow-sm text-base text-orange-default font-medium hover:bg-orange-default hover:text-orange-light"
            >
              Select
            </a>
            <img
              className="mx-auto w-2/5 h-2/5"
              src={People}
              alt="people ilustration"
            />
          </div>
        </div>

        {/* kanan */}
        <div className=" w-full md:w-1/2 h-screen">
          <div className="max-w-sm rounded mx-auto overflow-hidden border border-orange-default shadow-lg">
            <div className="px-6 py-4 text-center">
              <h3 className="font-bold text-xl mb-2">Individual</h3>
              <p className="text-gray-700 text-base">FREE</p>
            </div>

            <button
              href="#!"
              className="mx-auto px-4 py-2 mt-10 border border-orange-default rounded-full shadow-sm text-base text-orange-default font-medium hover:bg-orange-default hover:text-orange-light"
            >
              Select
            </button>
            <img
              className="mx-auto w-2/5 h-2/5"
              src={People}
              alt="people ilustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
