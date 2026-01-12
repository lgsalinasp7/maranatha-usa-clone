import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Come Grow In Your Faith With Life Abundant Church in Los Angeles",
  description:
    "Join a real community of believers who love & obey Jesus here at Life Abundant. Experience authentic worship with us, and grow in your faith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
