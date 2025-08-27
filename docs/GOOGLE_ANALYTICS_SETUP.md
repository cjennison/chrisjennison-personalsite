# Google Analytics Setup Guide

This document provides instructions for setting up Google Analytics 4 (GA4) on the Christopher Jennison portfolio website.

## Prerequisites

1. **Google Analytics Account**: Create a Google Analytics account at [analytics.google.com](https://analytics.google.com)
2. **GA4 Property**: Set up a new GA4 property for your website
3. **Measurement ID**: Obtain your GA4 Measurement ID (format: G-XXXXXXXXXX)

## Setup Instructions

### 1. Create Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Create Account" or use existing account
3. Set up a new property:
   - **Property Name**: Christopher Jennison Portfolio
   - **Time Zone**: Select your timezone
   - **Currency**: Select your currency
4. Configure data streams:
   - **Platform**: Web
   - **Website URL**: Your domain (e.g., https://chrisjennison.com)
   - **Stream Name**: Portfolio Website

### 2. Get Measurement ID

1. In your GA4 property, go to **Admin** (gear icon)
2. Under **Property**, click **Data Streams**
3. Click on your web stream
4. Copy the **Measurement ID** (starts with G-)

### 3. Configure Environment Variables

Add your Measurement ID to your environment variables:

#### For Local Development (.env.local)
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### For Production (Vercel)
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your GA4 Measurement ID
   - **Environment**: Production (and Preview if desired)

### 4. Verify Installation

1. Deploy your changes
2. Visit your website
3. In Google Analytics, go to **Reports** → **Realtime**
4. You should see your visit appear in real-time

## Analytics Features

### Automatic Tracking

The following events are automatically tracked:

- **Page Views**: All page navigation
- **Scroll Depth**: 25%, 50%, 75%, 90% milestones
- **Contact Form Submissions**: Successful and failed submissions

### Custom Events

The following custom events are tracked:

#### Contact Form Events
- `contact_form_submit`: When form is successfully submitted
- `contact_success`: Successful form submission with project type
- `contact_error`: Failed form submission

#### Navigation Events
- `navigate`: Section navigation with method (nav_click, scroll, hero_cta)

#### Service Events
- `service_view`: Service page visits

#### Case Study Events
- `view`, `expand`, `modal_open`: Case study interactions

#### External Link Events
- `external_link_click`: Outbound link clicks

#### Download Events
- `download`: File downloads (PDFs, resume, etc.)

#### UI Events
- `theme_change`: Light/dark theme switches

### Privacy Configuration

The analytics implementation includes privacy-friendly settings:

- **IP Anonymization**: Enabled
- **Google Signals**: Disabled
- **Ad Personalization**: Disabled
- **Production Only**: Analytics only loads in production environment

## Adding Analytics to New Components

### Import Analytics Functions

```typescript
import { trackEvent, trackNavigation, trackServiceView } from "@/lib/analytics";
```

### Track Custom Events

```typescript
// Basic event tracking
trackEvent("button_click", "engagement", "hero_cta");

// Navigation tracking
trackNavigation("services", "nav_click");

// Service page visits
trackServiceView("ai-coding");
```

### Use Analytics Hooks

```typescript
import { usePageTracking, useScrollTracking } from "@/hooks/useAnalytics";

function MyComponent() {
  // Automatically track page views
  usePageTracking();

  // Automatically track scroll depth
  useScrollTracking();

  return <div>...</div>;
}
```

## Testing Analytics

### Development Testing

1. Analytics is disabled in development by default
2. To test locally, set environment variable:
   ```bash
   NODE_ENV=production npm run dev
   ```

### Production Testing

1. Use Google Analytics Real-time reports
2. Check browser developer tools for gtag events
3. Use Google Analytics Debugger browser extension

## Troubleshooting

### Analytics Not Working

1. **Check Measurement ID**: Ensure it's correctly set in environment variables
2. **Check Environment**: Analytics only works in production builds
3. **Check Console**: Look for JavaScript errors in browser console
4. **Check Network**: Verify requests to google-analytics.com in Network tab

### Common Issues

- **404 Errors**: Measurement ID might be incorrect
- **No Data**: Make sure you're in production environment
- **Delayed Data**: GA4 can have up to 24-hour delays for some reports

## Security and Privacy

### GDPR Compliance

Consider adding a cookie consent banner if serving EU users:

```typescript
// Example cookie consent implementation
const [cookieConsent, setCookieConsent] = useState(false);

// Only load analytics after consent
{cookieConsent && <GoogleAnalytics />}
```

### Data Retention

Configure data retention settings in Google Analytics:
1. Go to **Admin** → **Data Settings** → **Data Retention**
2. Set appropriate retention period (14 months recommended)

## Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics Integration](https://nextjs.org/docs/basic-features/built-in-css-support)
- [GDPR Compliance Guide](https://support.google.com/analytics/answer/9019185)
