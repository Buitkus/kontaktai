
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjaI2fHdzT17wmNgVPMafEwAtdrhhJFig",
  authDomain: "kontaktai-f0229.firebaseapp.com",
  projectId: "kontaktai-f0229",
  storageBucket: "kontaktai-f0229.appspot.com",
  messagingSenderId: "762411165486",
  appId: "1:762411165486:web:95c027a4ebd911da637cbf"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
