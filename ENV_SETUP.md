# Environment Variables Setup

## Getting Started

1. **Copy the environment file:**

   ```bash
   cp .env.example .env
   ```

2. **Update the values in `.env`:**

### Required Variables

#### Google Analytics

```env
VITE_GA_MEASUREMENT_ID=G-YOURACTUALID
```

- Get this from your Google Analytics 4 property
- Go to Admin → Data Streams → Web → Measurement ID

#### Application URLs

```env
VITE_APP_URL=https://yourdomain.com
VITE_APP_NAME=Your Company Name
```

- Update with your actual production domain
- Used for SEO meta tags and canonical URLs

#### Booking URL

```env
VITE_BOOKING_URL=https://your-booking-system.com
```

- Update with your actual booking/calendar system URL

### Optional Variables

#### Feature Flags

```env
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_WEB_VITALS=true
```

- Set to `false` to disable analytics and performance monitoring
- Useful for development or privacy compliance

#### Contact Information

```env
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

- Used in structured data and contact forms

#### Development Settings

```env
VITE_DEV_MODE=false
```

- Set to `true` for development-specific features

## Security Notes

- **Never commit `.env` to version control** - it's already in `.gitignore`
- Only commit `.env.example` with placeholder values
- Vite environment variables must start with `VITE_` to be exposed to the browser
- These variables are **public** - don't put sensitive data here

## Usage in Code

```javascript
// Access environment variables
const analyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const appUrl = import.meta.env.VITE_APP_URL;
const isDev = import.meta.env.DEV; // Built-in Vite variable
```

## Deployment

For production deployment, make sure to:

1. Set all required environment variables in your hosting platform
2. Update `VITE_APP_URL` to your production domain
3. Enable analytics: `VITE_ENABLE_ANALYTICS=true`
4. Enable Web Vitals: `VITE_ENABLE_WEB_VITALS=true`
5. Set development mode to false: `VITE_DEV_MODE=false`
