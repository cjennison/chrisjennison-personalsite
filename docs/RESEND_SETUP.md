# Resend Email Setup Guide

## 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Add and Verify Your Domain
1. In the Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `chrisjennison.com`)
4. Add the required DNS records to your domain provider:
   - SPF record
   - DKIM record
   - DMARC record (optional but recommended)
5. Wait for verification (usually takes a few minutes)

## 3. Get Your API Key
1. Go to "API Keys" in the Resend dashboard
2. Click "Create API Key"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Select "Sending access" permission
5. Copy the API key (starts with `re_`)

## 4. Environment Variables
Add these to your `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
```

## 5. Update Email Addresses
In `src/app/api/contact/route.ts`, update:
- `from:` Use your verified domain email
- `to:` Use your personal email where you want to receive messages

Example:
```typescript
from: "Contact Form <contact@chrisjennison.com>",
to: ["chris@chrisjennison.com"],
```

## 6. Test the Contact Form
1. Fill out the contact form on your website
2. Check your email inbox
3. Verify the email formatting and reply-to functionality

## DNS Records Example
For domain `chrisjennison.com`:

**SPF Record (TXT):**
```
v=spf1 include:_spf.resend.com ~all
```

**DKIM Record (TXT):**
```
Name: resend._domainkey
Value: [provided by Resend dashboard]
```

**DMARC Record (TXT):**
```
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@chrisjennison.com
```

## Free Tier Limits
- 3,000 emails per month
- 100 emails per day
- Perfect for contact forms

## Troubleshooting
- Ensure DNS records are properly set
- Check spam folder if emails aren't arriving
- Verify API key permissions
- Check Resend dashboard for delivery logs
