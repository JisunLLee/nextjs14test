import React from 'react';
import Navigation from '../components/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Tem',
    default: 'Next Tem',
  },
  // desciption: "Hello this is Homepage"
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
