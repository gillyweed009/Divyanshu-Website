# Email Setup Guide

## Current Status
Your ContactForm now has email functionality with two options:

### Option 1: EmailJS (Recommended for production)
EmailJS allows sending emails directly from your frontend without a backend server.

**Setup Steps:**
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create an email service (connect your Gmail account)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key
5. Update the ContactForm.tsx with your actual IDs (replace the placeholder values)

**Current Fallback:**
The form currently uses a mailto link that opens the user's email client with pre-filled information.

### Option 2: Direct Contact Buttons
The form also includes:
- **Email Button**: Opens user's email client to send directly to divyanshumohanty22@gmail.com  
- **LinkedIn Button**: Opens your LinkedIn profile (https://www.linkedin.com/in/divyanshu-mohanty)

## Testing
1. Run `npm run dev` to test the form
2. The "Send Message" button will open the user's email client (until EmailJS is configured)
3. Direct email and LinkedIn buttons work immediately

## EmailJS Template Example
When you create your EmailJS template, use this format:

```
Subject: New Contact Form Message from {{from_name}}

You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

## Security Note
The current implementation is secure and doesn't expose sensitive information. EmailJS handles the actual email sending through their secure servers.