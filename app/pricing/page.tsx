// import Image from "next/image";

// const Pricing = () => {
//   return (
//     <section className="max-container padding-container pt-5 md:pt-10">
//       <div className="flexCenter flex-col">
//         <h1 className="bold-32 md:bold-40 mb-5">Pricing</h1>
//         <div className=" flexCenter gap-1 border border-green-50 px-3 py-1 rounded-3xl">
//           <Image src="/sparkles.svg" alt="sparkles" width={20} height={20} />
//           <p className="regular-16  text-gray-30  ">
//             Try the <span className="bold-18 text-green-50">Pro Plan</span> for
//             free with a <span className="bold-18">7-day</span> trial.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

import { TIERS } from "@/constants";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$24",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$32",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$48",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="flexCenter flex-col">
        <h1 className="bold-32 md:bold-40 mb-5">Pricing</h1>

        <div className=" flexCenter gap-1 border border-green-50 px-3 py-1 rounded-3xl">
          <Image src="/sparkles.svg" alt="sparkles" width={20} height={20} />

          <p className="regular-16  text-gray-30  ">
            Try the <span className="bold-18 text-green-50">Pro Plan</span>
            for free with a <span className="bold-18">7-day</span> trial.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {TIERS.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-green-50" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold leading-5 text-green-50">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-green-50"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-green-50 text-white shadow-sm hover:bg-green-500"
                    : "text-green-50 ring-1 ring-inset ring-green-200 hover:ring-green-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
