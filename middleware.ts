import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__session')?.value;
  const { pathname } = request.nextUrl;

  // Routes protégées
  const protectedRoutes = ['/client', '/admin'];
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Redirection basée sur le rôle (sera gérée côté client)
  return NextResponse.next();
}

export const config = {
  matcher: ['/client/:path*', '/admin/:path*']
};