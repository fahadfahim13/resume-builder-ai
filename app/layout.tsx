import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import Header from "./components/Header";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "./components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Gen Resume Builder",
  description:
    "Build professional resumes effortlessly with AI and land your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ReduxProvider>
            {/* <QueryClientContextProvider> */}
            <div className="min-h-full">
              <Header />
              <main>
                <div className="container">{children}</div>
              </main>
              <Toaster />
            </div>
            {/* </QueryClientContextProvider> */}
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
