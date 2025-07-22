"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { TabContext } from "../context/TabContext";

export default function Nav({ toggleSidebar }) {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Risk Check", path: "/risk-check" },
    { name: "Daily Tip", path: "/tip" },
  ];

  const smbProfiles = [
    "Retail Shops",
    "Freelancers",
    "Healthcare",
    "Education",
    "Startups",
    "Restaurants",
    "Logistics"
  ];

  const tools = [
    "Password Generator",
    "Phishing Simulator",
    "VPN Comparison",
    "Firewall Setup Guide"
  ];

  const resources = [
    "Policy Templates",
    "Cyber News",
    "Incident Response Kit",
    "Employee Training Material"
  ];

  return (
    <nav className="bg-white border-b shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="text-xl font-bold text-blue-700">CyberSafe SMB</div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} className="text-gray-700 hover:text-blue-600">
              {item.name}
            </Link>
          ))}

          {/* Dropdowns */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600">SMB Profiles ▼</button>
            <div className="absolute hidden group-hover:block bg-white border -mt-px shadow-lg z-40 w-48">
              {smbProfiles.map((type, i) => (
                <Link
                  key={i}
                  href={`/smb/${type.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  {type}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600">Tools ▼</button>
            <div className="absolute hidden group-hover:block bg-white border -mt-px shadow-lg z-40 w-48">
              {tools.map((tool, i) => (
                <Link
                  key={i}
                  href={`/tools/${tool.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  {tool}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600">Resources ▼</button>
            <div className="absolute hidden group-hover:block bg-white border -mt-px shadow-lg z-40 w-48">
              {resources.map((res, i) => (
                <Link
                  key={i}
                  href={`/resources/${res.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  {res}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} className="block text-gray-700 hover:text-blue-600">
              {item.name}
            </Link>
          ))}

          <div>
            <p className="mt-3 font-semibold text-sm text-gray-600">SMB Profiles</p>
            {smbProfiles.map((type, i) => (
              <Link
                key={i}
                href={`/smb/${type.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-sm pl-2 py-1 text-black hover:text-blue-600"
              >
                {type}
              </Link>
            ))}
          </div>

          <div>
            <p className="mt-3 font-semibold text-sm text-gray-600">Tools</p>
            {tools.map((tool, i) => (
              <Link
                key={i}
                href={`/tools/${tool.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-sm pl-2 py-1 text-black hover:text-blue-600"
              >
                {tool}
              </Link>
            ))}
          </div>

          <div>
            <p className="mt-3 font-semibold text-sm text-gray-600">Resources</p>
            {resources.map((res, i) => (
              <Link
                key={i}
                href={`/resources/${res.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-sm pl-2 py-1 text-black hover:text-blue-600"
              >
                {res}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
