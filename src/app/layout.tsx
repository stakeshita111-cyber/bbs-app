import './globals.css';
import Header, { HeaderFallback } from './Header';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense>
        <main className="container" style={{ padding: '40px 20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
