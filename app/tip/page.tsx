"use client";

import { useContext } from "react";
import { TabContext } from "../../context/TabContext";

export default function TipPage() {
  const { activeTab } = useContext(TabContext); // you can use this if needed

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-20 px-6">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full text-center border">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">💡 Cybersecurity Tip of the Day</h1>
          <p className="text-gray-800 text-lg">
            Use a password manager to create and store strong, unique passwords for each of your accounts.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Tip updates daily to help you stay safe online!
          </p>
        </div>
      </main>
    </>
  );
}
