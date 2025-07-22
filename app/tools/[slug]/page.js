"use client";
import { useParams } from "next/navigation";

export default function ToolPage() {
  const { slug } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 capitalize">
        {slug.replace(/-/g, " ")} Tool
      </h1>
      <p className="text-gray-700">
        This is a useful tool for small businesses: {slug.replace(/-/g, " ")}.
      </p>
      {/* In future: Load interactive tools like password generator, simulator, etc. */}
    </div>
  );
}
