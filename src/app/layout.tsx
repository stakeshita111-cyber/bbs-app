import './globals.css';
import Header from './Header';
import { verifySession } from '@/utils/session';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  return (
    <html lang="ja">
      <body>
        <Header session={session} />
        <main className="container" style={{ padding: '40px 20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
