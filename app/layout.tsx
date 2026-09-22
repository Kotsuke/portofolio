
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { InitialLoader } from "@/components/ui/initial-loader";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Subandrio — Portfolio",
  description:
    "Personal portfolio of Subandrio — Developer, creator, and problem solver.",
  openGraph: {
    title: "Subandrio — Portfolio",
    description:
      "Personal portfolio of Subandrio — Developer, creator, and problem solver.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)}>
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased">
        <InitialLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
