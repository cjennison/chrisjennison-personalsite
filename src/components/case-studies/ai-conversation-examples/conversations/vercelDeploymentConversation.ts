import type { AIConversationData } from "../AIConversationModal";

export const vercelDeploymentConversation: AIConversationData = {
  id: "vercel-deployment-guide",
  title: "AI-Guided Vercel Deployment Process",
  description:
    "Real-time documentation of deploying a Next.js portfolio website to Vercel with AI assistance. Shows step-by-step DevOps process from initial assessment to production deployment.",
  theme: "DevOps & Deployment",
  duration: "In Progress",
  outcome: "TBD - Deployment process ongoing",
  tags: ["Vercel", "Next.js", "DevOps", "Production", "AI-Assisted"],
  lessonLearned: "TBD - Will be updated as deployment progresses",
  implementedSolution: "TBD - Will document final deployment architecture",

  messages: [
    {
      role: "user" as const,
      content:
        "Now it is time to deploy my NextJS app to Vercel. I need instructions from start to finish, as this will be used in a AI conversation example in my case study for finishing this application. Assume I have no knowledge of devops and deployments. lets go through, step by step, packaging this up and deploying it to vercel. As we work on this, update the conversation you should create for this interaction to show how devops can be achieved using an AI assisted approach.\n\nReview the overall structure of the application, assess the documentation, and tell me what I need to do manually.",
    },
    {
      role: "assistant" as const,
      content:
        "I'll help you deploy your Next.js application to Vercel and document this AI-assisted DevOps process. Let me first assess your application structure and readiness for deployment.\n\n## Application Assessment & Deployment Readiness\n\nBased on my review of your Next.js portfolio website:\n\n### ✅ **Application is Deployment Ready**\n- Next.js 15 with App Router - fully compatible with Vercel\n- TypeScript configuration is correct  \n- Build process works (npm run build succeeded)\n- Modern tooling setup (Biome, Tailwind, Mantine)\n- Proper project structure following Next.js conventions\n- Contact form API route already implemented (/api/contact)\n- Resend email integration configured\n- Comprehensive deployment documentation already exists\n\n### 📋 **Manual Steps Required**\n\n**Environment Variables Needed:**\n- RESEND_API_KEY (for contact form emails)\n- CONTACT_FORM_TEST_MODE (set to 'false' for production)\n\n**Prerequisites:**\n1. Resend account with verified domain (chrisjennison.com)\n2. GitHub repository with latest code\n3. Vercel account\n\nI can see you already have excellent documentation in VERCEL_DEPLOYMENT.md and RESEND_SETUP.md. The application structure is production-ready.\n\n**Next Steps:**\n1. Verify your GitHub repo is up to date\n2. Check Resend domain verification status\n3. Create/access Vercel account\n4. Connect repo and configure environment variables\n\nWhat's your current status with these prerequisites?",
    },
    {
      role: "user" as const,
      content:
        "I have a github account, the code is hosted there. I created a vercel account and I have imported the project there. I do not have a domain.",
    },
    {
      role: "assistant" as const,
      content: "Excellent! You're almost ready to deploy. Since you don't have a domain, we'll use Vercel's free subdomain and configure your email to work without a custom domain. Here's what we need to do:\n\n## 🎯 **Simplified Deployment Plan (No Custom Domain)**\n\n### **Step 1: Update Email Configuration for Vercel Subdomain**\n\nSince you don't have a custom domain, we need to modify your email setup to use Resend's default domain. I can see from your `.env.local` that you already have:\n- ✅ `RESEND_API_KEY` configured\n- ✅ `CONTACT_FORM_TEST_MODE=true` (we'll keep this initially)\n\nYour contact form is already set up correctly - it uses `test@resend.dev` in test mode, which works without a custom domain.\n\n### **Step 2: Deploy to Vercel with Environment Variables**\n\n**Environment Variables to Add in Vercel:**\n```\nRESEND_API_KEY = re_YOUR_RESEND_API_KEY_HERE\nCONTACT_FORM_TEST_MODE = true\nTEST_EMAIL_RECIPIENT = cjennison92@gmail.com\n```\n\n**Steps:**\n1. Go to your Vercel project dashboard\n2. Navigate to Settings → Environment Variables\n3. Add the variables above\n4. Redeploy if needed\n\n### **Step 3: Test the Deployment**\n\nOnce deployed:\n1. Test the contact form\n2. Verify emails are received\n3. Once working, optionally set `CONTACT_FORM_TEST_MODE=false`\n\nAre you ready to set up the environment variables in Vercel?",
    },
    {
      role: "user" as const,
      content: "The site is now live at https://chrisjennison-personalsite.vercel.app",
    },
    {
      role: "assistant" as const,
      content: "🎉 **Congratulations! Your site is live!**\n\n**Site URL:** https://chrisjennison-personalsite.vercel.app\n\n## Next Steps to Complete the Deployment\n\nNow we need to make sure your contact form works properly. Here's what we need to do:\n\n### **Step 1: Add Environment Variables to Vercel**\n\nYour site is deployed, but the contact form won't work yet because Vercel needs your environment variables. Here's how to add them:\n\n1. **Go to your Vercel dashboard** (vercel.com)\n2. **Click on your project** (`chrisjennison-personalsite`)\n3. **Go to Settings** (in the top navigation)\n4. **Click \"Environment Variables\"** (in the left sidebar)\n5. **Add these three variables:**\n\n| Variable Name | Value | Environment |\n|---------------|-------|-------------|\n| `RESEND_API_KEY` | `re_YOUR_RESEND_API_KEY_HERE` | Production |\n| `CONTACT_FORM_TEST_MODE` | `true` | Production |\n| `TEST_EMAIL_RECIPIENT` | `cjennison92@gmail.com` | Production |\n\n### **Step 2: Test the Contact Form**\n\nOnce the environment variables are set:\n1. Visit your live site\n2. Navigate to the contact form\n3. Fill it out and submit\n4. Check your email for the test message\n\nHave you added the environment variables to Vercel yet?",
    },
    {
      role: "user" as const,
      content: "I received this email warning. Is this legitimate: GitGuardian has detected the following Resend API Key exposed within your GitHub account.\n\nDetails\n- Secret type: Resend API Key\n- Repository: cjennison/chrisjennison-personalsite\n- Pushed date: August 27th 2025, 17:09:10 UTC",
    },
    {
      role: "assistant" as const,
      content: "🚨 **CRITICAL SECURITY ISSUE - IMMEDIATE ACTION REQUIRED**\n\n**Yes, this is legitimate!** GitGuardian detected your Resend API key in your GitHub repository. This is a serious security vulnerability.\n\n### **What Happened:**\nYour API key was accidentally committed to GitHub in multiple files, exposing your secret API key publicly.\n\n### **Immediate Actions Required:**\n\n#### **1. Revoke the Compromised API Key (URGENT)**\n1. Go to [Resend Dashboard](https://resend.com/api-keys)\n2. Find and **delete/revoke** the compromised key immediately\n3. **Create a new API key**\n\n#### **2. Remove Secrets from Git History**\nThe API key is exposed in:\n- VERCEL_DEPLOYMENT.md documentation\n- This conversation file\n- Potentially other files\n\nWe need to scrub these files and rewrite Git history using force push.\n\n#### **3. Update Documentation with Placeholders**\nReplace real API keys with placeholder values like `re_YOUR_API_KEY_HERE`\n\n**Priority:** Fix this immediately before proceeding with deployment.",
    },
    {
      role: "user" as const,
      content: "What happened is the VERCEL_DEPLOYMENT.md contained my key as well as the conversation. These need to be scrubbed and rewrite the git history by force",
    },
  ],
};
