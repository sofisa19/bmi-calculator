# ⚖️ Universal BMI Calculator & Tracker

A modern, fast, and feature-rich Body Mass Index (BMI) calculator and history tracker built for mobile (Android & iOS) and web. Developed with **Expo (SDK 55)**, **React Native**, **NativeWind (Tailwind CSS v4)**, and **MMKV Storage**.

---

## 🚀 Features

- **Dynamic Inputs:** Easily input your height and weight using smooth, interactive slider controls.
- **Gender Selection:** Custom radio buttons to select Male, Female, or Prefer not to say.
- **Interactive Results Modal:**
  - Real-time BMI value calculation.
  - A color-coded visual indicator gauge (representing Severe Underweight to Obese Class III).
  - Accurate medical classification labels.
  - **Weight Goals Guidance:** Tells you exactly how many kilograms you need to lose or gain to reach a healthy weight.
- **History Tracking & Management:**
  - Save calculation history automatically (username and age required).
  - Dedicated History page showing height, weight, exact BMI, classification, gender, and full timestamp.
  - Fast delete functionality to clear individual history records.
- **Ultra-Fast Performance:** Powered by **MMKV**, the fastest key-value local storage framework for React Native.
- **Modern UI/UX:** Sleek card layouts, floating labels, vibrant status colors, and smooth modal swipe interactions.

---

## 🛠️ Tech Stack & Key Libraries

- **Core Framework:** [Expo (SDK 55)](https://expo.dev) & React Native
- **Routing & Navigation:** [Expo Router](https://docs.expo.dev/router/introduction) (File-based tab routing)
- **Styling:** [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS integration for React Native)
- **Local Storage:** [React Native MMKV](https://github.com/mrousavy/react-native-mmkv) (High-performance key-value storage)
- **Interactive Components:** `react-native-modal`, `@react-native-community/slider`
- **Animations:** `react-native-reanimated`
- **Icons:** `@expo/vector-icons` (Ionicons & AntDesign)
- **Language:** TypeScript

---

## 📂 Project Structure

```text
bmi-calculator/
├── assets/                 # App assets (icons, splash screen)
├── src/
│   ├── app/                # Expo Router App Entry
│   │   ├── (tabs)/         # Tab Navigation
│   │   │   ├── _layout.tsx # Tabs Layout & Header Styling
│   │   │   ├── history.tsx # History Log Screen
│   │   │   └── index.tsx   # Main BMI Calculator Screen
│   │   ├── utils/          # Utility scripts
│   │   │   └── storage.ts  # MMKV storage initialization
│   │   ├── _layout.tsx     # Root Stack Layout
│   │   └── global.css      # TailwindCSS Global styles
│   └── components/         # Reusable UI Components
│       ├── Card.tsx               # Content Wrapper Card
│       ├── FloatingLabelInput.tsx # Custom TextInput with animated floating labels
│       ├── HistoryComponent.tsx   # BMI history record card
│       ├── RadioInput.tsx         # Gender selection radio input
│       └── TextInput.tsx          # Standard text input wrapper
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts and dependency versions
```

---

## 📥 Getting Started

Follow these steps to run the application locally in development mode:

### 1. Prerequisites

Make sure you have Node.js and the Expo CLI tools installed. If you plan to test on physical devices, download the **Expo Go** app from the Google Play Store or Apple App Store.

### 2. Install Dependencies

Clone this repository, navigate to the directory, and install the package dependencies:

```bash
npm install
```

### 3. Start the Development Server

Start the local Expo development server:

```bash
npx expo start
```

### 4. Run on Devices

Use the commands printed in your terminal or press the keys:

- **`a`** to run on an Android emulator (requires Android Studio).
- **`i`** to run on an iOS simulator (requires macOS & Xcode).
- **`w`** to run on a web browser.
- **QR Code:** Scan the QR code in the terminal using the Expo Go app or iOS Camera to open the app on your physical mobile device.

---

## 🧪 Development Scripts

You can also use the following commands configured in `package.json`:

- **Run Android Development Build:** `npm run android`
- **Run iOS Development Build:** `npm run ios`
- **Start Web Server:** `npm run web`
- **Lint Code:** `npm run lint`
