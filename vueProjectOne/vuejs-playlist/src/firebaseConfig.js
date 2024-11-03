import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXrffaIPytGGVGGiWkvkiWTE-sX7MhIcQ",
  authDomain: "nn-vue-playlist-63c1b.firebaseapp.com",
  projectId: "nn-vue-playlist-63c1b",
  storageBucket: "nn-vue-playlist-63c1b.firebasestorage.app",
  messagingSenderId: "12871488808",
  appId: "1:12871488808:web:116ec0bdfa23d397fa6c1d",
  measurementId: "G-GRWWQQFK4M",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
