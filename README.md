Listed directory Mohamed-Ayman-Dashboard
Viewed package.json:1-45
Viewed index.html:1-16
Listed directory src
Listed directory pages
Listed directory components
Viewed App.tsx:1-13
Created task.md

Analyzed repository structure. Proceeding to read routing and main views.

Viewed index.tsx:1-20
Viewed Dashboard.tsx:1-33
Edited task.md

# 📊 E-Commerce Admin Dashboard

A modern, responsive React-based admin dashboard built to manage and visualize e-commerce platform data. This project provides an intuitive interface for tracking key metrics, managing users and products, and analyzing data through interactive charts and data grids.

## 🚀 Features

- **Interactive Dashboard:** High-level summary cards for Customers, Products, and Categories.
- **Data Visualization:** Insightful charts displaying user demographics (Gender Chart) and product distribution.
- **Advanced Data Management:** Rich data grids for Customers and Products with built-in sorting and pagination.
- **Responsive Layout:** A flexible UI with a collapsible Sidebar and adaptable App Bar for desktop and mobile viewing.
- **Real-time Notifications:** Dedicated drawers for Messages and Notifications.
- **Mock Data Generation:** Integrated with Faker.js to populate realistic test data seamlessly.


## 💻 Tech Stack & Tools

- **Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **UI Framework:** [Material UI (MUI) v7](https://mui.com/), Emotion
- **Routing:** [React Router v7](https://reactrouter.com/)
- **State Management & Fetching:** [TanStack React Query v5](https://tanstack.com/query/latest), Axios
- **Data Visualization:** MUI X Charts, [Chart.js](https://www.chartjs.org/) & React-Chartjs-2
- **Utilities:** Faker.js (mock data), React CountUp (number animations), ESLint

## 🏗 System Architecture

The project follows a modular, component-driven architecture:
- **Routing Layer:** Centralized routing using React Router (`createBrowserRouter`), wrapped in a `RootLayout`.
- **Pages / Views:** Divided into specific domains (`Dashboard`, `Customers`, `Products`).
- **Components:** Reusable UI components including specific cards, charts, and data grids isolated from the business logic.
- **Data Fetching:** Handled transparently by React Query hooks, separating data synchronization from UI rendering.

## 🛠 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Mohamed-Ayman-Dashboard
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```

## 🏃‍♂️ How to Run Locally

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173`.

## 📖 Usage Guide

- **Dashboard Page (`/`):** View overall statistics, revenue summaries, user demographics, and product distribution charts.
- **Products Page (`/Products`):** Access the complete inventory with detailed grid views.
- **Customers Page (`/Customers`):** Manage customer data, contact info, and activity status.
- **Drawers:** Click on the notification or message icons in the App Bar to open the respective right-side drawers.

## 📁 Folder Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components (Sidebar, Charts, Cards, DataGrids)
├── data/            # Mock data or static data constants
├── interfaces/      # TypeScript interfaces/models
├── pages/           # Route views (Dashboard, Customers, Products)
├── types/           # Global type definitions
├── utils/           # Helper functions and utilities
├── App.tsx          # Main application entry component
├── index.css        # Global styles
└── main.tsx         # React DOM rendering
```

## 🤝 Contribution Guidelines

Contributions, issues, and feature requests are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📬 Contact / Author

- **Author:** Mohamed Ayman
- **GitHub:** (https://github.com/MohamedAyman-11)
- **LinkedIn:** (https://www.linkedin.com/in/mohamedayman-dev/)