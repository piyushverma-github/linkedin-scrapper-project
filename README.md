A full-stack project that scrapes LinkedIn profile information using a Chrome extension and saves it to a Node.js + Express + Sequelize backend.

🚀 Features
- Chrome extension that automatically opens LinkedIn profiles (manual login required)
- Extracts profile details:
  - Name
  - URL
  - About
  - Bio
  - Location
  - Follower count
  - Connection count
- Saves data to a backend server (Express + Sequelize + SQLite)
- Simple REST API:
  - POST /api/profiles → Save a profile
  - GET /api/profiles → View all saved profiles

📂 Project Structure
linkedin-scraper-project/
 ┣ backend/
 ┃ ┣ models/
 ┃ ┃ ┗ profile.js
 ┃ ┣ server.js
 ┃ ┣ package.json
 ┃ ┗ database.sqlite
 ┣ extension/
 ┃ ┣ manifest.json
 ┃ ┣ popup.html
 ┃ ┣ popup.js
 ┃ ┣ background.js
 ┃ ┗ content.js
 ┗ README.md

💻 Setup Instructions

1️⃣ Backend
1. Navigate to backend folder:
   cd backend
2. Install dependencies:
   npm install
3. Start the server:
   npm start

Server runs at: http://localhost:5000
Test GET API:
   curl http://localhost:5000/api/profiles

2️⃣ Chrome Extension
1. Open Chrome → chrome://extensions
2. Enable Developer Mode
3. Click Load unpacked → select the extension/ folder
4. Pin the extension icon (optional)
5. Edit popup.js to update LinkedIn profiles

3️⃣ Run the Scraper
1. Log in to LinkedIn manually
2. Click the extension → Scrape Profiles
3. Tabs open one by one, scrape profile data, and send it to backend
4. Check saved profiles:
   http://localhost:5000/api/profiles

🛠️ Notes
- LinkedIn selectors may change. Inspect profile page and update content.js if needed.
- Tabs have a 5s delay to allow page load.

⚡ Tech Stack
- Backend: Node.js, Express, Sequelize, SQLite
- Frontend: Chrome Extension (Manifest V3, JS, HTML)
- Libraries: body-parser, cors, sequelize, sqlite3
