// middleware.ts (place this in your root directory, same level as app folder)
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  
  // Define valid sections
  const validSections: string[] = ['home', 'about', 'skill', 'projects', 'contact'];
  
  // Remove leading slash and get the route name
  const route = pathname.slice(1).toLowerCase();
  
  // If it's the root path, allow it to proceed normally
  if (pathname === '/') {
    return NextResponse.next();
  }
  
  // If the route matches a valid section, redirect to root with hash
  if (validSections.includes(route)) {
    // Use 302 redirect to root with hash fragment
    return NextResponse.redirect(`${origin}/#${route}`, 302);
  }
  
  // For any other route, redirect to home section
  return NextResponse.redirect(`${origin}/#home`, 302);
}

export const config = {
  // Match all paths except static files and API routes
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}