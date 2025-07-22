"use client";
import { useParams } from "next/navigation";

export default function ResourcePage() {
  const { slug } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 capitalize">
        {slug.replace(/-/g, " ")} Resource
      </h1>
      <p className="text-gray-700">
        Resource content for: {slug.replace(/-/g, " ")}.
      </p>
      {/* Add download links or embedded PDFs here */}
    </div>
  );
}
