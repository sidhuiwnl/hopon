import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactQueryProvider } from "@/providers/react-query-provider";



const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hopon",
  description: "Automate your DM's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={jakarta.className}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
