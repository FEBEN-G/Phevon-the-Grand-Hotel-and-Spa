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
  },

  sendBookingNotification: async (data: {
    bookingId: string;
    roomName: string;
    checkIn: string;
    checkOut: string;
    totalPrice: number;
    guestEmail: string;
    guestName: string;
  }) => {
    try {
      // Send to hotel
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: 'febengetachew580@gmail.com',
        subject: 'New Booking Request - Phevon Hotel',
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Booking ID:</strong> ${data.bookingId}</p>
          <p><strong>Room:</strong> ${data.roomName}</p>
          <p><strong>Guest Name:</strong> ${data.guestName}</p>
          <p><strong>Guest Email:</strong> ${data.guestEmail}</p>
          <p><strong>Check-in:</strong> ${data.checkIn}</p>
          <p><strong>Check-out:</strong> ${data.checkOut}</p>
          <p><strong>Total Price:</strong> $${data.totalPrice}</p>
          <p><strong>Status:</strong> PENDING - Awaiting Payment</p>
          <br>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `
      });
      
      // Send confirmation to guest
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: data.guestEmail,
        subject: 'Booking Confirmation - Phevon Hotel',
        html: `
          <h2>Thank you for your booking!</h2>
          <p>Dear ${data.guestName},</p>
          <p>Your booking request has been received and is currently <strong>PENDING</strong>.</p>
          <br>
          <p><strong>Booking Details:</strong></p>
          <ul>
            <li>Room: ${data.roomName}</li>
            <li>Check-in: ${data.checkIn}</li>
            <li>Check-out: ${data.checkOut}</li>
            <li>Total: $${data.totalPrice}</li>
          </ul>
          <br>
          <p>Please check your email for payment instructions to confirm your reservation.</p>
          <br>
          <p>Best regards,<br>Phevon The Grand Hotel & Spa</p>
        `
      });
      
      return { success: true };
    } catch (error) {
      console.error('Booking email sending error:', error);
      throw error;
    }
  },

  sendReviewNotification: async (data: {
    roomName: string;
    guestName: string;
    guestEmail: string;
    rating: number;
    comment: string;
  }) => {
    try {
      // Send to hotel
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: 'febengetachew580@gmail.com',
        subject: 'New Review Submitted - Phevon Hotel',
        html: `
          <h2>New Review Submitted</h2>
          <p><strong>Room:</strong> ${data.roomName}</p>
          <p><strong>Guest:</strong> ${data.guestName} (${data.guestEmail})</p>
          <p><strong>Rating:</strong> ${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)} (${data.rating}/5)</p>
          <p><strong>Comment:</strong></p>
          <p>${data.comment}</p>
          <br>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `
      });
      
      // Send confirmation to guest
      await transporter.sendMail({
        from: '"Phevon Hotel" <febengetachew580@gmail.com>',
        to: data.guestEmail,
        subject: 'Review Submitted - Thank You!',
        html: `
          <h2>Thank you for your review!</h2>
          <p>Dear ${data.guestName},</p>
          <p>Your review has been successfully submitted.</p>
          <br>
          <p><strong>Your Review:</strong></p>
          <p>Rating: ${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}</p>
          <p>${data.comment}</p>
          <br>
          <p>We appreciate your feedback and look forward to welcoming you again!</p>
          <br>
          <p>Best regards,<br>Phevon The Grand Hotel & Spa</p>
        `
      });
      
      return { success: true };
    } catch (error) {
      console.error('Review email sending error:', error);
      throw error;
    }
  }
};
