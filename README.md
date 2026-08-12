# 🚀 SpaceX Orbit Telemetry Hub (`spacex-orbit-telemetry`)

A state-of-the-art, high-performance web application for tracking SpaceX satellites, live launch telemetry, 3D orbital dynamics, spaceflight news, and rocket fleet metrics.

![SpaceX Telemetry Hub Banner](/public/assets/starship_mars_hero.jpg)

---

## 🌟 Key Features

1. **🌍 Real-Time 3D Earth Satellite Tracker (`SGP4 Physics`)**:
   - Interactive 3D WebGL Earth globe powered by Three.js.
   - Real-time orbital propagation tracking 6,800+ active satellites & NORAD catalog IDs.
   - Interactive orbit ring visualization and camera focus tracking.

2. **🚀 3D Starship & Falcon 9 Launch Flight Simulator**:
   - Physics-synced launch staging countdown, engine flame telemetry, and stage separation physics.
   - Multiple mission camera angles (`Pad Cam`, `Stage 1 Booster`, `Stage 2 Upper Stage`, `Autonomous Drone Ship`).

3. **📰 Live Spaceflight News Telemetry Feed**:
   - Real-time space news fetched live from Spaceflight News API (`api.spaceflightnewsapi.net`).
   - Category filtering (`SpaceX & Starship`, `Starlink & Comms`, `NASA & Artemis`) and instantaneous search.

4. **📊 SpaceX Launch Manifest & Fleet Telemetry**:
   - Live T-minus countdowns to upcoming launches.
   - Official live webcast links (`https://x.com/SpaceX` and SpaceX mission pages).
   - Reusable booster landing telemetry records & launchpad breakdown.

5. **📱 Universal Mobile & Smartphone Responsiveness**:
   - 100% responsive across all screen sizes (iPhone SE, iPhone 15/16, Android, iPads, 4K displays).

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18 + Vite
- **3D Graphics & Physics**: Three.js + SGP4 Orbit Propagation
- **Icons & UI System**: Lucide React + Obsidian Glassmorphism Design Token System
- **API Data Sources**: CelesTrak TLE API + SpaceX REST API v4 + Spaceflight News API v4

---

## ⚡ Quick Start (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/spacex-orbit-telemetry.git

# 2. Navigate to project directory
cd spacex-orbit-telemetry

# 3. Install dependencies
npm install

# 4. Launch local dev server
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in your web browser.

---

## 🌐 1-Click Free Deployment on Netlify

### Option A: Drag & Drop Deployment (Easiest & Fastest)
1. Run `npm run build` in your terminal. This creates a production folder named `dist`.
2. Go to **[Netlify Drop](https://app.netlify.com/drop)**.
3. Drag and drop the `dist` folder into the Netlify upload zone.
4. Your site will be live instantly with a free SSL domain!

### Option B: Automatic GitHub CI/CD Deployment
1. Create a new GitHub repository named `spacex-orbit-telemetry`.
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SpaceX Orbit Telemetry Hub"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/spacex-orbit-telemetry.git
   git push -u origin main
   ```
3. Log into **[Netlify](https://app.netlify.com)** and click **"Add new site" ➔ "Import an existing project"**.
4. Select GitHub and choose `spacex-orbit-telemetry`.
5. Set Build Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click **Deploy Site**. Every future push to main will automatically deploy your live website!

---

## 📄 License
MIT License. Created for space enthusiasts and SpaceX orbital telemetry tracking.
