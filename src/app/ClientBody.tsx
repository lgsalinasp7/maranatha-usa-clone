"use client";

import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

export function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
}
