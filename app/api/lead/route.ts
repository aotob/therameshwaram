import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In a real application, you would save this to a database
    // like Supabase, Prisma/PostgreSQL, or send an email via Resend/Nodemailer.

    console.log('New Lead Received:', body);

    // Mock successful storage
    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process lead'
    }, { status: 500 });
  }
}
