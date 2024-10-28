import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "박태환 portfolio",
  description: "FE 개발자 박태환",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
