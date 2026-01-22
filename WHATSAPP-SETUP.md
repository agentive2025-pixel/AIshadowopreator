# WhatsApp Business Integration Setup

## Quick Start

All "Get in Touch" buttons throughout the site are now connected to WhatsApp Business!

## Replace Phone Number

To activate WhatsApp integration, you need to replace `YOUR_PHONE_NUMBER` with your actual phone number in the following format:

**Format:** `Country Code + Phone Number` (no spaces, dashes, or special characters)

**Examples:**
- US number: `15551234567` (1 + 10 digits)
- UK number: `447911123456` (44 + number without leading 0)
- India number: `919876543210` (91 + 10 digits)

## Files to Update

Search and replace `YOUR_PHONE_NUMBER` in these files:

1. `src/components/Hero.tsx`
2. `src/components/Navigation.tsx` (appears twice - desktop and mobile)

## Example

If your WhatsApp Business number is **+1 (555) 123-4567**, replace:

```
https://wa.me/YOUR_PHONE_NUMBER?text=Hello...
```

With:

```
https://wa.me/15551234567?text=Hello...
```

## Testing

After replacing the phone number:
1. Run `npm run build` to rebuild the project
2. Click any "Get in Touch" button on your site
3. It should open WhatsApp with your business number pre-filled

## Custom Message (Optional)

You can customize the pre-filled message by editing the `text=` parameter in the URLs. The current message is:

"Hello, I'm interested in learning more"

Change it by modifying the text after `text=` (remember to URL-encode spaces as `%20`).
