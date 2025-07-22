// app/qrcode/page.tsx
"use client";

import QRCode from "react-qr-code";

export default function QRCodePage() {
  const tipUrl = "https://yourdomain.com/tip"; // change to your real domain

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Scan for a Daily Cyber Tip</h1>
        <QRCode value={tipUrl} size={200} />
        <p className="mt-4 text-sm text-gray-600">Scan this QR code to get a fresh cybersecurity tip every day!</p>
      </div>
    </div>
  );
}
