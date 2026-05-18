# 🚀 Welcome to Your Biela-Powered Mobile App

This is not just another Expo app. This is a **production-ready native mobile application** built with Biela's intelligent development system, designed to work seamlessly across iOS, Android, and Web.

---

## 🎯 What Makes This Different?

Your app runs on **React Native** — the same technology powering Instagram, Discord, Shopify, Coinbase, and Tesla's mobile apps. But unlike starting from scratch, you've got Biela's optimization layer on top, meaning:

- ✨ **Intelligent component architecture** right out of the box
- 🎨 **Theme-aware design system** that adapts to user preferences
- ⚡ **Performance-optimized** routing with Expo Router
- 🔐 **Supabase-ready** database integration
- 🎭 **Haptic feedback** on iOS for premium UX
- 📱 **Universal compatibility** — one codebase, three platforms

---

## 🛠️ Development Setup

### Prerequisites

Make sure you have these installed:
- **Node.js** (v18 or newer) — [Download here](https://nodejs.org/)
- **pnpm** (recommended package manager) — [Install guide](https://pnpm.io/installation)

### Quick Start

```bash
# Clone this repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies with pnpm
pnpm install

# Start development server
pnpm run dev
```

After running `pnpm run dev`, you'll see a QR code. Scan it with:
- **iOS**: Camera app (opens Expo Go automatically)
- **Android**: Expo Go app

**Important**: Your phone and computer must be on the same WiFi network.

---

## 📦 Available Commands

```bash
# Start development server with tunnel (works across different networks)
pnpm run dev

# Run on iOS Simulator (macOS only)
pnpm run ios

# Run on Android Emulator
pnpm run android

# Run in web browser
pnpm run web
```

---

## 🧪 Testing Your App

### Option 1: Test on Your Physical Device (Recommended)

This gives you the most accurate experience:

1. Download **Expo Go**:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Run `pnpm run dev`

3. Scan the QR code that appears in your terminal

4. Your app loads instantly with live reload enabled

**Pro Tip**: Any changes you make to your code will automatically refresh on your device.

### Option 2: Test in Your Browser

```bash
pnpm run web
```

Great for rapid UI testing, but note that some native features (like haptics, camera, geolocation) won't work in the browser.

### Option 3: Use Simulators/Emulators

**For iOS** (requires macOS with Xcode):
```bash
pnpm run ios
```

**For Android** (requires Android Studio):
```bash
pnpm run android
```

---

## 🗄️ Database Integration (Supabase)

This app is architected to work seamlessly with **Supabase** — a powerful PostgreSQL database with built-in authentication, real-time subscriptions, and file storage.

### Setting Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)

2. Create a new project and copy your credentials:
   - Project URL
   - Anon/Public Key

3. Add Supabase to your project:

```bash
pnpm install @supabase/supabase-js
```

4. Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

5. Your app is now connected to Supabase and ready for:
   - User authentication (email/password)
   - Database queries with Row Level Security
   - Real-time data synchronization
   - File uploads and storage

**Security Note**: Never commit your `.env` file to Git. It's already in `.gitignore` for your protection.

---

## 🚢 Deploying Your App

### Deploy to App Store (iOS)

You'll need an **Apple Developer Account** ($99/year).

```bash
# Install EAS CLI globally
pnpm install -g @expo/eas-cli

# Configure your project
eas build:configure

# Build for iOS
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

Follow the prompts to complete your submission. Full guide: [Expo iOS Deployment](https://docs.expo.dev/submit/ios/)

### Deploy to Google Play (Android)

You'll need a **Google Play Developer Account** ($25 one-time fee).

```bash
# Build for Android
eas build --platform android

# Submit to Google Play
eas submit --platform android
```

Full guide: [Expo Android Deployment](https://docs.expo.dev/submit/android/)

### Deploy as a Web App

Your React Native app can also run as a progressive web app:

```bash
# Build for web
npx expo export:web
```

Then deploy to any static hosting service:
- **Vercel** (recommended) — Connect your GitHub repo
- **Netlify** — Automatic deployments from Git
- **Firebase Hosting** — Google's hosting solution

**Pro Tip**: The web version shares 95%+ of your mobile code, so you maintain one codebase for all platforms.

---

## 🎨 Customization & Theming

Your app includes a sophisticated theming system out of the box.

### Theme Colors

Edit `constants/theme.ts` to customize your color palette:

```typescript
const tintColorLight = '#0a7ea4';  // Your brand color
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    // ... more colors
  },
  dark: {
    // Dark mode variants
  },
};
```

Changes are automatically applied across iOS, Android, and Web.

### Typography

Font customization is handled in `constants/theme.ts`:

```typescript
export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',        // SF Pro on iOS
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  // Android and Web variants...
});
```

---

## 🔥 Advanced Features

### Custom Development Builds

For features like Face ID, in-app purchases, or push notifications, you'll need a **Custom Development Build** instead of Expo Go.

When you need it:
- Native biometric authentication (Face ID, Touch ID)
- In-app purchases and subscriptions
- Native push notifications
- Third-party SDKs (analytics, crash reporting)
- Custom native modules

How to create one:

```bash
# Install EAS CLI
pnpm install -g @expo/eas-cli

# Create development build
eas build --profile development --platform ios
eas build --profile development --platform android

# Run your app with the dev build
pnpm run dev --dev-client
```

Learn more: [Expo Development Builds Guide](https://docs.expo.dev/develop/development-builds/introduction/)

---

## 🧩 Key Technologies Used

- **React Native** — Cross-platform mobile framework (by Meta)
- **Expo** — Development platform and build service
- **Expo Router** — File-based navigation system
- **TypeScript** — Type-safe JavaScript
- **Zustand** — Lightweight state management
- **Supabase** — PostgreSQL database with real-time capabilities
- **React Native Reanimated** — High-performance animations

---

## 📚 Essential Resources

### Official Documentation
- [Expo Documentation](https://docs.expo.dev/) — Complete platform guide
- [React Native Docs](https://reactnative.dev/) — Core framework reference
- [Supabase Docs](https://supabase.com/docs) — Database and auth guides

### Learning Resources
- [Expo YouTube Channel](https://www.youtube.com/@expo) — Video tutorials
- [React Native Express](https://www.reactnative.express/) — Interactive course
- [Expo Blog](https://blog.expo.dev/) — Updates and best practices

### Community Support
- [Expo Forums](https://forums.expo.dev/) — Community help
- [React Native Directory](https://reactnative.directory/) — Library finder
- [Expo GitHub Discussions](https://github.com/expo/expo/discussions) — Technical Q&A

---

## 🐛 Troubleshooting

### App won't load on your device?

1. Confirm your phone and computer are on the **same WiFi network**
2. Try tunnel mode: `pnpm run dev -- --tunnel`
3. Check firewall settings (allow Metro bundler)
4. Restart both the dev server and Expo Go app

### Build errors?

```bash
# Clear cache and restart
npx expo start --clear

# Nuclear option: reinstall dependencies
rm -rf node_modules
pnpm install
```

### Supabase connection issues?

- Verify your `.env` file has the correct credentials
- Check that environment variables start with `VITE_`
- Restart the dev server after changing `.env`
- Ensure Row Level Security policies allow your operations

### Still stuck?

Check [Expo's troubleshooting guide](https://docs.expo.dev/troubleshooting/build-errors/) or search the [forums](https://forums.expo.dev/).

---

## 🌐 Need a Custom Domain?

### For Web Deployments

All major hosting platforms support custom domains with free SSL:

- **Vercel** — Add custom domain in project settings
- **Netlify** — Configure through domain management
- **Your own hosting** — Deploy static build anywhere

### For Mobile Apps

Configure deep linking in `app.json`:

```json
{
  "expo": {
    "scheme": "myapp",
    "ios": {
      "bundleIdentifier": "com.yourcompany.myapp"
    },
    "android": {
      "package": "com.yourcompany.myapp"
    }
  }
}
```

This enables URLs like `myapp://profile/123` to open your app.

---

## ⚡ Performance Tips

- **Images**: Use `expo-image` instead of `Image` for better caching
- **Lists**: Always use `FlatList` or `SectionList` for long lists
- **Navigation**: Lazy-load screens that aren't immediately needed
- **Animations**: Use `react-native-reanimated` for 60fps animations
- **Bundle size**: Analyze with `npx expo-analyze` and remove unused dependencies

---

## 🔐 Security Best Practices

- Never commit `.env` files (already in `.gitignore`)
- Use Supabase Row Level Security for all database tables
- Validate all user input on both client and server
- Keep dependencies updated: `pnpm update --latest`
- Enable two-factor auth on your Expo and Supabase accounts

---

## 📱 App Store Guidelines

Before submitting to App Store or Google Play:

✅ Test on real devices, not just simulators  
✅ Add proper app icons and splash screens  
✅ Write clear privacy policy and terms of service  
✅ Include app screenshots and descriptions  
✅ Test all features thoroughly  
✅ Comply with platform-specific guidelines  

---

## 🎯 What's Next?

Your Biela-powered app is ready for development. Here are some ideas:

- Add user authentication with Supabase Auth
- Create custom screens with Expo Router
- Integrate real-time data with Supabase subscriptions
- Add push notifications with Expo Notifications
- Implement in-app purchases for monetization
- Add analytics to track user behavior
- Create a custom UI component library

---

**Built with Biela** — Intelligent mobile development for modern teams.

Need help? Check out the resources above or explore the [Biela documentation](#).

---

*This project uses React Native and Expo — the same technology stack trusted by Discord, Shopify, Coinbase, Tesla, and thousands of other production apps.*
