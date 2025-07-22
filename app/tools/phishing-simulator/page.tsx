"use client";

import { useState } from "react";

const emails = [
  {
    id: 1,
    subject: "Your account has been suspended",
    sender: "support@paypal-security.com",
    body: "We've noticed unusual activity. Click here to verify your account: http://paypal-secure-login.com",
    isPhishing: true,
  },
  {
    id: 2,
    subject: "Order Confirmation - Amazon",
    sender: "orders@amazon.com",
    body: "Thanks for your purchase! Your item will be delivered soon. View order: https://www.amazon.com/your-orders",
    isPhishing: false,
  },
  {
    id: 3,
    subject: "Netflix Account Update",
    sender: "netflix@billing-update.com",
    body: "Your payment was declined. Update your billing info here: http://netflixbillingupdate.com",
    isPhishing: true,
  },
  {
    id: 4,
    subject: "Security Alert from Google",
    sender: "no-reply@google.com",
    body: "We've blocked a suspicious sign-in to your account. Review activity here: https://myaccount.google.com/security",
    isPhishing: false,
  },
  {
    id: 5,
    subject: "Apple ID Locked",
    sender: "appleid@secure-apple.com",
    body: "We’ve locked your Apple ID due to multiple failed login attempts. Restore access here: http://appleid-unlock.com",
    isPhishing: true,
  },
  {
    id: 6,
    subject: "Important Dropbox Notice",
    sender: "noreply@dropbox.com",
    body: "You’ve been invited to collaborate on a file. Click here to view the file: https://www.dropbox.com/s/secure-file",
    isPhishing: false,
  },
];

export default function PhishingSimulator() {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleChoice = (id, choice) => {
    setAnswers((prev) => {
      const updated = { ...prev, [id]: choice };
      if (Object.keys(updated).length === emails.length) {
        const correct = emails.filter((email) => updated[email.id] === email.isPhishing).length;
        setScore(correct);
        setCompleted(true);
      }
      return updated;
    });
  };

  return (
    <>
      <main className="max-w-5xl mx-auto py-12 px-6 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Phishing Email Simulator
        </h1>

        {!completed ? (
          <div className="grid gap-6">
            {emails.map((email) => (
              <div
                key={email.id}
                className="bg-white p-6 rounded-xl shadow border border-gray-200"
              >
                <h2 className="text-lg font-semibold mb-1">{email.subject}</h2>
                <p className="text-sm text-gray-500 mb-1">From: {email.sender}</p>
                <p className="text-gray-700 mb-4">{email.body}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleChoice(email.id, true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      answers[email.id] === true
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-red-100"
                    }`}
                  >
                    Report as Phishing
                  </button>
                  <button
                    onClick={() => handleChoice(email.id, false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      answers[email.id] === false
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-green-100"
                    }`}
                  >
                    Mark as Safe
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-3xl font-bold text-blue-700">
              You scored {score} out of {emails.length}
            </h2>
            <p className="text-gray-600 mt-2">Thanks for practicing your phishing detection skills!</p>
            <button
              onClick={() => {
                setAnswers({});
                setCompleted(false);
                setScore(0);
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}
      </main>
    </>
  );
}
