import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'company', 'message'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Consent validation
    if (!data.consent) {
      return NextResponse.json(
        { error: 'Consent required' },
        { status: 400 }
      );
    }

    // Format the inquiry data
    const inquiryData = {
      timestamp: new Date().toISOString(),
      personalInfo: {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        company: data.company.trim(),
        position: data.position?.trim() || 'Not specified'
      },
      inquiryDetails: {
        type: data.inquiryType || 'general',
        urgency: data.urgency || 'normal',
        budget: data.budget || 'Not specified',
        productId: data.productId || null,
        message: data.message.trim()
      },
      consent: data.consent,
      source: 'MetronixSystem Website'
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send confirmation email to customer
    // 4. Integrate with CRM system
    
    // For now, we'll simulate processing and return success
    console.log('Contact Form Submission:', inquiryData);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create response based on inquiry type
    let responseMessage = 'Thank you for your inquiry! We have received your message and will respond within 24 hours.';
    
    switch (data.inquiryType) {
      case 'quote':
        responseMessage = 'Thank you for your quote request! Our sales team will prepare a detailed proposal and contact you within 2 business days.';
        break;
      case 'demo':
        responseMessage = 'Thank you for your demo request! Our technical team will contact you within 1 business day to schedule a demonstration.';
        break;
      case 'support':
        responseMessage = 'Thank you for contacting our support team! A technical specialist will respond to your query within 4 hours during business hours.';
        break;
      case 'partnership':
        responseMessage = 'Thank you for your interest in partnering with MetronixSystem! Our business development team will review your inquiry and respond within 3 business days.';
        break;
      default:
        responseMessage = 'Thank you for your inquiry! We have received your message and will respond within 24 hours.';
    }

    // Here you would typically:
    // await sendEmailToAdmin(inquiryData);
    // await sendConfirmationEmail(data.email, responseMessage);
    // await saveToCRM(inquiryData);

    return NextResponse.json({
      success: true,
      message: responseMessage,
      inquiryId: `INQ-${Date.now()}`, // In production, use proper ID generation
      estimatedResponse: getEstimatedResponseTime(data.urgency)
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getEstimatedResponseTime(urgency) {
  switch (urgency) {
    case 'urgent':
      return 'Same day';
    case 'high':
      return 'Within 24 hours';
    case 'normal':
      return 'Within 3 days';
    case 'low':
      return 'Within 1 week';
    default:
      return 'Within 3 days';
  }
}

// In a real application, you might also want to implement:

/*
async function sendEmailToAdmin(inquiryData) {
  // Implementation for sending notification to admin
  // Could use services like SendGrid, AWS SES, Nodemailer, etc.
}

async function sendConfirmationEmail(email, message) {
  // Implementation for sending confirmation to customer
}

async function saveToCRM(inquiryData) {
  // Implementation for saving to CRM or database
  // Could integrate with Salesforce, HubSpot, etc.
}
*/ 