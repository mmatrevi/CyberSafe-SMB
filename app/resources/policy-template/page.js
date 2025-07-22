"use client";

const templates = [
  { title: "Password Policy", url: "/templates/password-policy.pdf" },
  { title: "Phishing Response Plan", url: "/templates/phishing-response.pdf" },
  { title: "Data Backup Policy", url: "/templates/backup-policy.pdf" },
  { title: "Device Security Guidelines", url: "/templates/device-policy.pdf" }
];

export default function PolicyTemplates() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Policy Templates</h1>
      <div className="space-y-4">
        {templates.map((t) => (
          <a
            key={t.title}
            href={t.url}
            download
            className="block p-4 bg-white border rounded shadow hover:shadow-md text-blue-700 font-medium"
          >
            {t.title}
          </a>
        ))}
      </div>
    </div>
  );
}
