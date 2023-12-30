import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';
export const metadata : Metadata = ({
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description:"The Official Next js Course Dashboard, Built with app router done by Vishal",
  metadataBase:new URL("nextjs-dashboard-theta-ten-36.vercel.app")
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
