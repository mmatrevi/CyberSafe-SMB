"use client";

import { useState } from "react";
import Nav from "./Nav";

export default function NavWrapper({ children }) {
  const [activeTab, setActiveTab] = useState("Phishing");

  return (
    <>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Clone children and inject activeTab props */}
      {typeof children === "function"
        ? children({ activeTab, setActiveTab })
        : children}
    </>
  );
}
