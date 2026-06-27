import { verifySession } from '@/utils/session';
import HeaderClient from './HeaderClient';

export default async function Header() {
  const session = await verifySession();

  return <HeaderClient session={session} />;
}

export function HeaderFallback() {
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
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>
            BBS App
          </span>
        </h1>
      </div>
    </header>
  );
}
