export const generateEmailTemplate = (data: {
    firstName: string;
    lastName: string;
    companyName: string; // New field for company name
    email: string;
    phone: string;
    message: string;
  }) => {
    return `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>رسالة جديدة من نموذج الاتصال</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f7fa;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #eaeaea;
          }
          .header {
            background: linear-gradient(90deg, #003366, #0055a4);
            color: white;
            text-align: center;
            padding: 30px 20px;
          }
          .header h1 {
            font-size: 28px;
            margin: 0;
            font-weight: 700;
            letter-spacing: 1px;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 25px;
          }
          .label {
            font-weight: bold;
            color: #003366;
            display: block;
            margin-bottom: 8px;
            font-size: 18px;
          }
          .value {
            font-size: 16px;
            color: #555;
            word-break: break-word;
            background-color: #f9fafb;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #eaeaea;
            display: block;
          }
          .message {
            white-space: pre-wrap;
            background-color: #f9fafb;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #eaeaea;
            font-size: 16px;
            color: #333;
            line-height: 1.5;
          }
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #f9fafb;
            font-size: 14px;
            color: #777;
          }
          .footer a {
            color: #0055a4;
            text-decoration: none;
            font-weight: bold;
            display: block;
            margin-top: 10px;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          /* Additional Styling */
          .company-logo {
            display: block;
            margin: 0 auto 20px;
            width: 120px;
            height: auto;
          }
          .divider {
            border-top: 1px solid #eaeaea;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header Section -->
          <div class="header">
          
            <h1>رسالة جديدة من نموذج الاتصال</h1>
          </div>
  
          <!-- Content Section -->
          <div class="content">
            <div class="field">
              <span class="label">الاسم الكامل:</span>
              <span class="value">${data.firstName} ${data.lastName}</span>
            </div>
            <div class="field">
              <span class="label">اسم الشركة:</span>
              <span class="value">${data.companyName}</span>
            </div>
            <div class="field">
              <span class="label">البريد الإلكتروني:</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="field">
              <span class="label">رقم الهاتف:</span>
              <span class="value">${data.phone}</span>
            </div>
            <div class="field">
              <span class="label">الرسالة:</span>
              <div class="message">${data.message}</div>
            </div>
          </div>
  
          <!-- Divider -->
          <div class="divider"></div>
  
          <!-- Footer Section -->
          <div class="footer">
            شكراً لك على التواصل معنا! يمكنك زيارة موقعنا الإلكتروني عبر 
            <br>
            <a href="https://www.3capital-advisory.com/">3capitaladvisory</a>.
          </div>
        </div>
      </body>
      </html>
    `;
  };