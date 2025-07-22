"use client";

import Nav from "../../../components/Nav";

const vpnData = [
  {
    name: "NordVPN",
    price: "$3.29/mo",
    devices: "6",
    speed: "Excellent",
    logs: "No Logs",
    killSwitch: "Yes",
    website: "https://nordvpn.com",
  },
  {
    name: "ExpressVPN",
    price: "$6.67/mo",
    devices: "5",
    speed: "Very Fast",
    logs: "No Logs",
    killSwitch: "Yes",
    website: "https://expressvpn.com",
  },
  {
    name: "Surfshark",
    price: "$2.49/mo",
    devices: "Unlimited",
    speed: "Fast",
    logs: "No Logs",
    killSwitch: "Yes",
    website: "https://surfshark.com",
  },
  {
    name: "ProtonVPN",
    price: "Free / Paid",
    devices: "10 (Paid)",
    speed: "Good",
    logs: "No Logs",
    killSwitch: "Yes",
    website: "https://protonvpn.com",
  },
];

export default function VPNComparison() {
  return (
    <>
      <Nav showFilters={false} />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
            VPN Comparison for Small Businesses
          </h1>

          <div className="overflow-x-auto rounded-lg shadow-md bg-white border">
            <table className="min-w-full table-auto text-sm text-gray-800">
              <thead className="bg-blue-100 text-left text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">VPN</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Devices</th>
                  <th className="px-4 py-3">Speed</th>
                  <th className="px-4 py-3">No Logs</th>
                  <th className="px-4 py-3">Kill Switch</th>
                  <th className="px-4 py-3">Website</th>
                </tr>
              </thead>
              <tbody>
                {vpnData.map((vpn, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold">{vpn.name}</td>
                    <td className="px-4 py-3">{vpn.price}</td>
                    <td className="px-4 py-3">{vpn.devices}</td>
                    <td className="px-4 py-3">{vpn.speed}</td>
                    <td className="px-4 py-3">{vpn.logs}</td>
                    <td className="px-4 py-3">{vpn.killSwitch}</td>
                    <td className="px-4 py-3">
                      <a
                        href={vpn.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 text-center mt-4">
            Always review the latest privacy policies and user reviews before choosing a VPN.
          </p>
        </div>
      </main>
    </>
  );
}
