import "./globals.css";

export const metadata = {
  title: "Davis Oduor | Engineering Portfolio",
  description:
    "Infrastructure and IAM focused engineering portfolio with cloud systems work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
