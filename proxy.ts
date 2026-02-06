import { NextResponse, NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // ۱. گرفتن توکن یا وضعیت لاگین از کوکی‌ها
  const isAuthenticated = request.cookies.get('auth_token')?.value

  const { pathname } = request.nextUrl

  // ۲. تعریف مسیرهای محافظت شده
  const protectedPaths = ['/account', '/history']

  // ۳. اگر کاربر لاگین نبود و می‌خواست به مسیرهای محافظت شده برود
  if (!isAuthenticated && protectedPaths.some(path => pathname.startsWith(path))) {
    // او را به صفحه اصلی یا لاگین ریدایرکت کن
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// ۴. تعیین اینکه پروکسی روی چه مسیرهایی اجرا شود
export const config = {
  matcher: ['/account', '/history'],
}