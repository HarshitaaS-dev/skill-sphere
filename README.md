# SkillSphere – Examination Portal & Teacher Console

> **Tagline:** *Test Your Skills. Track Your Growth.*

SkillSphere is a clean, focused technical examination portal designed directly for students to take timed exams, and for teachers to author assessments, add custom questions, and export student gradebooks.

---

## 🌟 How the Platform Works

### 1. 🧑‍🎓 Student Portal (Default Home Page)
- **Direct Access:** Students immediately see their personal Candidate Desk, overall statistics (Attempted, Average Score, Highest Score), and the full catalog of assessments.
- **Timed Exam Engine:**
  - Synchronized countdown timer with automatic submission at `00:00`.
  - Question Palette (Answered, Unanswered, Marked for Review, Current).
  - Clear choice & Mark for review.
  - Zero-data-loss recovery: refreshing the browser seamlessly restores selected answers and remaining time.
- **Results & Solution Review:**
  - Real-time scoring with negative marking deductions.
  - Pass/Fail status.
  - Line-by-line solution review with canonical answers and technical explanations.
  - Printable scorecards.

---

### 2. 👨‍🏫 Teacher Panel (Top-Right Button)
- Click the **"Teacher Panel"** button on the top right.
- Enter the faculty password.
  - **Default Password:** `teacher`
- **Features in the Teacher Panel:**
  1. **Author New Assessment:** Configure Title, Subject, Duration, Cutoff %, and Negative Marks.
  2. **Question Builder:** Enter custom question text, 4 options (A, B, C, D), mark the correct answer, and add an explanation. Custom questions are immediately added to the student catalog.
  3. **Delete/Manage Quizzes:** Remove or preview any assessment.
  4. **Student Gradebook:** Live roster with candidate names, scores, time taken, and pass/fail status.
  5. **Export CSV:** One-click gradebook download.
  6. **Lock Console:** Click **"Lock / Exit"** to return to the student view and re-protect the panel.

---

## 🚀 Running Locally or Hosting on GitHub Pages

### Run Locally:
1. Open the folder `skill-sphere-static` in VS Code.
2. Open `index.html` with Live Server:
   `http://127.0.0.1:5500/skill-sphere-static/index.html`

### Host on GitHub Pages:
```bash
git init
git add .
git commit -m "SkillSphere v1.1 - Student Exam Portal with Teacher Console"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

In GitHub:
1. Go to repository **Settings** → **Pages**.
2. Select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then click **Save**.
4. The site is live at: `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`.

---

## 🔥 Firebase Integration

- **Project ID:** `assesment-sphere`
- **Cloud Firestore:** Scores and student submissions automatically sync to the `quizAttempts` collection.
- **Environment:** Configured in `.env` (protected by `.gitignore`).
