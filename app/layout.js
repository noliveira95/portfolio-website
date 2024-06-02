import '../styles/globals.css';
import { Cabin, DM_Sans } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
config.autoAddCss = false;

const cabin = Cabin({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-cabin',
});

const dmSans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Nick Oliveira: Front-end Developer & UX/UI Designer',
  description: 'Front-end developer and UX/UI designer based in Las Vegas, NV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cabin.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
