# 📄 CV Builder — React Application

A web-based CV builder that lets you fill in your personal details through a clean form interface and see your CV update in real time via a live preview. When you're happy with the result, you can export it directly as a PDF.

---

## ✨ Features

- **Live CV Preview** — the CV updates instantly as you type, with no need to refresh
- **Personal Information** — name, job title, email, phone, location, and portfolio/LinkedIn URL
- **Profile Picture Upload** — click the avatar circle to upload a photo, which appears immediately in the preview
- **Professional Summary** — multi-line text area with a live character counter
- **Work Experience** — add and remove multiple experience entries dynamically
- **Skills** — tag-style input; press `Enter` or `,` to add a skill pill, click `✕` to remove
- **PDF Export** — downloads a PDF that mirrors the live preview styling exactly, using `html2canvas` and `jsPDF`

---

## 🛠️ Tech Stack

- **React** (via Vite)
- **JavaScript (ES6+)**
- **CSS** (plain, no frameworks)
- **html2canvas** — captures the live preview as an image
- **jsPDF** — converts the captured image into a downloadable PDF
- **Lucide React** — icons

---

## ⚠️ Known Limitations

> **This app is optimized for large desktop screens only.**
> The layout is not fully responsive and may not display correctly on laptops with smaller screens, tablets, or mobile devices. Responsive design support is planned for a future update.

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cv-builder.git

# Navigate into the project folder
cd cv-builder

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
  components/
    PersonalInfoSection.jsx
    ProSummarySection.jsx
    WorkExperience.jsx
    SkillsSection.jsx
    FormSection.jsx
    FormInput.jsx
    SkillPill.jsx
  styles/
    App.css
    Form.css
  App.jsx
  main.jsx
```

---

## 🔮 Future Plans

- Responsive design for mobile and small screens
- Multiple CV templates to choose from
- Save and load CV data from local storage
- More customization options (fonts, colors, layout)

---

*Built with React as a learning project.*
