import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailTemplate } from './emailTemplate';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // التحقق من البيانات المطلوبة
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // التحقق من وجود بيانات الاعتماد للبريد الإلكتروني
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('خطأ: بيانات اعتماد البريد الإلكتروني غير متوفرة');
      return NextResponse.json(
        { error: 'خطأ في إعدادات الخادم' },
        { status: 500 }
      );
    }

    // إعداد نقل البريد الإلكتروني
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // تفعيل SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: true // التحقق من شهادة SSL
      },
      debug: true // تمكين وضع التصحيح لمزيد من المعلومات
    });

    // إنشاء محتوى البريد الإلكتروني
    const emailContent = generateEmailTemplate(data);

    // التحقق من اتصال SMTP
    try {
      await transporter.verify();
    } catch (error) {
      console.error('خطأ في اتصال SMTP:', error);
      return NextResponse.json(
        { error: 'خطأ في الاتصال بخادم البريد' },
        { status: 500 }
      );
    }

    // إرسال البريد الإلكتروني
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'info@3capital-advisory.com',
        subject: 'رسالة جديدة من نموذج الاتصال',
        html: emailContent
      });

      // إرسال بريد تأكيد للمرسل
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: data.email,
          subject: 'تأكيد استلام رسالتك',
          html: `
            <div dir="rtl">
              <h2>شكراً لتواصلك معنا</h2>
              <p>عزيزي ${data.firstName} ${data.lastName},</p>
              <p>نؤكد استلام رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
              <p>مع خالص التحية،<br>فريق 3Capital-advisory </p>
            </div>
          `
        });

        return NextResponse.json(
          { message: 'تم استلام رسالتك بنجاح وسيتم الرد عليك قريباً' },
          { status: 200 }
        );
      } catch (error) {
        console.error('خطأ في إرسال بريد التأكيد:', error);
        // نستمر في التنفيذ حتى لو فشل إرسال بريد التأكيد
        return NextResponse.json(
          { message: 'تم استلام رسالتك بنجاح وسيتم الرد عليك قريباً' },
          { status: 200 }
        );
      }
    } catch (error) {
      console.error('خطأ في معالجة الطلب:', error);
      return NextResponse.json(
        { error: 'حدث خطأ أثناء معالجة طلبك' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('خطأ في معالجة الطلب:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء معالجة طلبك' },
      { status: 500 }
    );
  }
}

