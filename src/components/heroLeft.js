import Graph from "../assets/graph.png";
import { CheckCircleIcon } from "@heroicons/react/solid";

const features = [
  {
    list: "Sistem Kalkulasi Otomatis.",
    icon: CheckCircleIcon,
  },
  {
    list: "Terdapat visualisasi data statistik order dan pengiriman",
    icon: CheckCircleIcon,
  },
  {
    list: "Terdapat grafik pemantauan perkembangan.",
    icon: CheckCircleIcon,
  },
];

export default function Left() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-wrap md items-center h-screen">
        <div className=" w-full md:w-1/2 h-screen">
          <img src={Graph} className="h-3/4 w-3/4" alt="graph illustrations" />
        </div>
        <div className="bg-white w-full md:w-1/2 h-screen">
          <div className="mx-32">
            <h3 className="text-4xl text-orange-default font-bold mt-16">
              Fitur yang dimiliki Mufti
            </h3>

            <div className="description w-full sm: md:w-full mt-10 text-sm">
              Kamu bisa menikmati fitur-fitur yang membantu dalam kamu sebagai
              distributor:
            </div>

            {/* List with Icons */}
            <dl className="space-y-10 mt-8 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div className="inline-flex relative items-center">
                  <dt>
                    <div className="absolute flex items-center h-12 w-12 rounded-md text-white">
                      <feature.icon
                        className="h-6 w-6 bg-orange-default text-orange-light rounded-full"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 ml-10 text-sm">{feature.list}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
