import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyDH3DDaex2ywEjK09r2qpahqVVLpsPg4qQ",
  authDomain: "thisvalentime.firebaseapp.com",
  databaseURL: "https://thisvalentime-default-rtdb.firebaseio.com/",
  projectId: "thisvalentime",
  storageBucket: "thisvalentime.firebasestorage.app",
  messagingSenderId: "609827049437",
  appId: "1:609827049437:web:f95635185670b2b0d2f034",
  measurementId: "G-LLBJ748PN3"
};

const createHeart = () => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

setInterval(createHeart, 500);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const ValentineApp = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noSize, setNoSize] = useState(16);
  const [yesSize, setYesSize] = useState(16);
  const [showAngryCat, setShowAngryCat] = useState(false);
  const [showShyCat, setShowShyCat] = useState(false); // 🐱 New state for shy cat

  const handleSubmit = (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z]{1,15}( [A-Za-z]{1,15}){0,2}$/;

    if (!name.match(namePattern)) {
      alert("Please enter a valid name (1-3 words, only letters, max 30 characters).");
      return;
    }

    if (name.trim()) {
      const usersRef = ref(db, "users");
      const newUserRef = push(usersRef);
      set(newUserRef, { name })
        .then(() => console.log("Data saved:", name))
        .catch((error) => console.error("Firebase error:", error));

      setSubmitted(true);
    }
  };

  const handleNoClick = () => {
    setNoSize(noSize * 0.8);
    setYesSize(yesSize * 1.3);
    setShowAngryCat(true);

    setTimeout(() => {
      setShowAngryCat(false);
    }, 1000); // Hide angry cat after 1 sec
  };

  const handleYesClick = () => {
    setAccepted(true);
    setShowShyCat(true); // 🐱 Show shy cat when "Yes" is clicked
  };

  return (
    <div className="container">
      {!submitted ? (
        <div>
          <h2>What's your name?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z ]*$/.test(value) && value.split(" ").length <= 3) {
                  setName(value);
                }
              }}
              required
              placeholder="Enter your name"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : !accepted ? (
        <div>
          <h2>Will you be my Valentine?</h2>
          <button 
            style={{ fontSize: `${yesSize}px`, margin: "10px", padding: "10px 20px", cursor: "pointer" }}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button 
            style={{ fontSize: `${noSize}px`, margin: "10px", padding: "10px 20px", cursor: "pointer" }}
            onClick={handleNoClick}
          >
            No
          </button>
          {showAngryCat && (
            <img 
              src="https://i.pinimg.com/736x/50/e9/3e/50e93e96cbcd509900e9ad4b2910c40d.jpg" 
              alt="Angry Cat" 
              className="angrycat" 
            />
          )}
        </div>
      ) : (
        <div className="love-container">
          {showShyCat && ( // 🐱 Show shy cat permanently when "Yes" is clicked
            <img 
              src="https://i.pinimg.com/736x/9f/ee/55/9fee55fe5559da752bd2851103b9f69b.jpg" 
              alt="Shy Cat" 
              className="shycat" 
            />
          )}
          <h2 className="love-message">Yay! I knew it, {name}. I love you too ❤️</h2>
        </div>
      )}
    </div>
  );
};

export default ValentineApp;
