"use client";
import Link from "next/link";

export default function RetailShops() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Retail Shops – Cybersecurity Overview</h1>
        
        <p className="mb-4 text-gray-700">
          Retail businesses handle customer payment data, inventory systems, and often operate both online and offline. This makes them a common target for cybercriminals.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Top Cyber Risks</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>POS Malware & Skimming Attacks</li>
          <li>Phishing emails targeting cashiers or managers</li>
          <li>Data breaches involving customer information</li>
          <li>Weak or shared Wi-Fi security</li>
          <li>Ransomware locking inventory systems</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Recommended Practices</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Segment POS systems from guest networks</li>
          <li>Use strong, unique passwords with MFA</li>
          <li>Provide security awareness training for staff</li>
          <li>Backup customer and inventory data regularly</li>
          <li>Encrypt customer card data and use tokenization</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Useful Tools</h2>
        <ul className="list-disc ml-6 text-blue-700 space-y-1">
          <li><Link href="/tools/password-generator" className="underline">Password Generator</Link></li>
          <li><Link href="/risk-check" className="underline">Cyber Risk Self-Assessment</Link></li>
          <li><Link href="/resources/policy-templates" className="underline">Retail Policy Templates</Link></li>
        </ul>
      </div>
    </main>
  );
}
