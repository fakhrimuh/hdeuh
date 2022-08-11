import Shopping from "../assets/shopping.png";
import Blob from "../assets/blob-full.png";

export default function HeroRight() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-4/6 h-screen relative">
        <img src={Blob} alt="blob bg" className="h-3/4 w-full" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
          <h3 className="text-4xl  text-orange-light font-bold">
            Manage and Handle distribution in one.
          </h3>
          <p className="font-medium mt-5 ">
            Membantu dalam urusan memanage dan mendistribusi barang dengan
            teartur dan terstruktur
          </p>
          <div className="mx-auto px-24 py-6 mt-10 text-center">
            <button
              href="#"
              className="px-24 py-4 rounded shadow-sm text-base text-orange-light bg-orange-dark  font-medium hover:bg-orange-default hover:text-orange-light hover:shadow-lg hover:opacity-100 bg-opacity-20"
            >
              <span className="text-orange-light"> JOIN </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-full md:w-2/6 h-screen">
        <img src={Shopping} className="h-3/4 w-3/4" alt="graph illustrations" />
      </div>
    </div>
  );
}
