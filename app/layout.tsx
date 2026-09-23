import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nirman.World — Everything Construction. One Trusted Platform.',
  description: 'Managed construction services with full project visibility.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
