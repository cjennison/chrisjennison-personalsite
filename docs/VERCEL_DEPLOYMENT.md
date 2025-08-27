# Vercel Deployment Guide

## **Pre-Deployment Checklist**

### **1. Domain Setup in Resend**
- [ ] Add and verify your domain in Resend dashboard
- [ ] Add DNS records (SPF, DKIM, DMARC)
- [ ] Wait for domain verification (usually 5-10 minutes)

### **2. Email Address Configuration**
Your production emails are already configured:
- **From**: `Contact Form <contact@chrisjennison.com>`
- **To**: `chris@chrisjennison.com`
- **Domain**: `chrisjennison.com` (needs verification in Resend)

## **Deployment Steps**

### **Step 1: Push to GitHub**
```bash
git add .
git commit -m "feat: add contact form with Resend integration"
git push origin main
```

### **Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Select your `chrisjennison-personalsite` repository
5. Click **"Deploy"**

### **Step 3: Set Environment Variables**
In your Vercel project dashboard:

1. **Go to Settings → Environment Variables**
2. **Add these variables:**

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `RESEND_API_KEY` | `re_YOUR_RESEND_API_KEY_HERE` | Production |
| `CONTACT_FORM_TEST_MODE` | `false` | Production |

**How to add each variable:**
- Click **"Add"**
- Enter **Name**: `RESEND_API_KEY`
- Enter **Value**: Your actual Resend API key
- Select **Environment**: `Production`
- Click **"Save"**

Repeat for `CONTACT_FORM_TEST_MODE` with value `false`.

### **Step 4: Redeploy**
After adding environment variables:
1. Go to **"Deployments"** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

## **Environment Variable Security**

### **✅ Secure Practices:**
- Environment variables are encrypted in Vercel
- Only visible to you and your team
- Not exposed in client-side code
- Separate from your source code

### **🔒 Production vs Development:**
- **Local**: Uses `.env.local` (not committed to git)
- **Production**: Uses Vercel environment variables
- **API keys**: Never hardcoded in source code

## **Testing Production Deployment**

### **Phase 1: Staging Test**
1. Deploy with `CONTACT_FORM_TEST_MODE=true` first
2. Test the deployed contact form
3. Check Vercel function logs for console output

### **Phase 2: Live Test**
1. Update `CONTACT_FORM_TEST_MODE=false`
2. Redeploy
3. Send one test email to verify everything works
4. Check your `chris@chrisjennison.com` inbox

## **Vercel Environment Variable Management**

### **Via Dashboard:**
```
Project → Settings → Environment Variables
```

### **Via CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add environment variable
vercel env add RESEND_API_KEY production

# List environment variables
vercel env ls

# Remove environment variable
vercel env rm RESEND_API_KEY production
```

## **Monitoring & Logs**

### **Check Function Logs:**
1. Go to **"Functions"** tab in Vercel
2. Click on your contact API function
3. View real-time logs and errors

### **Email Delivery Logs:**
1. Go to Resend dashboard
2. Click **"Logs"** to see delivery status
3. Monitor open/click rates

## **Domain Configuration**

### **Custom Domain (chrisjennison.com):**
1. In Vercel project settings
2. Go to **"Domains"**
3. Add `chrisjennison.com` and `www.chrisjennison.com`
4. Update DNS to point to Vercel

### **Email Domain:**
Must match your Resend verified domain:
- **Resend Domain**: `chrisjennison.com`
- **From Email**: `contact@chrisjennison.com`
- **Your Email**: `chris@chrisjennison.com`

## **Troubleshooting**

### **Email Not Sending:**
- Check Vercel function logs
- Verify domain in Resend dashboard
- Confirm API key is correct
- Check spam folder

### **Environment Variables Not Working:**
- Redeploy after adding variables
- Check variable names (case-sensitive)
- Verify environment is set to "Production"

### **Domain Issues:**
- Ensure DNS records are properly set
- Wait for DNS propagation (up to 24 hours)
- Check domain verification status in Resend

## **Production Checklist**

- [ ] Domain verified in Resend
- [ ] Environment variables set in Vercel
- [ ] Contact form tested in production
- [ ] Email delivery confirmed
- [ ] Custom domain configured
- [ ] SSL certificate active (automatic with Vercel)

Your contact form will be live and professional once deployed! 🚀
