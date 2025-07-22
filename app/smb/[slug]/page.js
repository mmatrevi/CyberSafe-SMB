"use client";
import { useParams } from "next/navigation";

const advice = {
  "retail-shops": [
    "Ensure POS systems are regularly updated.",
    "Use a separate Wi-Fi for customers and staff.",
    "Implement security cameras integrated with your network."
  ],
  "freelancers": [
    "Use a VPN when working remotely.",
    "Avoid reusing passwords—use a password manager.",
    "Enable MFA for all client platforms."
  ],
  // Add more SMBs here
};

export default function SMBProfile() {
  const { slug } = useParams();
  const tips = advice[slug] || ["General cybersecurity tips for SMBs coming soon."];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 capitalize mb-4">
        {slug.replace(/-/g, " ")} Cyber Profile
      </h1>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
