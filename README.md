# 💖 ThisValentine - A Cute Valentine Proposal Web App

## 🌟 Overview
**ThisValentime** is a fun and interactive Valentine’s Day web app designed to ask someone to be your valentine in a creative and adorable way. The app features a playful UI, floating hearts, a growing "Yes" button, and animated reactions based on user choices.

## ✨ Features
- 📝 **Name Input Validation**: Ensures a valid name format (1-3 words, only letters, max 30 characters).
- 💕 **Valentine Proposal**: Asks the user, "Will you be my Valentine?" with Yes/No options.
- 🎭 **Shy & Angry Cat Reactions**:
  - "No" Button: Gradually shrinks while an angry cat appears for 1 second.
  - "Yes" Button: Displays a love message with a translucent shy cat.
- 💖 **Floating Hearts Animation**: Animated hearts continuously float in the background.
- 🌐 **Firebase Integration**:
  - **Realtime Database**: Stores user names securely.
  - **Firebase Hosting**: Fast and reliable deployment.

## 🚀 Live Demo
👉 **[Visit the Live Site](https://thisvalentime.web.app/)** 💝

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/thisvalentine.git
cd thisvalentine
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Firebase
1. Go to **Firebase Console** → Select your project.
2. Navigate to **Project Settings** → **General**.
3. Copy your Firebase config and replace it in `src/firebase.js`.

### 4️⃣ Run Locally
```sh
npm start
```
The app will be available at `http://localhost:3000`.

## 🌍 Deployment (Firebase Hosting)
### 1️⃣ Build the Project
```sh
npm run build
```

### 2️⃣ Deploy to Firebase
```sh
firebase deploy
```
Once deployed, your site will be live on `https://thisvalentine.web.app/`.

## 📂 Project Structure
```
thisvalentine/
│-- public/          # Static assets
│-- src/             # React components & styles
│   ├── components/  # Reusable components
│   ├── App.js       # Main React component
│   ├── App.css      # Styling for the app
│   ├── firebase.js  # Firebase configuration
│-- build/           # Production-ready files (after `npm run build`)
│-- package.json     # Dependencies and scripts
│-- README.md        # Project documentation
```

## 🤝 Contributing
Pull requests are welcome! If you’d like to improve the app, follow these steps:
1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature-name`)
3. **Commit** your changes (`git commit -m "Added a cool feature"`)
4. **Push** to your fork (`git push origin feature-name`)
5. **Open** a Pull Request 🚀

## 🛠 Built With
- **React.js** - Frontend framework
- **Firebase** - Hosting & Realtime Database
- **CSS3** - Styling & animations

## 📧 Contact
Have questions or suggestions? Reach out!
📩 Email: yourname@email.com
🔗 GitHub: [yourgithub](https://github.com/yourusername)

---
🎉 *Happy Valentine's Day! Spread the love!* 💝

