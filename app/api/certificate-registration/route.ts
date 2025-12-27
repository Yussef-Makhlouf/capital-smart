import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract form data
    const { firstName, lastName, email, phone, certificate, education, experience } = body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !certificate || !education || !experience) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Validate phone format
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Save the data to a database
    // 2. Send confirmation emails
    // 3. Integrate with CRM systems
    // 4. etc.
    
    // For now, we'll just log the data and return success
    console.log('Certificate Registration Form Submission:', {
      firstName,
      lastName,
      email,
      phone,
      certificate,
      education,
      experience,
      timestamp: new Date().toISOString()
    });
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration submitted successfully'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing certificate registration:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while processing your registration'
      },
      { status: 500 }
    );
  }
}