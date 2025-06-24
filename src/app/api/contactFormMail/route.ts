import { NextResponse } from 'next/server'
import { sendEmail, testConnection } from './createNodemailerConnection'

export async function POST(request: Request) {
  const { name, email, telephone, message } = await request.json()
  const response = await sendEmail(name, email, telephone, message)
  return NextResponse.json({ ...response })
}

export async function GET() {
  const response = await testConnection()
  return NextResponse.json({ ...response })
}