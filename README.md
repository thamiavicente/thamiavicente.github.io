<img alt="Thamiris Andrade Vicente Logo" src="src/app/favicon.ico" style="width: 120px">

# Welcome to my personal website
[![Status: in development](https://img.shields.io/badge/status-in%20development-yellow)](#)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Framework: Nextjs](https://img.shields.io/badge/framework-Nextjs-blue.svg)](https://nextjs.org/)
[![Language: Typescript](https://img.shields.io/badge/language-TypeScript-blue.svg)](https://nextjs.org/)

This project aims to centralize my professional contacts, share a bit of my journey, and serve as a space to practice **web accessibility** and modern technologies such as **React** and **Next.js**.

| :rocket: [Deploy](https://thamiavicente-github-io.vercel.app/) | :octocat: [Code](https://github.com/thamiavicente/thamiavicente.github.io) | :art: [Layout](https://www.figma.com/design/MiNdzYT8NJ8ik6IKV2J5sZ/thamiavicente.github.io?node-id=0-1&m=dev&t=JWIL95lUQuPPUZj0-1)|
|-|-|-|

## :sparkles: Features

- Built using Next.js App Router (/app) with file-based routing
- Home page with greeting and introduction  
- "About" page with my career path in tech  
- Contact page with email and professional links
  - Gmail connection through Nodemailer for contact form handling
  - reCAPTCHA v3 for user validation
- Accessibility best practices applied (tested with Google Lighthouse and WAVE)
  - Widget VLibras for accessibility
  
> [!NOTE]
This project is **in development**: more sections, visual improvements, and automated tests are coming soon.

## :hammer_and_pick: Tools

| Technology   | Version     |
|--------------|-------------|
| [React](https://react.dev/)        | ^19.0.0     |
| [Next.js](https://nextjs.org/)      | 15.3.2      |
| [Node.js](https://nodejs.org/en)      | ^18.20.8    |
| [Nodemailer](https://nodemailer.com/)   | ^7.0.3 |
| [reCaptcha](https://developers.google.com/recaptcha/docs/v3?hl=pt-br) | V3 |
| [VLibras](https://vlibras.gov.br/doc/widget/installation/webpageintegration.html?_ga=2.205222480.1595640842.1682445746-816840059.1655413110) | v1.1.0|
| [Vercel](https://vercel.com/) | :white_check_mark: Deployed |

## :beginner: Running Locally

```bash
# 1. Clone this repository
git clone git@github.com:thamiavicente/thamiavicente.github.io.git

# 2. Navigate to the project folder
cd thamiavicente.github.io

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```
> [!TIP]
The app will be available at http://localhost:3000.

## :white_check_mark: Testing
- [x] Google Lighthouse
- [x] WAVE
- [ ] Unit tests
- [ ] End-to-end tests

> [!WARNING]
Automated testing pending (unit and end-to-end).

## :bulb: Contributions
Feel free to open an [issue](https://github.com/thamiavicente/thamiavicente.github.io/issues) with suggestions, improvements, or bug reports. Feedback is welcome!

## :page_with_curl: License
This project is licensed under the [MIT License](./License).

Thamiris Andrade Vicente - 2025
