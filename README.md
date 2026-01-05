<p align="center"><h1 align="center">DND_HELPER</h1></p>
<p align="center">
	<img src="https://img.shields.io/github/license/filipejunqueiro/dnd_helper?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/filipejunqueiro/dnd_helper?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/filipejunqueiro/dnd_helper?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/filipejunqueiro/dnd_helper?style=default&color=0080ff" alt="repo-language-count">
</p>
<br>

##  Project Structure

```sh
└── dnd_helper/
    ├── LICENSE
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── public
    │   └── dnd.avif
    ├── src
    │   ├── assets
    │   │   └── dnd_background.avif
    │   ├── components
    │   │   ├── Footer.tsx
    │   │   ├── ModeToggle.tsx
    │   │   ├── Navbar.tsx
    │   │   └── ui
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── dialog.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── input.tsx
    │   │       ├── navigation-menu.tsx
    │   │       ├── separator.tsx
    │   │       └── sheet.tsx
    │   ├── index.css
    │   ├── lib
    │   │   └── utils.ts
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── Classes
    │   │   │   └── index.tsx
    │   │   ├── Landing
    │   │   │   └── index.tsx
    │   │   └── NotFound
    │   │       └── index.tsx
    │   ├── providers
    │   │   └── ThemeProvider
    │   │       └── index.tsx
    │   ├── services
    │   │   └── classes
    │   │       └── index.ts
    │   └── utils
    │       ├── api.ts
    │       └── routes.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```
##  Getting Started

###  Prerequisites

Before getting started with dnd_helper, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** PNPM or NPM

###  Installation

Install dnd_helper using one of the following methods:

**Build from source:**

1. Clone the dnd_helper repository:
```sh
❯ git clone https://github.com/filipejunqueiro/dnd_helper
```

2. Navigate to the project directory:
```sh
❯ cd dnd_helper
```

3. Install the project dependencies:


**Using `pnpm or npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-CB3837.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)[<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ pnpm install
```

###  Usage
Run dnd_helper using the following command:
**Using `pnpm or npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-CB3837.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)[<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ pnpm run dev
```

###  Building
Build the app using the following command:
**Using `pnpm or npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-CB3837.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)[<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ pnpm run build
```

###  Testing
Build the app and then run the test using the following command:
**Using `pnpm or npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-CB3837.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)[<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ pnpm run preview
```

###  Linting
Lint the app using the following command:
**Using `pnpm or npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-CB3837.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)[<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ pnpm run lint
```
