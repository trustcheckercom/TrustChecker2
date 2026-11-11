"use client";

import Link from "next/link";

const plans = [
  {
    name: "1 Month",
    regular: "$19.99",
    discount: "0%",
    total: "$19.99",
    save: "$0",
    popular: false,
  },
  {
    name: "3 Months",
    regular: "$59.97",
    discount: "5%",
    total: "$56.97",
    save: "$3.00",
    popular: false,
  },
  {
    name: "6 Months",
    regular: "$119.94",
    discount: "10%",
    total: "$107.95",
    save: "$11.99",
    popular: true,
  },
  {
    name: "12 Months",
    regular: "$239.88",
    discount: "20%",
    total: "$191.90",
    save: "$47.98",
    popular: false,
  },
];

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-dark-700">
            <th className="text-left py-4 px-4 font-medium text-gray-400">Plan</th>
            <th className="text-left py-4 px-4 font-medium text-gray-400">Regular price</th>
            <th className="text-left py-4 px-4 font-medium text-gray-400">Discount</th>
            <th className="text-left py-4 px-4 font-medium text-gray-400">Total price</th>
            <th className="text-left py-4 px-4 font-medium text-gray-400">You save</th>
            <th className="py-4 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr
              key={plan.name}
              className={`border-b border-dark-700 ${plan.popular ? "bg-gold-600/5" : ""}`}
            >
              <td className="py-5 px-4 font-semibold">
                {plan.name}
                {plan.popular && (
                  <span className="ml-2 text-xs bg-gold-600 text-dark-900 px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </td>
              <td className="py-5 px-4 text-gray-400 line-through">{plan.regular}</td>
              <td className="py-5 px-4 text-gold-400">{plan.discount}</td>
              <td className="py-5 px-4 text-xl font-bold">{plan.total}</td>
              <td className="py-5 px-4 text-green-400">{plan.save}</td>
              <td className="py-5 px-4 text-right">
                <Link
                  href="/signup"
                  className="inline-block px-5 py-2 rounded-lg gold-gradient text-dark-900 text-sm font-medium hover:opacity-90"
                >
                  Start trial
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center text-sm text-gray-500 mt-6">
        All plans include a 3-day free trial. Card required. Cancel anytime.
      </p>
    </div>
  );
}