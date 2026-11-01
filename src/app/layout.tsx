import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1d1610",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "An Duyên · Chùa online",
  description:
    "An Duyên — lên chùa cầu an, gặp người có duyên. Ngôi chùa 3D trên trình duyệt, vào ngay không cần đăng nhập.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "An Duyên · Chùa online",
    description:
      "Lên chùa cầu an, gặp người có duyên. Vào ngay trên điện thoại, không cần đăng nhập.",
    images: ["/icons/icon-512.png"],
    locale: "vi_VN",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "An Duyên",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&family=Lora:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
