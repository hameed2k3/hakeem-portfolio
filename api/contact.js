import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateBody(body) {
  const errors = [];
  if (!body.fullName || typeof body.fullName !== 'string') {
    errors.push('Full name is required');
  } else if (body.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters');
  }
  if (!body.email || typeof body.email !== 'string') {
    errors.push('Email is required');
  } else if (!validateEmail(body.email)) {
    errors.push('Valid email is required');
  }
  if (!body.subject || typeof body.subject !== 'string') {
    errors.push('Subject is required');
  } else if (body.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters');
  }
  if (!body.message || typeof body.message !== 'string') {
    errors.push('Message is required');
  } else if (body.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  return errors;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    if (!EMAIL_USER || !EMAIL_PASS) {
      res.status(500).json({
        success: false,
        message: 'Email configuration missing. Set EMAIL_USER and EMAIL_PASS.',
      });
      return;
    }

    let body;
    try {
      body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch {
      res.status(400).json({ success: false, message: 'Invalid JSON body' });
      return;
    }

    const validationErrors = validateBody(body);
    if (validationErrors.length > 0) {
      res.status(400).json({
        success: false,
        message: validationErrors[0],
      });
      return;
    }

    const fullName = String(body.fullName).trim();
    const email = String(body.email).trim().toLowerCase();
    const subject = String(body.subject).trim();
    const message = String(body.message).trim();
    const timestamp = new Date().toISOString();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `From: ${fullName} <${email}>`,
        `Subject: ${subject}`,
        `Time: ${timestamp}`,
        '',
        message,
      ].join('\n'),
      html: [
        `<p><strong>From:</strong> ${fullName} &lt;${email}&gt;</p>`,
        `<p><strong>Subject:</strong> ${subject}</p>`,
        `<p><strong>Time:</strong> ${timestamp}</p>`,
        '<hr/>',
        `<p>${message.replace(/\n/g, '<br/>')}</p>`,
      ].join(''),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    const message =
      err.code === 'EAUTH'
        ? 'Email authentication failed. Check EMAIL_USER and EMAIL_PASS.'
        : err.message || 'Failed to send email';
    res.status(500).json({ success: false, message });
  }
}
