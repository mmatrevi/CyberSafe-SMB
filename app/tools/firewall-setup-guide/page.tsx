// app/tools/firewall-setup-guide/page.js
"use client";

export default function FirewallSetupGuide() {
  return (
    <>
      <main className="min-h-screen mt-20 px-6 py-10 bg-gradient-to-br from-white to-blue-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-6">Firewall Setup Guide</h1>

          <p className="mb-4">
            A firewall helps protect your small business network by filtering incoming and outgoing traffic.
            Follow these simple steps to set up a basic firewall:
          </p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Choose a Firewall:</strong> You can use a hardware firewall (router with built-in protection)
              or a software firewall (Windows Defender, pfSense, UFW for Linux).
            </li>
            <li>
              <strong>Change Default Credentials:</strong> Always change the default admin username and password.
            </li>
            <li>
              <strong>Update Firmware:</strong> Ensure your firewall/router firmware is up to date.
            </li>
            <li>
              <strong>Block Inbound Ports:</strong> Only open the ports you need (e.g., 80 for web servers, 443 for HTTPS).
            </li>
            <li>
              <strong>Enable Logging:</strong> Turn on firewall logs to monitor suspicious activity.
            </li>
            <li>
              <strong>Restrict Outbound Access:</strong> Limit outbound traffic from devices to necessary destinations.
            </li>
            <li>
              <strong>Segment Your Network:</strong> Place IoT or guest devices on separate networks or VLANs.
            </li>
            <li>
              <strong>Test Your Configuration:</strong> Use online tools (like ShieldsUP or Nmap) to verify your firewall.
            </li>
          </ol>

          <div className="mt-10 bg-white p-6 rounded-xl shadow border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Helpful Tools</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><a className="text-blue-600 underline" href="https://nmap.org" target="_blank">Nmap – Network Scanner</a></li>
              <li><a className="text-blue-600 underline" href="https://www.grc.com/shieldsup" target="_blank">ShieldsUP – Port Scanner</a></li>
              <li><a className="text-blue-600 underline" href="https://docs.netgate.com/pfsense/en/latest/" target="_blank">pfSense Docs</a></li>
              <li><a className="text-blue-600 underline" href="https://ubuntu.com/server/docs/security-firewall" target="_blank">UFW Setup (Linux)</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
