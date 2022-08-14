/* This example requires Tailwind CSS v2.0+ */
import {
  UsersIcon,
  LocationMarkerIcon,
  ServerIcon,
} from "@heroicons/react/solid";

const features = [
  {
    name: "90+",
    description: "Users.",
    icon: UsersIcon,
  },
  {
    name: "30+",
    description: "Locations",
    icon: LocationMarkerIcon,
  },
  {
    name: "50+",
    description: "Servers",
    icon: ServerIcon,
  },
];

export default function DataUser() {
  return (
    <div className="max-w-7xl pb-16 mx-auto px-4 sm:px-6">
      <div className="">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <feature.icon
                    className="h-12 w-12  text-orange-default rounded-full"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
