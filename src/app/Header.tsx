'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/actions/auth';

interface HeaderProps {
  session: {
    isAuth: boolean;
    userId: string;
  } | null;
}

export default function Header({ session }: HeaderProps) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/signin';

  return (
    <header
      style={{ backgroundColor: '#333', color: '#fff', padding: '15px 0' }}
    >
      <div
        className='container'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>
          <Link href='/' style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}>
            BBS App
          </Link>
        </h1>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {session ? (
            <>
              <Link href='/posts/create' style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
                投稿する
              </Link>
              <form action={logout}>
                <button
                  type='submit'
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  ログアウト
                </button>
              </form>
            </>
          ) : (
            !isAuthPage && (
              <>
                <Link href='/login' style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
                  ログイン
                </Link>
                <Link href='/signup' style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
                  新規登録
                </Link>
              </>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
