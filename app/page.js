"use client";

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Head from "next/head";
import QRCode from "react-qr-code";
import { cyberAwarenessLinks } from "../data/links";
import { TabContext } from "../context/TabContext";


export default function Home() {
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { activeTab } = useContext(TabContext);

  useEffect(() => {
    const fetchPreviews = async () => {
      setLoading(true);
      const fetched = await Promise.all(
        cyberAwarenessLinks.map(async (link) => {
          try {
            const { data } = await axios.get(
              `https://api.microlink.io?url=${encodeURIComponent(link.url)}`
            );

            return {
              ...link,
              image: data?.data?.image?.url || null,
              title: data?.data?.title || link.title || "No title",
              description:
                data?.data?.description || link.description || "No description",
            };
          } catch (err) {
            console.warn("Preview failed for:", link.url, err.message);
            return {
              ...link,
              title: link.title || "Unavailable",
              description: "Preview failed. Click to visit the site.",
            };
          }
        })
      );
      setPreviews(fetched);
      setLoading(false);
    };

    fetchPreviews();
  }, []);

  const filtered = previews.filter((site) =>
    !activeTab || activeTab === "All" ? true : site.category === activeTab
  );

  return (
    <>
      <Head>
        <title>Cyber Awareness Grid</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
        {loading ? (
          <p className="text-center text-gray-600">Loading resources...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((site, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col justify-between"
              >
                {site.image && (
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4 flex-1">
                  <h2 className="text-lg font-semibold text-blue-600 mb-1 line-clamp-1">
                    {site.title}
                  </h2>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {site.description}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 pb-4">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 underline"
                  >
                    Visit
                  </a>
                  <div className="bg-white p-1 rounded">
                    <QRCode value={site.url} size={48} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
