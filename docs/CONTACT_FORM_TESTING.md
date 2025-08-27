# Contact Form Testing Guide

## **Current Setup: Test Mode Enabled**

Your contact form is currently configured for safe testing with these settings in `.env.local`:

```bash
CONTACT_FORM_TEST_MODE=true
TEST_EMAIL_RECIPIENT=your-test-email@gmail.com
```

## **Testing Modes Available**

### **1. Test Mode (Current - Safe for Development)**
**Status**: ✅ Currently Active
**What happens**:
- Form submissions are logged to console instead of sending emails
- No actual emails are sent
- Form validation and UX still work perfectly
- You can see all form data in the browser dev tools

**How to test**:
1. Open your browser dev tools (F12)
2. Go to the Console tab
3. Fill out and submit the contact form
4. Check the console for the logged email data

### **2. Resend Test Emails (Safe Email Testing)**
**How to enable**:
1. Update `.env.local`:
   ```bash
   CONTACT_FORM_TEST_MODE=false
   TEST_EMAIL_RECIPIENT=your-personal-email@gmail.com
   ```
2. Restart your dev server: `npm run dev`

**What happens**:
- Emails are actually sent via Resend
- Emails go to your test email (not your business email)
- Subject line includes "[TEST]" prefix
- Yellow test banner appears in emails

### **3. Production Mode (Live Emails)**
**How to enable**:
1. Update `.env.local`:
   ```bash
   CONTACT_FORM_TEST_MODE=false
   # Remove or comment out TEST_EMAIL_RECIPIENT
   ```
2. Update the API route with your actual email addresses
3. Restart your dev server

## **Recommended Testing Flow**

### **Phase 1: Console Testing (Current)**
✅ Test form validation
✅ Test all form fields
✅ Test error handling
✅ Test success/loading states
✅ Test mobile responsiveness

**What to test**:
- [ ] Submit form with missing required fields
- [ ] Submit form with invalid email
- [ ] Submit form with all fields filled
- [ ] Test on mobile device
- [ ] Test loading and success states

### **Phase 2: Email Testing**
**Setup**: Change `CONTACT_FORM_TEST_MODE=false` and set your test email

**What to test**:
- [ ] Form submits and sends email to your test inbox
- [ ] Email formatting looks professional
- [ ] All form data appears correctly
- [ ] Reply-to functionality works
- [ ] Test email has "[TEST]" prefix and warning banner

### **Phase 3: Pre-Launch**
**Setup**: Configure production emails and domain

**What to test**:
- [ ] Set up domain verification in Resend
- [ ] Update email addresses to production values
- [ ] Send one final test to your business email
- [ ] Verify everything works end-to-end

## **Current Testing Commands**

```bash
# View console logs (test mode)
npm run dev
# Then open browser dev tools and submit form

# Check for TypeScript errors
npm run lint

# Build test (ensure everything compiles)
npm run build
```

## **Environment Variables Reference**

```bash
# Test Mode (logs to console, no emails sent)
CONTACT_FORM_TEST_MODE=true

# Safe Email Testing (sends test emails)
CONTACT_FORM_TEST_MODE=false
TEST_EMAIL_RECIPIENT=your-test-email@gmail.com

# Production Mode (sends real emails)
CONTACT_FORM_TEST_MODE=false
# No TEST_EMAIL_RECIPIENT variable
```

## **Next Steps**

1. **Start testing in console mode** (currently active)
2. **When ready**: Switch to email test mode
3. **Before launch**: Set up domain verification and production emails

Your contact form is safe to test right now! Fill it out and check the browser console to see the logged data.
