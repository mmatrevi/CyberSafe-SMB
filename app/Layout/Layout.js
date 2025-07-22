"use client";

import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import { TabProvider } from "../../context/TabContext";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await fetch("/api/feed");
        const data = await res.json();
        setFeedItems(data);
      } catch (error) {
        console.error("Failed to load RSS feed", error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <TabProvider>
      <Nav toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] bg-white border-r shadow-md overflow-y-auto transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <div className="p-4 text-gray-800 font-bold border-b">
          🛡️ Live Threat Feed
        </div>
        <ul className="px-4 py-2 space-y-2 text-sm text-blue-700">
          {feedItems.length > 0 ? (
            feedItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  • {item.title}
                </a>
              </li>
            ))
          ) : (
            <li className="text-gray-500">Loading threats...</li>
          )}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="ml-0 md:ml-64 px-4 py-6">{children}</main>
    </TabProvider>
  );
}
