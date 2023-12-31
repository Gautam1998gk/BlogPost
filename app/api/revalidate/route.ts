import { NextRequest,NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
//http://localhost:3000//api/revalidate?path=/&secret=c7fb1fe04d9957b852a15249f12217c3
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const path = request.nextUrl.searchParams.get('path') || "/"
 
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
 
  if (!path) {
    return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
  }
 
  revalidatePath(path)
 
  return NextResponse.json({ revalidated: true, now: Date.now() })
}