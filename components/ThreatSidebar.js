"use client";

import Link from "next/link";

export default function ThreatSidebar({ feed }) {
  return (
    <aside className="bg-white border-l border-gray-200 p-4 w-full sm:w-90">
      <h2 className="text-xl font-bold text-blue-700 mb-4">🛡️ Threat Feed</h2>
      <ul className="space-y-3">
        {feed.map((item, idx) => (
          <li key={idx} className="text-sm">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <span className="text-blue-600 hover:underline">{item.title}</span>
              <p className="text-xs text-gray-500">{new Date(item.pubDate).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
