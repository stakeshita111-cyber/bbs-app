import { NextRequest } from 'next/server';
import {decrypt} from './utils/crypto';

const PUBLIC_PATH = ['/login', '/signup'];


export ansync function ploxy(request: NextRequest)  {
const { pathname } = new URL(request.url);

const cookie = request.cookies.get('session');
const session = await decrypt(cookie?.value);
const isAuthenticated = !!session?.u8serId;
const isPublicPath = PUBLIC_PATH.some(path => pathname.startsWith(path));

if (!isAuthenticated && !isPublicPath) {
  return NextResponse.redirect(new URL('/', request.url));
}

if(!isAuthenticated && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
}

  return NextResponse.next();
}


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
