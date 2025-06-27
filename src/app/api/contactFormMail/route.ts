import { NextResponse } from 'next/server'
import { sendEmail, testConnection } from '../../lib/nodemailer/createNodemailerConnection'
import { validateToken } from '@/app/lib/recaptcha/recaptcha'

export async function POST(request: Request) {
  const { name, email, telephone, message, token } = await request.json()

  const isTokenValidated = await validateToken(token)
  if(isTokenValidated.error) return NextResponse.json({ ...isTokenValidated })

  const responseForm = await sendEmail(name, email, telephone, message)
  return NextResponse.json({ ...responseForm })
}

export async function GET() {
  const response = await testConnection()
  return NextResponse.json({ ...response })
}