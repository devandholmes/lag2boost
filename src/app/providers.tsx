'use client'

import NavBar from "@/components/nav-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <NavBar />
      {children}
    </div>
  );
}