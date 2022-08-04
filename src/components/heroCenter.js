/* This example requires Tailwind CSS v2.0+ */
import Truck from "../assets/truck delivery.png";

export default function HeroCenter() {
  return (
    <div className="relative bg-white overflow-hidden">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center mx-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-orange-default sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Mudah Untuk Digunakan</span>
          </h1>
          <p className="mt-3 text-orange-grey font-regular sm:mt-5 sm:text-lg sm:max-w-xl mx-auto">
            Mufti Apps lebih mengutamakan untuk mempermudah penggunannya secara
            efisien
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center mx-auto">
            <img
              className="mx-auto w-2/5 h-2/5"
              src={Truck}
              alt="truck ilustration"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
