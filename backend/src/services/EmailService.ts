import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'febengetachew580@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || ''
  }
});

export const EmailService = {
  sendNewsletterSubscription: async (email: string) => {
    try {
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: 'febengetachew580@gmail.com',
        subject: 'New Newsletter Subscription - Phevon Hotel',
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `
      });
      
      // Send confirmation to subscriber
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: email,
        subject: 'Welcome to Phevon Hotel Newsletter',
        html: `
          <h2>Thank you for subscribing!</h2>
          <p>You've successfully subscribed to the Phevon Hotel newsletter.</p>
          <p>Stay tuned for exclusive offers and updates.</p>
          <br>
          <p>Best regards,<br>Phevon The Grand Hotel & Spa</p>
        `
      });
      
      return { success: true };
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  },

  sendContactForm: async (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    try {
      await transporter.sendMail({
        from: '"Phevon Hotel Contact" <febengetachew580@gmail.com>',
        to: 'febengetachew580@gmail.com',
        replyTo: data.email,
        subject: `Contact Form: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <br>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `
      });
      
      // Send confirmation to sender
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: data.email,
        subject: 'We received your message - Phevon Hotel',
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${data.name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <br>
          <p>Best regards,<br>Phevon The Grand Hotel & Spa</p>
        `
      });
      
      return { success: true };
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  }
};
