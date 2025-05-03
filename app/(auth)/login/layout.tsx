import Header from "@/components/layout/header";
import "@/app/globals.css";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
