import People from "../assets/people.png";
import City from "../assets/city.png";

export default function Cards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h3 className="text-4xl text-orange-default text-center font-bold mt-16">
        Pilih Sesuai Kebutuhanmu
      </h3>
      <div className="flex flex-wrap mt-10 items-center h-screen">
        <div className=" w-full md:w-1/2 h-screen">
          <div className="max-w-sm rounded mx-auto overflow-hidden border-2 border-orange-gray shadow-2xl hover:border-orange-default">
            <div className="px-6 py-4 text-center text-orange-default">
              <h3 className="font-medium text-xl mb-2">Individual</h3>
              <p className="font-bold">FREE</p>
            </div>

            <div className="mx-auto px-6 py-4 text-center">
              <button
                href="#"
                className="mx-auto px-4 py-2 mt-10 border border-orange-default rounded-full shadow-sm text-base text-orange-default font-medium hover:bg-orange-default hover:text-orange-light hover:shadow-lg "
              >
                Select
              </button>
            </div>

            <img
              className="mx-auto mt-10 w-48 h-96"
              src={People}
              alt="People ilustration"
            />
          </div>
        </div>

        {/* kanan */}
        <div className=" w-full md:w-1/2 h-screen">
          <div className="max-w-sm rounded mx-auto overflow-hidden border-2 border-orange-gray shadow-2xl hover:border-orange-default">
            <div className="px-6 py-4 text-center text-orange-default">
              <h3 className="font-medium text-xl mb-2">Perusahaan</h3>
              <p className="font-bold">
                RP.50000/ <span className="font-medium">Bulan</span>
              </p>
            </div>

            <div className="mx-auto px-6 py-4 text-center">
              <button
                href="#"
                className="mx-auto px-4 py-2 mt-10 border border-orange-default rounded-full shadow-sm text-base text-orange-default font-medium hover:bg-orange-default hover:text-orange-light hover:shadow-lg "
              >
                Select
              </button>
            </div>

            <img
              className="mx-auto mt-10 w-72 h-96"
              src={City}
              alt="city ilustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
