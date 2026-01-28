# 👨‍💻 Adarsh Sharma - Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=flat&logo=framer)

A modern, high-performance personal portfolio website built to showcase my Full Stack Development and Cyber Security projects. Designed with a focus on responsiveness, interactivity, and clean UI/UX.

**🔗 Live Demo:** [Click here to view (Add your Vercel Link)]

---

## 🚀 Key Features

- **⚡ Next.js 14 App Router:** Leveraging the latest React framework features for server-side rendering and optimal performance.
- **🎨 Tailwind CSS Styling:** Fully responsive design with a custom Slate & Indigo professional color palette.
- **🌗 Dark/Light Mode:** Seamless theme switching with system preference detection (built with `next-themes`).
- **✨ Interactive Animations:** Smooth scroll reveals, spotlight hover effects on project cards, and transitions using **Framer Motion**.
- **🧩 Modular Architecture:** Clean code structure with reusable UI components and a centralized Data Layer for easy updates.
- **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop screens.
- **📧 Working Contact Form:** Integrated with **EmailJS** to send messages directly to your inbox without a backend.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (React) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Utils** | `clsx`, `tailwind-merge` |

---

## 📂 Project Structure
```plaintext
portfolio/
├── app/                  # Next.js App Router (Pages, Layouts, Global Styles)
├── components/           # React Components
│   ├── ui/               # Reusable primitives (Cards, Magic Buttons)
│   └── ...               # Section-specific components (Hero, Projects, Skills, etc.)
├── data/                 # Centralized content layer (Text, Links, Config)
├── public/               # Static Assets (Images, Icons)
└── utils/                # Helper functions (Tailwind class merger)
```
---

## 🔐 Environment Variables

To run this project locally with a working contact form, you will need to add the following environment variables to your `.env.local` file:

```Bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
---

## 🏃‍♂️ Getting Started Locally

Follow these steps to run the project on your local machine.

### 1. Clone the Repository
```Bash
git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
cd YOUR-REPO-NAME
```


### 2. Install Dependencies
```Bash
npm install
```

### 3. Run the Development Server
```Bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

---

## 🎨 Customization Guide

### Updating Content

You don't need to dig into complex component code to change the text.

* Go to **`data/index.ts`**.
* Update the `personalInfo`, `projects`, `skills`, or `services` arrays.
* The site will automatically update to reflect your changes.

### Adding Images

* Place your images in the `public/projects/` folder (e.g., `public/projects/p1.png`).
* Reference them in the data file as `/projects/p1.png`.

---

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Go to Vercel and import your project.
3. Add your Environment Variables in the Vercel Settings.
4. Click **Deploy**.

---

## 📬 Contact

**Adarsh Sharma**

* 📧 Email: [adarsh0103sharma@gmail.com](mailto:adarsh0103sharma@gmail.com)
* 💼 LinkedIn: [Your LinkedIn Profile URL](https://linkedin.com)
* 🐙 GitHub: [Your GitHub Profile URL](https://github.com)

---

Developed with ❤️ using **Next.js** & **Tailwind CSS**.

---

## 💡 Author

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Adarsh234">Adarsh234</a></sub>
</div>