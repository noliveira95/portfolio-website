import "../styles/globals.css";
import { Work_Sans, DM_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
config.autoAddCss = false;

const workSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Nicholas Oliveira: Front-end Developer & UX/UI Designer",
  description:
    "Freelance front-end developer and UX/UI designer based in Las Vegas, NV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${workSans.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
