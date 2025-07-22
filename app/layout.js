// app/layout.js
import "./globals.css";
import Layout from "../app/Layout/Layout"; // this is your custom layout with Nav + Sidebar

export const metadata = {
  title: "Cybersecurity Awareness",
  description: "Tools and resources for small businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
