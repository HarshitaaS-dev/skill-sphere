/**
 * SkillSphere – Firebase Web Modular Integration
 * Connects Firebase Authentication, Cloud Firestore, and Analytics
 */

// Firebase Configuration from your project credentials
const firebaseConfig = {
  apiKey: "AIzaSyAt4lKnGH5w-G0laKIVaTYBLxhxQPv82iw",
  authDomain: "assesment-sphere.firebaseapp.com",
  projectId: "assesment-sphere",
  storageBucket: "assesment-sphere.firebasestorage.app",
  messagingSenderId: "537320760457",
  appId: "1:537320760457:web:13e87cb4d1b485b8289258",
  measurementId: "G-H901YBMKVM"
};

// Global Firebase container
window.SkillSphereFirebase = {
  config: firebaseConfig,
  isInitialized: false,
  currentUser: null,
  auth: null,
  db: null,
  analytics: null
};

// Dynamic Modular Loader from Google CDN
(async function initFirebase() {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
    const { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
    const { getFirestore, collection, addDoc, getDocs, query, where, orderBy, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
    const { getAnalytics, isSupported } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js");

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    window.SkillSphereFirebase.app = app;
    window.SkillSphereFirebase.auth = auth;
    window.SkillSphereFirebase.db = db;
    window.SkillSphereFirebase.isInitialized = true;

    // Initialize Analytics if supported in this environment
    if (await isSupported()) {
      window.SkillSphereFirebase.analytics = getAnalytics(app);
    }

    console.log(" SkillSphere: Firebase connected successfully to project [assesment-sphere]");

    // Authentication State Observer
    onAuthStateChanged(auth, (user) => {
      window.SkillSphereFirebase.currentUser = user;
      if (typeof window.onFirebaseAuthStateChanged === 'function') {
        window.onFirebaseAuthStateChanged(user);
      }
    });

    // Helper: Register with Email, Password & Display Name
    window.fbRegisterUser = async (email, password, fullName) => {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (fullName) {
        await updateProfile(userCredential.user, { displayName: fullName });
      }
      return userCredential.user;
    };

    // Helper: Login with Email & Password
    window.fbLoginUser = async (email, password) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    };

    // Helper: Logout
    window.fbLogoutUser = async () => {
      await signOut(auth);
    };

    // Helper: Save Attempt to Cloud Firestore
    window.fbSaveQuizAttempt = async (attemptData) => {
      try {
        const user = auth.currentUser;
        const payload = {
          ...attemptData,
          userId: user ? user.uid : "anonymous_candidate",
          userEmail: user ? user.email : "guest@skillsphere.dev",
          createdAt: serverTimestamp()
        };
        const docRef = await addDoc(collection(db, "quizAttempts"), payload);
        console.log(" Attempt saved to Firestore with ID:", docRef.id);
        return docRef.id;
      } catch (err) {
        console.warn("Firestore sync notice (local backup retained):", err.message);
        return null;
      }
    };

  } catch (error) {
    console.warn("Firebase modular initialization fallback:", error.message);
  }
})();

